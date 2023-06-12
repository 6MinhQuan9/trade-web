import { InputType, Field, ID, Int } from 'type-graphql';
import { CategoryType } from "./enum"
import Category from './';

@InputType({ description: 'Create New Category' })
export default class CategoryInput implements Partial<Category> {

  @Field(type => Int)
  id: number
  
  @Field()
  img: string;

  @Field()
  title: string;
}
