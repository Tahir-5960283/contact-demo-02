import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Contact } from '../../models/contact';
import { ContactsService } from '../../services/contacts';
import { ContactList } from '../contact-list/contact-list';
import { SearchContactPipe } from '../../pipes/pipes/search-contact-pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule,RouterModule,ContactList,SearchContactPipe,FormsModule  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar implements OnInit{
  sidebarClosed = false;
  contacts: Contact[] = []; // ✅ Typed array
 searchQuery: string = '';
  constructor(
    private contactService: ContactsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.contactService.getAllContacts().subscribe({
      next: (data: Contact[]) => {
        this.contacts = data;
      },
      error: (err: any) => {
        console.error('Error fetching contacts:', err);
      }
    });
  }

  viewDetails(contact: Contact): void { // ✅ Typed param
    this.router.navigate(['/contact-details', contact.id]);
  }

  toggleSidebar(): void {
    this.sidebarClosed = !this.sidebarClosed;
  }
}
