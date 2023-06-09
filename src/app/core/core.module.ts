import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthService} from "../auth/services/auth.service";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {CredentialsInterceptor} from "./interceptors/credentials.interceptor";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [AuthService, { provide: HTTP_INTERCEPTORS, useClass: CredentialsInterceptor, multi: true }]
})
export class CoreModule { }
