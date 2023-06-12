import { ObjectType, Field, Int, Float } from 'type-graphql'

@ObjectType()
export default class VariantType { 
    @Field(type => Int)
    variant_id: Number;

    @Field(type => String)
    id: string;

    @Field()
    sku: string

    @Field({ nullable: true })
    size?: string

    @Field(type => String, { nullable: true })
    color?: string

    @Field(type => Int)
    image_id: Number
}