import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TodosComponent} from "./components/todos/todos.component";
import {LoginComponent} from "./components/login/login.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {UsersComponent} from "./components/users/users.component";

const routes: Routes = [
  { path: "", component: TodosComponent },
  { path: "login", component: LoginComponent },
  { path: "users", component: UsersComponent },
  { path: "404", component: PageNotFoundComponent },//wildCard route если нет совпадения урла, то будет редирект сюда. Обязан быть в конце массива!!!
  { path: "**", redirectTo: "/404" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingRoutingModule { }
