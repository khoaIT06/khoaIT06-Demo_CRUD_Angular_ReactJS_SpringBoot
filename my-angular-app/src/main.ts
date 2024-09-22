import { ApplicationConfig } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { CustomerListComponent } from './app/customers/customer-list/customer-list.component';
import { CustomerFormComponent } from './app/customers/customer-form/customer-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app/app.component';

const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()),
    provideRouter(routes),
    ReactiveFormsModule,
  ]
};

bootstrapApplication(AppComponent, appConfig);
