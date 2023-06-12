import { InputType, Field, Int, Float } from 'type-graphql';
import Currency from './';

@InputType({ description: 'Create New Currency' })
export default class CurrencyInput implements Partial<Currency> {
  @Field()
  currency: string;

  @Field()
  symbol: string;

  @Field(type => Float)
  value: string | number
}
