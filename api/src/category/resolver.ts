import { Resolver, Query, Arg, Int, Mutation } from "type-graphql"
import loadCategories from "./data"
import CategoryInput from "./input"
import Category from "./"
import { type } from "os";

@Resolver()
export class CategoryResolver {
    private readonly items: Category[] = loadCategories();

    @Query(() => [Category], {description: 'get all categories Data'})
    async categories(): Promise<Category[]>{
            return await this.items
    }

    @Query(() => Category)
    async category(
        @Arg('id', type => Int) id: number
    ): Promise<Category| undefined>{
        return await this.items.find(item => item.id === id)
    }

    // Mutations 
    @Mutation(() => Category, { description: 'Create Category' })
    async createCategory(
        @Arg('category') category: CategoryInput
    ): Promise<Category> {
        console.log('create new category', category);
        return await category;
    }

    @Mutation(() => Category, { description: 'Update Category' })
    async updateCategory(
        @Arg('id', type => Int) id: number,
        @Arg('category') category: CategoryInput
    ): Promise<Category> {
        console.log('Update category', id,  category);
        return await this.items[0];
    }

    @Mutation(() => Category, { description: 'Delete Category' })
    async deletecategory(@Arg('id', type => Int) id: number
    ): Promise<Category> {
        console.log('contact_id:',id,'is Deleted');
        return await this.items[0];
    }
}