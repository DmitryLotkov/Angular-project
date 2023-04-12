import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {BehaviorSubject, catchError, EMPTY, map, Observable, throwError} from "rxjs";
import {environment} from "../environment/enviroment.prod";
import {logMessages} from "@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild";
import {BeautyService} from "./beauty.service";

export interface Todo {
  id: string
  title: string
  order: number
  addedDate: string
}

export interface BaseResponse<T = {}> {
  data: T
  messages: string[]
  fieldsError: string[]
  resultCode: number
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos$: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([])

  constructor(private http: HttpClient, private beautyService: BeautyService) {
  }

  httpOptions = {
    withCredentials: true,
    headers: {
      "api-key": environment.apiKey
    }
  }

  private errorHandler(err: HttpErrorResponse) {
    this.beautyService.log(err.message, 'error')
    return EMPTY
  }

  getTodos() {
    this.http.get<Todo[]>(`${environment.baseUrl}/todo-lists`, this.httpOptions)
      .pipe(catchError(this.errorHandler.bind(this)))
      .subscribe(todos => {
        this.todos$.next(todos)
      })
  }

  createTodo() {
    const randomNumber = Math.floor(Math.random() * 100)
    const title = "Angular " + randomNumber
    this.http.post<BaseResponse<{ item: Todo }>>(`${environment.baseUrl}/todo-lists`,
      {title}, this.httpOptions)
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
    this.http.delete<BaseResponse>(`${environment.baseUrl}/todo-lists/${todoId}`, this.httpOptions)
      .pipe(
        map(() => {
          return this.todos$.getValue().filter(tl => tl.id !== todoId)
        }), catchError(this.errorHandler.bind(this))
      ).subscribe(todos => {
      this.todos$.next(todos)
    })
  }
}

