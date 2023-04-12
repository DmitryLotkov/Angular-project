import { Injectable } from '@angular/core';

type SeverityType = 'error' | 'success' | 'warning'
@Injectable({
  providedIn: 'root'
})
export class BeautyService {
  log(message: string, type:SeverityType){
    console.log(`%c${message}`, this.getSeverity(type))
  }
  getSeverity(type: SeverityType){
    switch (type){
      case "success":
        return 'background: green; color: white'
      case "warning":
        return 'background: orange; color: white'
      case "error":
        return 'background: red; color: white'
    }
  }
}
