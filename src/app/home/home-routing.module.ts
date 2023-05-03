import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {PageNotFoundComponent} from "../auth/components/page-not-found/page-not-found.component";

const routes: Routes = [{path: "", component: HomeComponent},
  { path: "404", component: PageNotFoundComponent },//wildCard route если нет совпадения урла, то будет редирект сюда. Обязан быть в конце массива!!!
  { path: "**", redirectTo: "/404" },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
