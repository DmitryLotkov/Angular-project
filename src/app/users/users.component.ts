import {Component, OnInit} from '@angular/core';
import { UsersService} from "./services/users.service";
import {Observable} from "rxjs";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {User} from "./model/users.model";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  users$!: Observable<User[]>

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.getUsers(params['page'] ? params["page"]: 1)
    })
  }

  getUsers(page: number) {
    this.users$ = this.usersService.getUsers(page)
  }

  nextUsersHandler() {
    const page = Number(this.route.snapshot.queryParamMap.get("page")) || 1;
    const nextPage = page + 1;

    //1 variant
    //this.router.navigateByUrl(`/users?page=${nextPage}`).then(() => this.getUsers(nextPage))

    //2 variant
    this.router.navigate(['/users'], {
      queryParams: {
        page: nextPage
      }
    }).then(() => this.getUsers(nextPage))
    this.getUsers(nextPage)
  }


}
