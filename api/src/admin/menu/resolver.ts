import { Resolver, Query, Arg, Int, Mutation } from "type-graphql";
import loadCoupons from "./data";
import MenuInput from "./input";
import Menus from "./";

@Resolver()
export class MenuResolver {
  private readonly items: Menus[] = loadCoupons();

  @Query(() => [Menus], { description: "get all categories Data" })
  async menus(): Promise<Menus[]> {
    return await this.items;
  }

  // Mutations
  @Mutation(() => Menus, { description: "Create Category" })
  async createMenu(@Arg("menu") menu: MenuInput): Promise<Menus> {
    console.log("create new category", menu);
    return await menu;
  }
}
