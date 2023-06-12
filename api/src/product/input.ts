import { InputType, Field, Int, Float } from 'type-graphql'
import { CategoryType } from "../category/enum"
import VariantInput from "../variant/input"
import ImageInput from "../image/input"
import Product from "./"

@InputType()
default class collectionInput { 
    @Field(type => String)
    collectionName: string
}


@InputType({ description: 'Create, Update Product' })
export default class ProductInput implements Partial<Product> { 
    @Field(type => Int)
    id: Number | string;

    @Field()
    title: string

    @Field()
    description: string

    // @Field()
    // type: CategoryType

    // @Field(type => String)
    // brand: string

    // @Field(type => [collectionInput!])
    // collection: collectionInput[]

    // @Field(type => String)
    // category: string

    @Field(type => Float)
    price: string | number

    // @Field(type => Boolean)
    // new: boolean
    
    // @Field(type => Boolean)
    // sale: boolean

    // @Field(type => Int)
    // discount: string | number

    // @Field(type => Int)
    // stock: string | number

    // @Field(type => [VariantInput])
    // variants: VariantInput[]

    // @Field(type => [ImageInput])
    // images: ImageInput[]

    // @Field({ defaultValue: new Date})
    // createdAt: Date
}