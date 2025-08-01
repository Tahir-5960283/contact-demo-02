import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { ApplicationConfig } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    // other providers...
  ]
};


// import { provideHttpClient } from '@angular/common/http';
// import { provideRouter } from '@angular/router';
// import { routes } from './app.routes';

// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideHttpClient(),
//     provideRouter(routes),
//     // other providers...
//   ]
// };
