import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { of } from 'rxjs';
import { Move } from '../models/move.model';
import { User } from '../models/user.model';
import { AuthService } from './auth.service';
import { BitcoinService } from './bitcoin.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [{
    fullname: 'puki',
    username: 'puki',
    coins: 100,
    password: '1234',
    moves: []

  }]


  user!: User
  private _user$ = new BehaviorSubject<User>({} as User)
  public user$ = this._user$.asObservable()

  constructor(private storageService: StorageService,
    private authService: AuthService,
    private bitcoinService: BitcoinService) { }

  loginNewUser(user: User) {
    user.coins = 100,
      user.moves = [],
      this.user = user
      this.users.push(user)
    this.authService.changeStatus(true)
    this.saveUser(user)
    return this.user
  }
  
  getNewUser() {
    return {
      fullname: '',
      username: '',
      coins: 0,
      password: '',
      moves: []
    }
  }
  
  public saveUser(user: User) {
    this.storageService.saveToStorage('user', user)
    this.loadUser()
  }
  
  public loadUser() {
    let user = this.storageService.loadFromStorage('user')
    this.user = user
    this._user$.next(user)

  }

  public logout(){
    localStorage.clear()
    this.loadUser()
  }

  public findUser(user: User) {
    const {username, password}= user
    const loadedUser: any= this.users.find(currUser => {
      return currUser.username === username &&
      currUser.password === password
    })
    this.saveUser(loadedUser)
    return this.user
    
  }

  public makeTransfer(amount: number, name: string) {
    const user = this.storageService.loadFromStorage('user')
    if (amount > user.coins) return
    const move: Move = {
      to: name,
      at: Date.now(),
      amountInUsd: amount,
      amount,
    }
    if (!user.moves.length) user.moves = [move]
    else user.moves.push(move)
    user.coins = user.coins - amount
    this.saveUser(user)
  }

}

