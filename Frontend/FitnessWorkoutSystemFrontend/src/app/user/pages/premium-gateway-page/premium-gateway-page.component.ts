import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { PaymentService } from '../../../shared/services/payment.service';
import { PaymentOrder } from '../../../types';
import { WindowRefService } from '../../../shared/services/window-ref.service';
import { UserService } from '../../../shared/services/user.service';
import { fadeIn, fadeOut } from '../../../shared/animations';


@Component({
  selector: 'app-premium-gateway-page',
  templateUrl: './premium-gateway-page.component.html',
  styleUrl: './premium-gateway-page.component.scss',
  animations: [fadeIn, fadeOut]
})
export class PremiumGatewayPageComponent {


  options = {
    "key": environment.RAZORPAY_KEY_ID, 
    "amount": 49900, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "FitSphere", 
    "description": "Test Transaction",
    "image": "/assets/icons/fitsphere-logo.png",
    "order_id": "", 
    "handler": (res: any) => this.handleTransaction(res)
  };

  constructor(private payment: PaymentService, private winRef: WindowRefService, private userSvc: UserService){};

  /**
   * Start the payment process by sending an order request to server
   *
   * @memberof PremiumGatewayPageComponent
   */
  intiatePayment() {
    this.payment.createOrder().subscribe(res => {
      let paymentOptions = {...this.options};
      paymentOptions["order_id"] = (res as PaymentOrder).orderId; 

      const rzp = new this.winRef.nativeWindow.Razorpay(paymentOptions);
      rzp.open();
    });
  }

  /**
   * Sends payment details to server after a successful RazorPay transaction
   *
   * @param {*} res - The response from the RazorPay transaction
   * @memberof PremiumGatewayPageComponent
   */
  handleTransaction(res: any) {
    if (res.razorpay_payment_id) {
      this.payment.addPayment(res.razorpay_payment_id, 499, "FitSphere Premium").subscribe(response => {
        if (this.userSvc.CurrentUser.value) {
          let updatedUser = this.userSvc.CurrentUser.value;
          updatedUser.hasPremium = true;
          this.userSvc.setCurrentUser(updatedUser);

          if (updatedUser.userId) {
            this.userSvc.updateUser(updatedUser.userId, updatedUser).subscribe();
          }
        }
      });
    }
  }
}
