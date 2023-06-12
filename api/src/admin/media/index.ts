import { ObjectType, Field, Int } from 'type-graphql'

@ObjectType()
export default class Media {    
    @Field()
    img_id: string

    @Field()
    id:string

    @Field()
    alt:string

    @Field()
    src:string

}