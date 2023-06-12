import { ObjectType, Field, Int } from 'type-graphql'

@ObjectType()
export default class ImageType { 
    @Field(type => Int)
    image_id: Number;

    @Field(type => String)
    id: string;

    @Field()
    alt: string

    @Field(type => String)
    src: string
}