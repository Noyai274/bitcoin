import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/service/contact.service';


@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {

  constructor(private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  contact!: Contact


  ngOnInit(): void {
    this.route.data.subscribe(({ contact }) => {
      this.contact = contact || this.contactService.getEmptyContact() as Contact
    })
  }

  onSubmit(form: NgForm) {
    const contactId = this.contactService.saveContact(this.contact)
    this.router.navigate(['/contact', contactId])
  }
}
