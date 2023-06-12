import { InputType, Field, Int } from 'type-graphql'
import VariantType from "./"

@InputType()
export default class VariantInput implements Partial<VariantType> { 
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