import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './components/login/login.component';
import {InputTextModule} from "primeng/inputtext";
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UsersComponent } from './components/users/users.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    LoginComponent,
    HomeComponent,
    PageNotFoundComponent,
    UsersComponent
  ],
  imports: [
    RouterModule,
    RouterModule.forRoot([
      { path: "", component: TodosComponent},
      { path: "login", component: LoginComponent},
      { path: "404", component: PageNotFoundComponent},
      { path: "users", component: UsersComponent},
    ]),
    ReactiveFormsModule,
    BrowserModule,
    ButtonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    InputTextModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
