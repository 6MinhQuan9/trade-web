import { InputType, Field, ID, Int } from 'type-graphql';
import Menus from './';

@InputType({ description: 'Create New Category' })
export default class MenuInput implements Partial<Menus> {

   @Field()
    name: string

    @Field()
    status:string

    @Field()
    createdOn:string

}
