import { InputType, Field, ID, Int } from 'type-graphql';
import Localization from './';

@InputType({ description: 'Create New Category' })
export default class LocalizationInput implements Partial<Localization> {

  @Field(type => String)
  key: string
  
  @Field()
  english:string

  @Field()
  arabic: string

  @Field()
  russian: string
}
