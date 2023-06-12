import { ObjectType, Field, Int } from 'type-graphql'

@ObjectType()
export default class Localization { 
    @Field(type => String)
    key: string
    
    @Field()
    english:string

    @Field()
    arabic: string

    @Field()
    russian: string

}