import { Component, OnInit } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { BitcoinService } from 'src/app/service/bitcoin.service';
import { ChartType, Row } from "angular-google-charts";
import { bitcoinInfo } from 'src/app/models/chart-type.module';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  constructor(private bitcoinService: BitcoinService) { }

  transactions!: bitcoinInfo | null
  marketPrice!: bitcoinInfo | null
  transactionsData!: (string | number)[][]
  marketData!: (string | number)[][]
  myType = ChartType.LineChart;
  

  async ngOnInit(): Promise<void> {
    this.transactions = await lastValueFrom(this.bitcoinService.getConfirmedTransactions())
    this.marketPrice = await lastValueFrom(this.bitcoinService.getMarketPrice())
    this.getData()
  }

  getData(){
    let teansactionsPriceData: (string | number)[][] = []
        this.transactions?.values.forEach((obj: object) => {
          let objArr = Object.values(obj)
          const newDate = new Date(objArr[0] * 1000)
          const dateToDisplay = new Intl.DateTimeFormat("en-US").format(newDate);
          objArr[0] = dateToDisplay
          teansactionsPriceData.push(objArr)
        })
        this.transactionsData = teansactionsPriceData
        
        let marketPriceData: (string | number)[][] = []
        this.marketPrice?.values.forEach((obj: object) => {
          let objArr = Object.values(obj)
          const newDate = new Date(objArr[0] * 1000)
          const dateToDisplay = new Intl.DateTimeFormat("en-US").format(newDate);
          objArr[0] = dateToDisplay
          marketPriceData.push(objArr)
        });
        this.marketData = marketPriceData
  }

}

