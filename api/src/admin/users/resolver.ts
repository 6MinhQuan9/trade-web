import { Resolver, Query, Arg, Int, Mutation } from "type-graphql";
import loadUser from "./data";
import UserInput from "./input";
import Users from "./";

@Resolver()
export class UserResolver {
  private readonly items: Users[] = loadUser();

  @Query(() => [Users], { description: "get all categories Data" })
  async users(): Promise<Users[]> {
    return await this.items;
  }

  // Mutations
  @Mutation(() => Users, { description: "Create user" })
  async createUser(@Arg("user") user: UserInput): Promise<Users> {
    console.log("create new user", user);
    return await user;
  }
}
