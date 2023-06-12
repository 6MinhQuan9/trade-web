import { InputType, Field, ID, Int } from 'type-graphql';
import Pages from './';

@InputType({ description: 'Create New Category' })
export default class PageInput implements Partial<Pages> {

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
