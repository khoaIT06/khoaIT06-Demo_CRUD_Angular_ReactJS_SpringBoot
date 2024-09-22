import { ApplicationConfig } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter, withRouterConfig } from '@angular/router';
import { CommonModule } from '@angular/common';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()),
    provideRouter(
      routes, 
      withRouterConfig({ onSameUrlNavigation: 'reload' })
    ),
    CommonModule,
  ]
};
