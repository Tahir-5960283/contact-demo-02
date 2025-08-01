import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'contact-list',
    redirectTo: '',
    pathMatch: 'full'
  },
  // {
  //   path: 'contact-list',
  //   loadComponent: () =>
  //     import('./component/contact-list/contact-list').then(
  //       (m) => m.ContactList
  //     )
  // },
    {
    path: 'contact-details/:id',
    loadComponent: () =>
      import('./component/contact-details/contact-details').then(
        (m) => m.ContactDetails
      )
  }
];
