import { Component, OnInit } from '@angular/core';
import { Payment } from '../../../types';
import { PaymentService } from '../../../shared/services/payment.service';

@Component({
  selector: 'app-payments-page',
  templateUrl: './payments-page.component.html',
  styleUrl: './payments-page.component.scss'
})
export class PaymentsPageComponent implements OnInit {
  
  payments: Payment[] = []; // Array to store the payments fetched from the server
  displayedColumns = ['paymentId', 'razorPayId', 'userId', 'amount', 'for', 'date']; // Columns to display in the payments table
  constructor(private paymentSvc: PaymentService){}

  ngOnInit(): void {
    this.paymentSvc.getAllPayments().subscribe(data => {
      this.payments = data as Payment[];
    });
  }

}
