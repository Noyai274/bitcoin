import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'app-transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss']
})
export class TransferFundComponent implements OnInit {

  @Input() contact! : Contact
  @Output() onTransfer = new EventEmitter<number>()
  constructor() { }
  amount!: number
  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    this.onTransfer.emit(this.amount)
  }
}
