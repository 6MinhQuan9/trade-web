import { ObjectType, Field, Int } from 'type-graphql'

@ObjectType()
export default class Coupons { 
    @Field()
    title: string
    
    @Field()
    couponcode:string

    @Field()
    expireDate:Date

    @Field()
    freeShipping:boolean
    
    @Field()
    qty:number


    @Field()
    coupnStatus:string    

    @Field()
    product:string

    @Field()
    category:string
    
    @Field()
    minimumspend:number
    
    @Field()
    maximumspend:number
    
    @Field()
    limit:number
    
    @Field()
    customer:number

    // @Field()
    // discount: string

    // @Field()
    // status:string


}