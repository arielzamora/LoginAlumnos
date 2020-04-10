
import { TodoListComponent } from './todo-list/todo-list.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-todo-home',
  templateUrl: './todo-home.component.html',
  styleUrls: ['./todo-home.component.scss']
})
export class TodoHomeComponent implements OnInit {

  @ViewChild(TodoListComponent,{static:false})
  private listComponent: TodoListComponent;

  constructor() { 

  }

  ngOnInit() {
  }

  cargarLista() {
    this.listComponent.cargarLista();
  }

}
