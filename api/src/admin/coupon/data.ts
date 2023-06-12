import Coupons from "./";
import { plainToClass } from "class-transformer";
const loadCoupons = (): Coupons[] => {
  return plainToClass(Coupons, [
    {
      title:"up to 10% off",
      couponcode:'Percent10',
      expireDate:"02/202/2019",
      freeShipping:false,
      qty:12,
      coupnStatus:'inactive',
      product:'Fashion',
      category:'fashion',
      minimumspend:12,
      maximumspend:25,
      limit:12,
      customer:12
    },
    {
      title:"up to 20% off",
      couponcode:'Percent20',
      expireDate:"02/202/2019",
      freeShipping:false,
      qty:12,
      coupnStatus:'inactive',
      product:'Fashion',
      category:'fashion',
      minimumspend:12,
      maximumspend:25,
      limit:12,
      customer:12
      // discount: "20%",
      // status:"pending"
    },
    {
      title:"up to 22% off",
      couponcode:'Percent22',
      expireDate:"02/202/2019",
      freeShipping:false,
      qty:12,
      coupnStatus:'inactive',
      product:'Fashion',
      category:'fashion',
      minimumspend:12,
      maximumspend:25,
      limit:12,
      customer:12
      // discount: "22%",
      // status:"approved"
    },
    {
      title:"up to 25% off",
      couponcode:'Percent25',      
      expireDate:"02/202/2019",
      freeShipping:false,
      qty:12,
      coupnStatus:'inactive',
      product:'Fashion',
      category:'fashion',
      minimumspend:12,
      maximumspend:25,
      limit:12,
      customer:12
      // discount: "25%",
      // status:"approved"
    },
    {
      title:"up to 50% off",
      couponcode:'Percent50',
      expireDate:"02/202/2019",
      freeShipping:false,
      qty:12,
      coupnStatus:'inactive',
      product:'Fashion',
      category:'fashion',
      minimumspend:12,
      maximumspend:25,
      limit:12,
      customer:12
      // discount: "50%",
      // status:"pending"
    },
    {
      title:"up to 60% off",
      couponcode:'Percent60',
      expireDate:"02/202/2019",
      freeShipping:false,
      qty:12,
      coupnStatus:'inactive',
      product:'Fashion',
      category:'fashion',
      minimumspend:12,
      maximumspend:25,
      limit:12,
      customer:12
      // discount: "60%",
      // status:"approved"    
    },
    {
      title:"up to 99% off",
      couponcode:'Percent99',
      expireDate:"02/202/2019",
      freeShipping:false,
      qty:12,
      coupnStatus:'inactive',
      product:'Fashion',
      category:'fashion',
      minimumspend:12,
      maximumspend:25,
      limit:12,
      customer:12
      // discount: "99%",
      // status:"approved"    
    }
  ]);
};

export default loadCoupons;
