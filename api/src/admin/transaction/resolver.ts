import { Resolver, Query, Arg, Int, Mutation } from "type-graphql"
import loadTransaction from "./data"
import Transaction from "./"

@Resolver()
export class TransactionResolver {
    private readonly items: Transaction[] = loadTransaction();

    @Query(() => [Transaction], {description: 'get all categories Data'})
    async transaction(): Promise<Transaction[]>{
            return await this.items
    }
}