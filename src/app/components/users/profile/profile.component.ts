import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IUserProfileResponse, ProfileService} from "../../../services/profile.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  constructor(private route: ActivatedRoute, private profileService: ProfileService,
              private router: Router) { // нужен для прогрммной навигации
  }
  profile$!: Observable<IUserProfileResponse>
  ngOnInit():void {
    const userId = Number(this.route.snapshot.paramMap.get('userId'))
    console.log("userId: ", userId)
    //читаем uriParameter параметр, такой же как и при регистрации роута userId
    if(userId){
      this.profile$ = this.profileService.getProfile(userId)
    }
  }

  backToUsersHandler() {
    this.router.navigate(['/users']) //венуться назад
  }
}
