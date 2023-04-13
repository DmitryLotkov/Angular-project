import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../environment/enviroment.prod";
/*interface UsersResponse {
  items: User[],
  totalCount: number
}*/
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders().append('api-key', environment['apiKey']),
    withCredentials: true
  }
  getUsers(){
    this.http.get(`${environment.baseNetworkUrl}/users`, this.httpOptions)
  }
}
