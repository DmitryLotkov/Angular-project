import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UsersComponent} from "./users.component";
import {RouterLink} from "@angular/router";
import {ProfileComponent} from "./components/profile/profile";
import {UsersRoutingModule} from "./users-routing.module";



@NgModule({
  declarations: [UsersComponent, ProfileComponent],
  imports: [
    UsersRoutingModule,
    CommonModule,
    RouterLink,
  ]
})
export class UsersModule { }
