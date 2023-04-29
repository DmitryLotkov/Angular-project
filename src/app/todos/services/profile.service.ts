import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environment/enviroment.prod";
import {Observable} from "rxjs";

export interface IUserProfileResponse {
  aboutMe: string;
  contacts: IContactsResp;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  userId: number;
  photos: PhotosResp;
}
export interface IContactsResp {
  facebook: string;
  website: string;
  vk: string;
  twitter: string;
  instagram: string;
  youtube: string;
  github: string;
  mainLink: string;
}
export interface PhotosResp {
  small: string;
  large: string;
}
@Injectable({
  providedIn: 'root'
})

export class ProfileService {

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders().append('api-key', environment['apiKey']),
    withCredentials: true
  }
  getProfile(userId: number): Observable<IUserProfileResponse>{
    return this.http.get<IUserProfileResponse>(`${environment.baseNetworkUrl}/profile/${userId}`, this.httpOptions)

  }
}
