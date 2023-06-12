import { ObjectType, Field, Int } from 'type-graphql'

@ObjectType()
export default class Order { 

    @Field(type => Int)
    id: number
    
    @Field()
    img:string

    @Field()
    title: string

    @Field()
    paymentStatus: string

    @Field()
    paymentMethod:string

    @Field()
    orderStatus:string

    @Field()
    date:string

    @Field()
    total:string
}