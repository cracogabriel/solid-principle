class PaymentProcessor {
  process(paymentType: string, amount: number): void {
    // what if I want to pay with Pix? how do I implement that without changing this code?
    if (paymentType === "creditCard") {
      console.log(`Processing credit card payment of $${amount}`);
    } else if (paymentType === "paypal") {
      console.log(`Processing PayPal payment of $${amount}`);
    }
  }
}
