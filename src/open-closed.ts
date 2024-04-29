interface Payment {
  process(amount: number): void;
}

class CreditCardPayment implements Payment {
  process(amount: number): void {
    console.log(`Processing credit card payment of $${amount}`);
  }
}

class PayPalPayment implements Payment {
  process(amount: number): void {
    console.log(`Processing PayPal payment of $${amount}`);
  }
}

class PaymentProcessor {
  process(payment: Payment, amount: number): void {
    payment.process(amount);
  }
}

export const runOpenClosed = () => {
  const paymentProcessor = new PaymentProcessor();
  paymentProcessor.process(new CreditCardPayment(), 777); // credit card
  paymentProcessor.process(new PayPalPayment(), 63); // Paypal

  // if i want Pix payment, just need to implement the class PixPayment and pass as param to my paymentProcessor without changing the class PaymentProcessor
  // paymentProcessor.process(new PixPayment(), 63);
};
