import { Pipe, PipeTransform } from "@angular/core";
import { Contact } from "../../models/contact";

@Pipe({
  name: 'searchContact',
  standalone: true
})
export class SearchContactPipe implements PipeTransform {
  transform(contacts: Contact[], searchText: string): Contact[] {
    if (!contacts || !searchText) return contacts;

    const lowerText = searchText.toLowerCase();

    return contacts.filter(contact =>
      contact.firstName?.toLowerCase().includes(lowerText) ||
      contact.lastName?.toLowerCase().includes(lowerText) ||
      contact.email?.toLowerCase().includes(lowerText) ||
      contact.phone?.toLowerCase().includes(lowerText)
    );
  }
}
