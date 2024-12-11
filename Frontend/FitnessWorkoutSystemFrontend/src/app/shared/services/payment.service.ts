import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/services/auth.service';
import { Payment } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private api: ApiService, private auth: AuthService) {}

  /**
   * Creates an order for RazorPay payment
   *
   * @param {number} amount - The amount in Rupees 
   * @return {*}  {Observable<Object>}
   * @memberof PaymentService
   */
  createOrder(): Observable<Object> {
    return this.api.request('POST', '/payments/orders');
  }

  /**
   * Creates a new Payment object and sends the request to the server
   *
   * @param {string} razorpayId - The payment ID returned by RazorPay transaction (successful)
   * @param {number} amount - Amount of transaction
   * @param {string} paymentFor - The cause of transaction
   * @return {*}  {Observable<Object>}
   * @memberof PaymentService
   */
  addPayment(razorpayId: string, amount: number, paymentFor: string): Observable<Object> {
    const userId = this.auth.CurrentUserId;
    let newPayment: Payment = {
      razorpayPaymentId: razorpayId,
      userId: userId ?? "Unkown",
      amount,
      paymentFor
    };
    return this.api.request('POST', '/payments', JSON.stringify(newPayment));
  }

  /**
   * Fetches all the payments from the server
   *
   * @return {*}  {Observable<Object>}
   * @memberof PaymentService
   */
  getAllPayments(): Observable<Object> {
    return this.api.get('/payments');
  }
}
