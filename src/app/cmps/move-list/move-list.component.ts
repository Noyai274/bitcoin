import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { Move } from 'src/app/models/move.model';
import { User } from 'src/app/models/user.model';
import { BitcoinService } from 'src/app/service/bitcoin.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-move-list',
  templateUrl: './move-list.component.html',
  styleUrls: ['./move-list.component.scss']
})
export class MoveListComponent implements OnInit, OnDestroy {

  constructor(private userService: UserService,
    private bitcoinService: BitcoinService) { }
  @Input() title!: string
  @Input() user!: User
  @Input() contact!: Contact

  user$!: Observable<User>
  movesDisplay!: Move[]
  subscription!: Subscription

  ngDoCheck(){
    this.ngOnInit()
  }

  ngOnInit(): void {
    
    if (this.contact) {
      this.userService.loadUser()
      this.user$ = this.userService.user$
      this.subscription = this.userService.user$.subscribe(user => {
        this.user = user
      })
      let moves = this.user.moves.filter(move => move['to'] === this.contact.name)
      this.movesDisplay = moves.reverse()
    }
    if (!this.contact) {
      if (this.user.moves.length >= 3) {
        this.movesDisplay = [this.user.moves[this.user.moves.length - 1],
        this.user.moves[this.user.moves.length - 2],
        this.user.moves[this.user.moves.length - 3],]
      } else this.movesDisplay = this.user.moves.reverse()
    }
    if (!this.user$) return
  }

  

  ngOnDestroy() {
    if (!this.subscription) return
    this.subscription.unsubscribe()
  }

}
