import { InputType, Field, Int, Float } from 'type-graphql'
import Image from "./";

@InputType()
export default class ImageInput implements Partial<Image>{ 
    @Field(type => Int)
    image_id: Number;

    @Field(type => String)
    id: string;

    @Field()
    alt: string

    @Field(type => String)
    src: string
}