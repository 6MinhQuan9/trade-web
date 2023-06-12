import { ObjectType, Field, Int } from 'type-graphql'

@ObjectType()
export default class Pages { 
    @Field()
    name: string

    @Field()
    status:string

    @Field()
    createdOn:string

    @Field()
    description:string

    @Field()
    metaTitle:string

    @Field()
    metaDescription:string
}