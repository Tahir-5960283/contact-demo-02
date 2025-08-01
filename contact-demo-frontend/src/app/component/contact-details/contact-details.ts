import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import {ContactsService } from '../../services/contacts';
import { ActivatedRoute, ParamMap, RouterModule } from '@angular/router';
import { Contact } from '../../models/contact';
import { EmailAddress } from '../../models/email-address';

@Component({
  selector: 'app-contact-details',
  standalone:true,
   imports: [CommonModule,RouterModule],
  templateUrl: './contact-details.html',
  styleUrl: './contact-details.css'
})
export class ContactDetails implements OnInit {
  contact!: Contact;
  emails: EmailAddress[] = [];

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const idParam = params.get('id');
      const id = idParam ? Number(idParam) : null;

      if (id) {
        this.loadContact(id);
      }
    });
  }

loadContact(id: number): void {
  this.contactService.getFullContact(id).subscribe({
    next: ({ contact, emails }: { contact: Contact; emails: EmailAddress[] }): void => {
      this.contact = contact;
      this.emails = emails;
    },
    error: (err: any) => {
      console.error('Failed to load contact details:', err);
    }
  });
}

 
}
