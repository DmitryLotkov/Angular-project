import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
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
  httpOptions = {
    headers: new HttpHeaders().append('api-key', environment['apiKey']),
    withCredentials: true
  }
  getUsers(): Observable<User[]>{
    return this.http.get<UsersResponse>(`${environment.baseNetworkUrl}/users`, this.httpOptions).pipe(
      map( el => el.items)
    )
  }
}
