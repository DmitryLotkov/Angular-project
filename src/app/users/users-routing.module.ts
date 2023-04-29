import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from "./users.component";
import {AuthGuard} from "../core/guards/auth.guard";
import {ProfileComponent} from "./components/profile/profile";

const routes: Routes = [
  { path: "users", component: UsersComponent, canActivate: [AuthGuard] },
  { path: "profile/:userId", component: ProfileComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
