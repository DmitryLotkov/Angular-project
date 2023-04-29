import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from "./auth/components/page-not-found/page-not-found.component";

const routes: Routes = [

  //{ path: "**", redirectTo: "/404" },
  { path: "404", component: PageNotFoundComponent },//wildCard route если нет совпадения урла, то будет редирект сюда. Обязан быть в конце массива!!!
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
