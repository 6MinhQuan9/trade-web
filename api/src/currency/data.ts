import { plainToClass } from "class-transformer";
import Currency from "./";

const loadCurrency = (): Currency[] => {
  return plainToClass(Currency, [
   { 
     currency: 'USD',
     symbol: '$',
     value: 1.00
   },
   { 
    currency: 'IND',
    symbol: '₹',
    value: 70.0
  },
  { 
    currency: 'EUR',
    symbol: '€',
    value: 52.00
  },
  { 
    currency: 'GBP',
    symbol: '£',
    value: 62.00
  }
  ]);
};

export default loadCurrency;
