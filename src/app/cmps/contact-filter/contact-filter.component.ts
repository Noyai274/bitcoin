import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-contact-filter',
  templateUrl: './contact-filter.component.html',
  styleUrls: ['./contact-filter.component.scss']
})
export class ContactFilterComponent implements OnInit, OnDestroy {

  constructor(private contactService: ContactService) { }
  filterBy: string = ''
  subscription!: Subscription
  
  
  ngOnInit(): void {
    this.subscription = this.contactService.filterBy$.subscribe(filterBy=>{
      this.filterBy = filterBy
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  onFilter(){
    this.contactService.setFilter(this.filterBy)
  }

}
