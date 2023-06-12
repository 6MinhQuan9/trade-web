import { ObjectType, Field, Int } from 'type-graphql'

@ObjectType()
export default class Category { 

    @Field(type => Int)
    id: number
    
    @Field()
    img:string

    @Field()
    title: string
}