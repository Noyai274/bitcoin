import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() nav = new EventEmitter
  constructor(private userService: UserService,
    private router: Router
    ) { }
  user$!: Observable<User>
  user!: User
  subscription!: Subscription

  ngOnInit(): void {
    this.userService.loadUser()
    this.user$ = this.userService.user$
    this.subscription = this.userService.user$.subscribe(user =>{
      this.user = user
    })
  }

  


}
