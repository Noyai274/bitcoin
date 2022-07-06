import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from '../../service/contact.service'


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {

  constructor(private contactService: ContactService) { }
  contacts!: Contact[]
  contacts$!: Observable<Contact[]>
  subscription!: Subscription
  
  
  ngOnInit(): void {
   this.contactService.loadContacts()
   this.contacts$ = this.contactService.contacts$;
   this.subscription = this.contactService.contacts$.subscribe(contacts =>{
      this.contacts = contacts
     });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
