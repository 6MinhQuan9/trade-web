import { Resolver, Query, Arg, Int, Mutation } from "type-graphql"
import {filterbycolor, filterbybrand} from "./filter"
import productsData from "../product/data"
import Product, {Brand, Color} from "../product"

@Resolver()
export class FilterResolver {
    private readonly items: Product[] = productsData();

    @Query(() => Brand, {description: 'get related products by Type'})
    async getBrands(
        @Arg('type', { defaultValue: 'fashion' }) type: string,
    ): Promise<Brand>{
        const brands = filterbybrand(this.items.filter(item => item.type === type))
        return {brand: brands};
    }

    @Query(() => Color, {description: 'get related products by Type'})
    async getColors(
        @Arg('type', { defaultValue: 'fashion' }) type: string,
    ): Promise<Color>{
        const color = filterbycolor(this.items.filter(item => item.type === type))
        return {colors: color};
    }
}
