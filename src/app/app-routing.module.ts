import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TodosComponent} from "./components/todos/todos.component";
import {LoginComponent} from "./components/login/login.component";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {UsersComponent} from "./components/users/users.component";
import {ProfileComponent} from "./components/users/profile/profile.component";
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
  { path: "", component: TodosComponent, canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent },
  { path: "users", component: UsersComponent, canActivate: [AuthGuard] },
  { path: "404", component: PageNotFoundComponent },//wildCard route если нет совпадения урла, то будет редирект сюда. Обязан быть в конце массива!!!
  { path: "profile/:userId", component: ProfileComponent, canActivate: [AuthGuard] },
  { path: "**", redirectTo: "/404" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
