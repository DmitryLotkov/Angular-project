import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import {LoginComponent} from "./components/login/login.component";
import {SharedModule} from "../shared/shared.module";
import {ReactiveFormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {ChipsModule} from "primeng/chips";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [LoginComponent, PageNotFoundComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    ButtonModule,
    ChipsModule,
    HttpClientModule
  ]
})
export class AuthModule { }
