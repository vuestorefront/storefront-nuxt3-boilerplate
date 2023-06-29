export type Address = {
  streetName: string;
  apartment: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
  phone: string;
};

type CardType =
  | 'American Express'
  | 'Maestro'
  | 'Switch'
  | 'Visa'
  | 'Mastercard'
  | 'Mastercard/Eurocard'
  | 'Diner\'s Club';

export type Card = {
  type?: CardType;
  holder?: string;
  number?: string;
  expirationMonth?: string;
  expirationYear?: string;
  cvv?: string;
};

type Title = 'Mrs.' | 'Dr.' | 'Rev.' | 'Ms.' | 'Mr.' | 'Miss';

export type Customer = {
  isRegistered?: boolean,
  title?: Title;
  titleCode?: string;
  email?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  address?: {
    shipping: Address;
    billing: Address;
  };
  card?: Card;
};

export type Product = {
  type?: string;
  name?: string;
  number?: number;
  shippingPrice?: number;
  price: number;
  currency?: string;
  sku?: string;
  category?: {
    number: number;
    name: string;
  };
  description?: string;
 };
