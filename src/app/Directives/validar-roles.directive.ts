import { Directive, Input, ElementRef, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';
import { User } from '../Model/User';
import { AuthService } from '../Services/auth.service';
import { ClienteService } from '../Services/cliente.service';
import * as firebase from 'firebase';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { FirebaseStorage } from '@angular/fire';
import { Observable } from 'rxjs';
import { map }from 'rxjs/operators';

@Directive({
  selector: '[appValidarRoles]'
})
export class ValidarRolesDirective implements OnInit {

  private rolesAdmitidos: string[];

   data :any; 
   perfil:string;
   user:any;
   private userColeccion:AngularFirestoreCollection<User>;
   private users:Observable<User[]>;

  @Input() set appValidarRoles(value: string[]) {
    this.rolesAdmitidos = value;//input de los roles admitidos
  }

  constructor(
    private element: ElementRef,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private authService:AuthService,
/*     private clienteService:ClienteService,
    private afs: AngularFirestore */
  ) {
  }

  ngOnInit() {

    if (this.CheckRoles()) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

  private CheckRoles(): Boolean {
    let retorno: Boolean = true;

   /*  this.data = localStorage.getItem('usuario');  

    if(this.data)
    {
      this.user=JSON.parse(this.data);

      this.perfil = this.user.perfil;
    }else{
      
      let userId=firebase.auth().currentUser.uid;
                           
      this.clienteService.obtenerUser(userId).subscribe(user=>{
        if(user)
        {   
          this.perfil = user[0].perfil;

            localStorage.setItem('usuario',JSON.stringify(user[0]));          
        }
      }); */
  
   /*  } */
   
   /*  if (this.rolesAdmitidos) {
      const tipoUsuario = this.perfil;
      this.rolesAdmitidos.forEach(element => {
        if (tipoUsuario === element) {
          retorno = true;
        }
      });
    } */

    return retorno;
  }

}
