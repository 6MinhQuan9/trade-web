import { ObjectType, Field, Int } from 'type-graphql'

@ObjectType()
export default class Users { 
    @Field()
    fname: string

    @Field()
    lname:string

    @Field()
    email:string

    @Field()
    password:string

    @Field()
    lastAccess:string

    @Field()
    role:string
}