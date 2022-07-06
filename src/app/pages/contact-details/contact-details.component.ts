import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/service/contact.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  constructor(private contactService: ContactService, 
    private route: ActivatedRoute,
    private userService: UserService
    ) { }
  
    contact!: Contact
 
 
  ngOnInit(): void {
    this.route.params.subscribe(async (params) => {
      this.contact = await lastValueFrom(this.contactService.getContactById(params['id']))
    })

  }
 deleteContact(id?: string) {
    this.contactService.deleteContact(id)
  }

  transfer(amount:number){
    this.userService.makeTransfer(amount, this.contact.name)
  }

  
}
