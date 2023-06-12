import { Resolver, Query, Arg, Int, Mutation } from "type-graphql";
import loadCurrency from "./data";
import CurrencyInput from "./input";
import Currency from "./";

@Resolver()
export class CurrencyResolver {
  private readonly items: Currency[] = loadCurrency();

  @Query(() => [Currency], { description: "get all categories Data" })
  async currency(): Promise<Currency[]> {
    return await this.items;
  }
}
