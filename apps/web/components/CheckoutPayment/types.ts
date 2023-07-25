export enum PaymentMethod {
  CreditCard = 'credit-card',
  PayPal = 'pay-pal',
  ApplePay = 'apple-pay',
  GooglePay = 'google-pay',
}

export type CheckoutPaymentProps = {
  activePayment: string;
};

export type PaymentMethodProps = {
  active?: boolean;
  disabled?: boolean;
};
