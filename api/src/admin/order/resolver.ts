import { Resolver, Query, Arg, Int, Mutation } from "type-graphql"
import loadCategories from "./data"
import Order from "./"

@Resolver()
export class OrderResolver {
    private readonly items: Order[] = loadCategories();

    @Query(() => [Order], {description: 'get all categories Data'})
    async order(): Promise<Order[]>{
            return await this.items
    }
}