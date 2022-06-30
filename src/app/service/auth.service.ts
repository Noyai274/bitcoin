import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor() { }

    isLoggedIn = false

    changeStatus(newStatus: boolean){
        this.isLoggedIn = newStatus
    }

    checkLogIn(): Promise<boolean> {

        return new Promise(resolve=>{
            setTimeout(() => {
                resolve(this.isLoggedIn)
            }, 0)
        })
    }
}
