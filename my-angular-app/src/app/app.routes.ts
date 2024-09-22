import { Routes } from '@angular/router';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { CustomerFormComponent } from './customers/customer-form/customer-form.component';

import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', redirectTo: '/customers', pathMatch: 'full' },
  { path: 'customers', component: CustomerListComponent },
  { path: 'customers/new', component: CustomerFormComponent },
  { path: 'customers/edit/:id', component: CustomerFormComponent },
];