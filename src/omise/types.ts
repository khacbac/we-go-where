export type OmiseCard = {
  object: "token";
  id: string;
  livemode: boolean;
  security_code_check: boolean;
  expiration_month: number;
  expiration_year: number;
  bank: string;
  brand: string;
  city: string;
  country: string;
  financing: string;
  fingerprint: string;
  first_digits: number | null;
  last_digits: string;
  name: string;
  phone_number: number | null;
  postal_code: string;
  state: string;
  street1: string | null;
  street2: string | null;
  tokenization_method: string | null;
  created: string;
};

export type OmiseToken = {
  object: string;
  id: string;
  livemode: boolean;
  used: boolean;
  card: OmiseCard;
  location: string;
  charge_status: string;
  created: string;
};

export type OmiseCustomer = {
  object: "customer";
  livemode: false;
  id: string;
  location: string;
  metadata: {};
  cards: {
    object: string;
    data: OmiseCard[];
    limit: 20;
    offset: 0;
    total: 1;
    location: string;
    order: string;
    from: string;
    to: string;
  };
  default_card: string;
  description: string | null;
  email: string;
  created: string;
};
