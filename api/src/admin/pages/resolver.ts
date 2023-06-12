import { Resolver, Query, Arg, Int, Mutation } from "type-graphql";
import loadCoupons from "./data";
import PageInput from "./input";
import Pages from "./";

@Resolver()
export class PageResolver {
  private readonly items: Pages[] = loadCoupons();

  @Query(() => [Pages], { description: "get all categories Data" })
  async pages(): Promise<Pages[]> {
    return await this.items;
  }

  // Mutations
  @Mutation(() => Pages, { description: "Create Category" })
  async createPage(@Arg("page") page: PageInput): Promise<Pages> {
    console.log("create new category", page);
    return await page;
  }
}
