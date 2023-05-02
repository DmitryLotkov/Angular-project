import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {BehaviorSubject, catchError, EMPTY, map} from "rxjs";
import {environment} from "../../environment/enviroment.prod";
import {BeautyService} from "../../core/services/beauty.service";
import {ICommonResponse} from "../../shared/models/core.model";
import {Todo} from "../models/todos.model";



@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos$: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([])

  constructor(private http: HttpClient, private beautyService: BeautyService) {
  }



  private errorHandler(err: HttpErrorResponse) {
    this.beautyService.log(err.message, 'error')
    return EMPTY
  }

  getTodos() {
    this.http.get<Todo[]>(`${environment.baseUrl}/todo-lists`)
      .pipe(catchError(this.errorHandler.bind(this)))
      .subscribe(todos => {
        this.todos$.next(todos)
      })
  }

  createTodo() {
    const randomNumber = Math.floor(Math.random() * 100)
    const title = "Angular " + randomNumber
    this.http.post<ICommonResponse<{ item: Todo }>>(`${environment.baseUrl}/todo-lists`,
      {title})
      .pipe(
        map(res => {
          const newTodo = res.data.item;
          const stateTodos = this.todos$.getValue()
          return [newTodo, ...stateTodos]
        }),
        catchError(this.errorHandler.bind(this))
      ).subscribe((todo) => {
        this.todos$.next(todo)
      }
    )
  }

  deleteTodo(todoId: string) {
    this.http.delete<ICommonResponse>(`${environment.baseUrl}/todo-lists/${todoId}`)
      .pipe(
        map(() => {
          return this.todos$.getValue().filter(tl => tl.id !== todoId)
        }), catchError(this.errorHandler.bind(this))
      ).subscribe(todos => {
      this.todos$.next(todos)
    })
  }
}

