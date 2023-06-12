import { InputType, Field, ID, Int } from 'type-graphql';
import Media from './';

@InputType({ description: 'Create New Category' })
export default class MediaInput implements Partial<Media> {
    @Field()
    img_id: string

    @Field()
    id:string

    @Field()
    alt:string

    @Field()
    src:string

}
