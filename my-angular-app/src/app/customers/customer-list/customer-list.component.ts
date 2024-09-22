import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer.model';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, RouterLink],
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];
  searchQuery: string = '';

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe((data) => {
      this.customers = data;
    });
  }

  editCustomer(id: number): void {
    this.router.navigate(['/customers/edit', id]);
  }

  deleteCustomer(id: number): void {
    const confirmed = window.confirm('Are you sure you want to delete this customer?');
    if (confirmed) {
      this.customerService.deleteCustomer(id).subscribe(() => {
        this.customers = this.customers.filter((c) => c.id !== id);
      });
      alert("Customer deleted successfully!")
    }
  }

  get filteredCustomers(): Customer[] {
    if (!this.searchQuery) {
      return this.customers;
    }
    return this.customers.filter(customer =>
      customer.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      customer.phone.includes(this.searchQuery) ||
      customer.birthday.toString().includes(this.searchQuery) ||
      customer.address.toLowerCase().includes(this.searchQuery)
    );
  }
  
}
