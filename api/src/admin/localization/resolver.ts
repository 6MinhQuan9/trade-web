import { Resolver, Query, Arg, Int, Mutation } from "type-graphql";
import loadLocalization from "./data";
import LocalizationInput from "./input";
import Localization from "./";

@Resolver()
export class LocalizeResolver {
  private readonly items: Localization[] = loadLocalization();

  @Query(() => [Localization], { description: "get all Localization Data" })
  async localization(): Promise<Localization[]> {
    return await this.items;
  }

  @Query(() => Localization)
  async localize(@Arg("key", (type) => String) key: string): Promise<Localization | undefined> {
    return await this.items.find((item) => item.key === key);
  }

  // Mutations
  @Mutation(() => Localization, { description: "Create Localization" })
  async createLocalization(@Arg("localization") localization: LocalizationInput): Promise<Localization> {
    console.log("create new localization", localization);
    return await localization;
  }

  @Mutation(() => Localization, { description: "Update Localization" })
  async updateLocalization(@Arg("key", (type) => String) key: string, @Arg("localization") localization: LocalizationInput): Promise<Localization> {
    console.log("Update category", key, localization);
    return await this.items[0];
  }

  @Mutation(() => Localization, { description: "Delete Localization" })
  async deleteLocalization(@Arg("key", (type) => String) key: string): Promise<Localization> {
    console.log("contact_key:", key, "is Deleted");
    return await this.items[0];
  }
}
