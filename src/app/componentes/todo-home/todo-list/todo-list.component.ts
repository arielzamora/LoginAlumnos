import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Input, Output,ViewChild, EventEmitter } from '@angular/core';
import { Todo } from './../../../model/todo';
import { TodoService } from './../../../services/todo.service';
import { TodoRegisterComponent } from './../../todo-home/todo-register/todo-register.component';
import { TodoEditComponent } from './../../todo-home/todo-edit/todo-edit.component';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @ViewChild('modalModify',{static:false}) modalModify: TodoEditComponent;
  @ViewChild('modalRegistro',{static:false}) modalRegistro: TodoRegisterComponent;
  @Input() listaTodo: Todo[];
  @Input() title: string;
  @Output() refrescarEvent: EventEmitter<void>;
  form: FormGroup;
  error: boolean;
  errorMessage: string;
  showModal: boolean;
  todo:Todo={};
  showModalRegistro: boolean;

  options: Object = {
    fieldSeparator: ';',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true,
    headers: ['Id','Descripcion', 'Estado', 'Foto'],
    showTitle: true,
    title: 'Lista de Todo',
    useBom: true,
    removeNewLines: true,
    keys: ['id','descripcion','estado','foto']
  };
 
  data:Array<any>;
  dataFiltros: Todo[];
  filterPost:string;
  constructor(private todoService: TodoService, private fb: FormBuilder,public domSanitizer: DomSanitizer) {
    this.refrescarEvent = new EventEmitter<void>();
    this.filterPost ="";
    this.cargarLista();
  }

  ngOnInit() {
  }


  public cargarLista() {
   
    if(!this.listaTodo){
      this.todoService.Listar().subscribe(
        data => {
          this.listaTodo = data;
          this.dataFiltros=this.listaTodo;
        },
        error => {
          console.log(error);
        }
      );
    }

  }


  showModifyModal(todo: Todo) {
    this.modalModify.cargarModal(todo);
    this.showModal = true;
  }

  showRegistroModal() {
    this.modalRegistro.cargarModal();
    this.showModalRegistro = true;
  }


  refrescar() {
    this.refrescarEvent.emit();
  }

  darDeBaja(todo:Todo) {
    this.todoService.Eliminar(todo).
    then( response => {
      this.cargarLista();
    },
    error => {
      console.log(error);
    });
  }

  selectedIdTodo(value:string){
    this.data = new Array<any>();
    this.listaTodo=null;
    if(value){
      this.dataFiltros.forEach(todo =>
        {
          if(todo.idTodo == value)
          {
            this.data.push(todo);
          }
        });
        this.listaTodo=this.data;
      }else{
      this.listaTodo=this.dataFiltros;
      }
   

  }

  selectedEstado(value:string){
    this.data = new Array<any>();
    this.listaTodo=null;
    if(value){
    this.dataFiltros.forEach(todo =>
      {
        if(todo.estado == value)
        {
          this.data.push(todo);
        }
      });
      this.listaTodo=this.data;
    }else{
      this.listaTodo=this.dataFiltros;
    }

  }




}
