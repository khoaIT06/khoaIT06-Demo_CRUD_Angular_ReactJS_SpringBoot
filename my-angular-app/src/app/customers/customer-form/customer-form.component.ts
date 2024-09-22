import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, RouterLink],
})
export class CustomerFormComponent implements OnInit {
  customer: Customer = {
    id: 0,
    name: '',
    birthday: '',
    phone: '',
    address: '',
    identificationnumber: ''
  };
  message: string = '';

  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.customerService.getCustomerById(Number(id)).subscribe(
        (customer) => {
          this.customer = customer;
          if (this.customer.birthday) {
            this.customer.birthday = new Date(this.customer.birthday).toISOString().split('T')[0];
          }
        },
        (error) => console.error(error)
      );
    }
  }

  saveCustomer(): void {
    if (this.customer.id) {
      this.customerService.updateCustomer(this.customer.id, this.customer).subscribe(() => {
        this.message = 'Customer updated successfully!';
        alert(this.message)
        this.router.navigate(['/']);
      });
    } else {
      this.customerService.createCustomer(this.customer).subscribe(() => {
        this.message = 'Customer added successfully!';
        alert(this.message)
        this.router.navigate(['/']);
      });
    }
  }
}
