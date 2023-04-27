import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environment/enviroment.prod";
import {map, Observable} from "rxjs";

export interface User {
  id: string
  name: string
  photos: {
    small: string
    large: string
  }
  followed: boolean
}

interface UsersResponse {
  items: User[],
  totalCount: number
}

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor(private http: HttpClient) { }
  getUsers(page: number): Observable<User[]>{
    return this.http.get<UsersResponse>(`${environment.baseNetworkUrl}/users?page=${page}`).pipe(
      map( el => el.items)
    )
  }
}
