import { InputType, Field, ID, Int } from 'type-graphql';
import Users from './';

@InputType({ description: 'Create New Category' })
export default class UserInput implements Partial<Users> {

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
