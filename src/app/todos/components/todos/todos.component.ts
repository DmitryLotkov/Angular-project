import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {TodoService} from "../../services/todo.service";
import {Todo} from "../../models/todos.model";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})

export class TodosComponent implements OnInit {
  public error = ""
  public todos$!: Observable<Todo[]>

  constructor(private todoService: TodoService) {
  }
  getTodos(){
    this.todoService.getTodos()
  }
  ngOnInit() {
    this.todos$ = this.todoService.todos$
    this.getTodos()
  }

  createTodo(){
    this.todoService.createTodo()
  }

  deleteTodo(todoId:string){
    this.todoService.deleteTodo(todoId)
  }
}
