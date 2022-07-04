import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  
  public saveToStorage(key:string, val:any) {
    localStorage.setItem(key, JSON.stringify(val))
  }
  public loadFromStorage(key: string) {
    let val: any = localStorage.getItem(key)
    if (val === undefined) return null
    return JSON.parse(val)
  }
  
}
