import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { of } from 'rxjs';
import { Move } from '../models/move.model';
import { User } from '../models/user.model';
import { AuthService } from './auth.service';
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
    private authService: AuthService) { }

  loginNewUser(user: User) {
    user.coins = 100,
      user.moves = [],
      this.user = user
      this.users.push(user)
    this.authService.changeStatus(true)
    this.storageService.saveToStorage('user', user)
    this.loadUser()
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
  
  public loadUser() {
    // debugger
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
    this.storageService.saveToStorage('user', loadedUser)
    this.loadUser()
    return this.user
    
  }

  public makeTransfer(amount: number, name: string) {

    const move: Move = {
      to: name,
      at: Date.now(),
      amount,
    }
    const user = JSON.parse(JSON.stringify(this.user))
    user.moves.push(move)
    user.coins = user.coins - amount
    this.storageService.saveToStorage('user', user)
    this._user$.next(user)
    this.user = user
  }

}

