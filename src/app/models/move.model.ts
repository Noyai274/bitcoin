import { Observable } from "rxjs";

export interface Move { 
  to: string,
  at: number,
  amount: number,
  amountInUsd: number
}
