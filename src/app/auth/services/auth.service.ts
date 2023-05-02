import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environment/enviroment.prod";
import {ICommonResponse, MeResponse, ResultCodes} from "../../shared/models/core.model";

@Injectable()
export class AuthService {
  isAuth = false
  constructor(private http: HttpClient) {

  }

  me() {
    this.http.get<ICommonResponse<MeResponse>>(`${environment.baseNetworkUrl}/auth/me`).subscribe((res)=> {
      if(res.resultCode === ResultCodes.success) {
        this.isAuth = true
      }
    })
  }
}
