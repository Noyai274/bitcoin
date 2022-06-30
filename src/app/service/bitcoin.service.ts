import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, of } from 'rxjs';
import { __values } from 'tslib';
import { bitcoinInfo } from '../models/chart-type.module';



@Injectable({
    providedIn: 'root'
})
export class BitcoinService {


    constructor(private http: HttpClient) { }

    public getRate(coins: number) {
        return this.http.get<number>(`https://blockchain.info/tobtc?currency=USD&value=${1}`)
            .pipe(map(rate => {
                return coins / rate
            }))
    }
    public getConfirmedTransactions() {
        return this.http.get<bitcoinInfo>(`https://api.blockchain.info/charts/n-transactions?timespan=5months&format=json&cors=true#`)
            .pipe(map(rate => {
                return rate.values? rate : null
            }))
    }
    public getMarketPrice() {
        return this.http.get<bitcoinInfo>(`https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true`)
            .pipe(map(rate => {
                return rate.values? rate : null
            }))
    }

}