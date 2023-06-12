import { ObjectType, Field, Int } from 'type-graphql'

@ObjectType()
export default class Transaction { 

    @Field(type => Int)
    orderId: number
    
    @Field()
    transactionId:string

    @Field()
    date: string

    @Field()
    paymentMethod: string

    @Field()
    deliveryStatus:string

    @Field()
    amount:string
}