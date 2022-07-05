import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { User } from 'src/app/models/user.model';
import { BitcoinService } from 'src/app/service/bitcoin.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-move-list',
  templateUrl: './move-list.component.html',
  styleUrls: ['./move-list.component.scss']
})
export class MoveListComponent implements OnInit {

  constructor(private userService: UserService,
    private bitcoinService: BitcoinService) { }
  @Input() title!: string
  @Input() user!: User
  @Input() contact!: Contact

  user$!: Observable<User>
  btr$!: Observable<number>
  subscription!: Subscription

  ngOnInit(): void {
    if (this.contact) {
      this.userService.loadUser()
      this.user$ = this.userService.user$
      this.subscription = this.userService.user$.subscribe(user => {
        this.user = user
      })
      let moves = this.user.moves.filter(move => move['to'] === this.contact.name)
      this.user.moves = moves
    }
  }

  toUsd(amt: number) {
    this.btr$ = this.bitcoinService.getRate(amt)
  }

}
