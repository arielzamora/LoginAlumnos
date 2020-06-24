  import { Registro } from 'src/app/Common/Registro';
import { FormBuilder, Validators } from '@angular/forms';
import { MateriaService } from '../../../Services/materia.service';
import { Materia } from '../../../Model/Materia';
import { Component, OnInit ,Output,Input,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-registro-materia',
  templateUrl: './registroMateria.component.html',
  styleUrls: ['./registroMateria.component.scss']
})
export class RegistroMateria extends Registro implements OnInit {
  private file;
  
  @Output() altaMateriaOk: EventEmitter<any> = new EventEmitter<any>();
  @Input() listaUsuarios: Array<any> = new Array<any>();
  @Input() listaMaterias: Array<any> = new Array<any>();

  public nombre: string;
  public cuatrimestre: string = "Primero";
  public cupos: number;
  public profesor: string;
  public imagen: any;

  public listadoProfesores:Array<any>=new Array<any>();


  constructor(private fb: FormBuilder, private materiaService: MateriaService) {
    super();
    
    this.resetForm();
  }

  resetForm() {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      cuatrimestre: ['', Validators.required],
      cupo: [0, Validators.required],
      profesor: ['',Validators.required],
      imagen:['',Validators.required]
    });


  }

  ngOnInit() {

    this.listaUsuarios.forEach(usuarios =>{
      if(usuarios.perfil == "Profesor")
      {
        this.listadoProfesores.push(usuarios);
      }

    });
  }

  onFileChange(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.file = {
          filename: file.name,
          filetype: file.type,
          value: reader.result.toString().split(',')[1]
        };
      };
    }
  }

  public Submit(): void {
    this.errorMessage = '';
    this.error = false;
    this.success = false;
    if (this.form.valid) {

      const materia: Materia = {
        nombre: this.form.get('nombre').value,
        cuatrimestre: this.form.get('cuatrimestre').value,
        cupo: this.form.get('cupo').value,
        profesor: this.form.get('profesor').value,
        imagen: this.file.value
      };
      
      if(this.verificar(materia)){
        this.materiaService.Registrar(materia)
        .then(
          response => {
            if (response) {
              this.success = true;
              this.resetForm();
              // this.form.get('tipo').setValue('Socio');
              // this.captcha.reloadCaptcha();
              // this.captcha.resetCaptcha();
              this.registradoCorrectamente.emit();
            } else {
              this.error = true;
              this.errorMessage = "ocurrio un error al insertar un Materia";
            }
          }
        )
        .catch(
          error => {
            this.error = true;
            this.errorMessage = "ocurrio un error al insertar un Materia";
          }
        );
      }
    } else {
      this.errorMessage = 'Debe completar los campos correctamente.';
      this.error = true;
   }
  }
 

  verificar(materia:Materia)
  {
    let retorno:boolean = true;
    let okMat:boolean = true;
    let okProf:boolean = false;


    this.listaMaterias.forEach(mat =>
    {
      if(mat.nombre == materia.nombre)
      {
        okMat = false;
      }
    });

    if(okMat != true || materia.nombre == "")
    {
      retorno=false;
      this.error = true;
      this.errorMessage = "debe ingresar un nombre valido";
    }

    if(materia.cupo < 1 || materia.cupo >50)
    {
      retorno=false;
      this.error = true;
      this.errorMessage = "debe ingresar un cupo valido";
    }

    this.listaUsuarios.forEach(user =>
    {
      if(user.nombre == materia.profesor && user.perfil == "Profesor")
      {
        okProf = true;
      }
    });


    if(okProf == false)
    {
      retorno=false;
      this.error = true;
      this.errorMessage = "ocurrio un error con el profesor";
    }


    return retorno;
  }
}
