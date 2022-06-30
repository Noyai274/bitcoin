import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  constructor(private router: Router) { }
  @Input() contacts!: Contact[]
  ngOnInit(): void {
  }


  addContact(){
    this.router.navigateByUrl('/contact/edit')
  }
}
