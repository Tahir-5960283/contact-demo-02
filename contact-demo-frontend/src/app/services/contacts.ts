import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import { EmailAddress } from '../models/email-address';
import { Observable, forkJoin } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http: HttpClient) {}

  /** Returns all contacts */
  getAllContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${environment.apiUrl}/contacts`);
  }

  /** Returns single contact details */
  getContactDetails(id: number): Observable<Contact> {
    return this.http.get<Contact>(`${environment.apiUrl}/contacts/${id}`);
  }

  /** Returns emails for a contact */
  getContactEmails(id: number): Observable<EmailAddress[]> {
    return this.http.get<EmailAddress[]>(`${environment.apiUrl}/email_addresses?contactId=${id}`);
  }

  /** Returns both contact and email data */
  getFullContact(id: number): Observable<{ contact: Contact; emails: EmailAddress[] }> {
    return forkJoin({
      contact: this.getContactDetails(id),
      emails: this.getContactEmails(id)
    });
  }
}
