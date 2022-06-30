import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'app-contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent implements OnInit {

  constructor() { }
  @Input() contact!: Contact
  @Output() selected = new EventEmitter
  ngOnInit(): void {
  }

  selectContact(id?: string) {
    this.selected.emit(id)
  }

}
