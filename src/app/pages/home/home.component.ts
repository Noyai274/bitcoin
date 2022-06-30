import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/service/auth.service';
import { BitcoinService } from 'src/app/service/bitcoin.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private userService: UserService,
    private bitcoinService: BitcoinService,
    private authService: AuthService,
    private router: Router
  ) { }
  user$!: Observable<User>
  btr$!: Observable<number>
  user!: User
  subscription!: Subscription

  ngOnInit(): void {
    this.userService.loadUser()
    this.user$ = this.userService.user$
    this.subscription = this.userService.user$.subscribe(user =>{
      this.user = user
    })
    if(this.user) {
      this.authService.changeStatus(true)
      this.btr$ = this.bitcoinService.getRate(this.user.coins)
    }
    if(!this.user) this.router.navigateByUrl('/signup')
  }


  // this.contactService.loadContacts()
  //  this.contacts$ = this.contactService.contacts$;
  //  this.subscription = this.contactService.contacts$.subscribe(contacts =>{
  //     this.contacts = contacts
  //    });
}

