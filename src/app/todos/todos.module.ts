import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosRoutingModule } from './todos-routing.module';
import {TodosComponent} from "./components/todos/todos.component";
import {ButtonModule} from "primeng/button";


@NgModule({
  declarations: [TodosComponent],
  imports: [
    CommonModule,
    TodosRoutingModule,
    ButtonModule
  ]
})
export class TodosModule { }
