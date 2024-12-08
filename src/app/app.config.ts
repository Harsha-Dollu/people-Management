import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app-routing.module';  // Import the routes array

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]  // Pass the routes directly to provideRouter
};
