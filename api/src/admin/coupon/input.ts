import { InputType, Field, ID, Int } from 'type-graphql';
import Coupons from './';

@InputType({ description: 'Create New Category' })
export default class CouponInput implements Partial<Coupons> {

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

}
