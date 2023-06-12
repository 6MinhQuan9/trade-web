import { ObjectType, Resolver, Query, Arg, Int, Mutation } from "type-graphql";
import { getVisibleproducts } from "../helpers/filter";
import { ProductSortType } from "./enum";
import { CategoryType } from "../category/enum";
import productsData from "./data";
import Product, { DeleteProductResponse, PaginatedResponse, ProductUpdateInput, UpdateProductResponse } from "./";
import database  from '../utils/firebase';
import { ref, get, push, set, remove, update } from "firebase/database";
import 'firebase/database';

// we need to create a temporary class for the abstract, generic class "instance"
@ObjectType()
class ProductsResponse extends PaginatedResponse(Product) {
  // you can add more fields here if you need
}

@Resolver()
export class ProductResolver {
  private readonly items: Product[] = productsData();

  @Query(() => ProductsResponse, { description: "get all products Data" })
  async products(
    @Arg("indexFrom", (type) => Int, { defaultValue: 0 }) indexFrom: number,
    @Arg("limit", (type) => Int, { defaultValue: 10 }) limit: number,
    @Arg("type", (type) => CategoryType, { nullable: true }) type: CategoryType,
    @Arg("text", { nullable: true }) text: string,
    @Arg("brand", (type) => [String], { nullable: true }) brand: string[],
    @Arg("color", { nullable: true }) color: string,
    @Arg("sortBy", (type) => ProductSortType, { nullable: true }) sortBy: ProductSortType,
    @Arg("priceMin", (type) => Int, { defaultValue: 0 }) priceMin: number,
    @Arg("priceMax", (type) => Int, { nullable: true }) priceMax: number,
  ): Promise<ProductsResponse> {
    const productsRef = ref(database, 'products');
    const list: Product[] = []

    const snapshot = await get(productsRef);
    if(snapshot.exists()) {
      snapshot.forEach((childSnapshot) => {
        const product: Product = childSnapshot.val();
        list.push(product)
      });
    }
    const types = type !== "all" ? type : undefined;
    const brands = brand && brand.length > 0 ? brand : undefined;
    const colors = color !== "" ? color : undefined;
    
    const filterData = getVisibleproducts(list, types, text, brands, colors, sortBy, priceMin, priceMax);
    const total = filterData.length;
    console.log('please');
    
    return {
      items: filterData.slice(indexFrom, indexFrom + limit),
      hasMore: total > indexFrom + limit,
      total,
    };
  }

  @Query(() => Product, { description: "get product details by ID" })
  async product(@Arg("id", { defaultValue: 0 }) id: number): Promise<Product | undefined> {
    const data = this.items.find((item) => item.id === id);
    return await data;
  }

  @Query(() => [Product], { description: "get related products by Type" })
  async relatedProducts(@Arg("id", (type) => Int) id: number, @Arg("type") type: string): Promise<Product[]> {
    return await this.items.filter((item) => item.type === type && item.id !== id).slice(0, 10);
  }

  @Query(() => [Product], { description: "get new products by Type" })
  async newProducts(@Arg("type", { nullable: true }) type: string): Promise<Product[]> {
    return await this.items
      .filter((item) => {
        var cond: Boolean;
        if (type) cond = item.type === type && item.new === true;
        else cond = item.new === true;

        return cond;
      })
      .slice(0, 10);
  }

  @Query(() => [Product], { description: "get new products by Collection" })
  async collection(@Arg("collec", { nullable: true }) collec: string): Promise<Product[]> {
    return this.items.filter((item) => {
      return item.collection.find((i) => {
        if (i.collectionName === collec) return item;
        return;
      });
    });
  }

  @Mutation(() => Product, { description: "create product" })
  async createProduct(
    // @Arg("product") product: ProductInput
    @Arg('title', { nullable: true }) title?: string,
    @Arg('type', { nullable: true }) type?: string,
    @Arg('quantity', { nullable: true }) quantity?: string,
    @Arg('price', { defaultValue: 0 }) price?: number,
    @Arg('description', { nullable: true }) description?: string,
  ): Promise<Product> {
    try {
      
      const productsRef = ref(database, 'products');
      const newProductRef = push(productsRef);

      const newProduct: Product = {
        id: newProductRef?.key ?? "",
        brand: "",
        collection: [],
        category: "",
        new: false,
        sale: false,
        discount: "",
        stock: "",
        variants: [],
        images: null ?? [{
            image_id: 0,
            id: "",
            alt: "",
            src: "",
        }],
        title: title || "",
        description: description || "",
        price: price || 0,
        type: type || "",
        quantity: quantity || 0
      };

      await set(newProductRef, newProduct);

      return newProduct;
    } catch (error) {
      throw new Error('Thêm sản phẩm thất bại: ' + error);
    }
  }

  @Mutation(() => DeleteProductResponse)
  async deleteProduct(
    @Arg('id') id: string
  ): Promise<DeleteProductResponse> {
    try {
      const productRef = ref(database, `products/${id}`);
      await remove(productRef);

      return { success: true };
    } catch (error) {
      console.error(error);
      return { success: false };
    }
  }

  @Mutation(() => UpdateProductResponse)
  async updateProduct(
    @Arg("id") id: string,
    @Arg('title') title: string,
    @Arg('type') type: string,
    @Arg('quantity') quantity: string,
  ): Promise<UpdateProductResponse> {
    try {
      const productRef = ref(database, `products/${id}`);
      const updatedProduct = {
        title, type, quantity
      }
      await update(productRef, updatedProduct);

      return { success: true };
    } catch (error) {
      console.error(error);
      return { success: false };
    }
  }
}
