import { ObjectType, Field, Float } from 'type-graphql'

@ObjectType()
export default class Currency { 

  @Field()
  currency: string;

  @Field()
  symbol: string;

  @Field(type => Float)
  value: string | number
}