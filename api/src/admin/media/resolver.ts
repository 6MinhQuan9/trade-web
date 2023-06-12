import { Resolver, Query, Arg, Int, Mutation } from "type-graphql";
import loadCoupons from "./data";
import MediaInput from "./input";
import Media from "./";

@Resolver()
export class MediaResolver {
  private readonly items: Media[] = loadCoupons();

  @Query(() => [Media], { description: "get all categories Data" })
  async medias(): Promise<Media[]> {
    return await this.items;
  }

  // Mutations
  @Mutation(() => Media, { description: "Create Category" })
  async createMedia(@Arg("media") media: MediaInput): Promise<Media> {
    console.log("create new category", media);
    return await media;
  }
}
