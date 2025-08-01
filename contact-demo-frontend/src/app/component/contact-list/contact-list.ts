import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Router } from '@angular/router';
import { ContactsService } from '../../services/contacts';
import { Contact } from '../../models/contact';

@Component({
  selector: 'app-contact-list',
  imports: [CommonModule],
  templateUrl: './contact-list.html',
  styleUrl: './contact-list.css'
})
export class ContactList implements OnInit {
  @Input() contacts: Contact[] = [];
  @Output() selectContact = new EventEmitter<Contact>();

  onSelect(contact: Contact): void {
    this.selectContact.emit(contact);
  }

  constructor(private contactService: ContactsService, private router: Router) {}

  ngOnInit(): void {
    this.contactService.getAllContacts().subscribe((data) => {
      this.contacts = data;
    });
  }

  viewDetails(contact: any) {
    this.router.navigate(['/contact-details', contact.id]);
  }
}
