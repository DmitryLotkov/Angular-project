import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ButtonModule} from 'primeng/button';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {HomeComponent} from './home/components/home/home.component';
import {RouterModule} from "@angular/router";
import {CredentialsInterceptor} from "./core/interceptors/credentials.interceptor";
import {UsersModule} from "./users/users.module";
import {TodosModule} from "./todos/todos.module";
import {HomeModule} from "./home/home.module";
import {AuthModule} from "./auth/auth.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserModule,
    ButtonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    InputTextModule,
    UsersModule,
    TodosModule,
    HomeModule,
    AuthModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: CredentialsInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
