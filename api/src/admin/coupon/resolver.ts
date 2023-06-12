import { Resolver, Query, Arg, Int, Mutation } from "type-graphql";
import loadCoupons from "./data";
import CouponInput from "./input";
import Coupons from "./";

@Resolver()
export class CouponResolver {
  private readonly items: Coupons[] = loadCoupons();

  @Query(() => [Coupons], { description: "get all categories Data" })
  async coupons(): Promise<Coupons[]> {
    return await this.items;
  }

  // Mutations
  @Mutation(() => Coupons, { description: "Create Category" })
  async createCoupon(@Arg("coupon") coupon: CouponInput): Promise<Coupons> {
    console.log("create new category", coupon);
    return await coupon;
  }
}
