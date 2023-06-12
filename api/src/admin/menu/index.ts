import { ObjectType, Field, Int } from 'type-graphql'

@ObjectType()
export default class Menus { 
    @Field()
    name: string

    @Field()
    status:string

    @Field()
    createdOn:string
}