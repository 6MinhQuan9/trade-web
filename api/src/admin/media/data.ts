import Media from "./";
import { plainToClass } from "class-transformer";
const loadCoupons = (): Media[] => {
  return plainToClass(Media, [
    {
      img_id: "1",
      id:"1", 
      alt : "dsdsfdfs",
      src:"/images/product/10.jpg"
    },
    {
      img_id: 2,
      id:2, 
      alt : "dsdsfdfs",
      src:"/images/product/30.jpg"
    },
    {
      img_id: 3,
      id:3, 
      alt : "dsdsfdfs",
      src:"/images/product/12.jpg"
    },
    {
      img_id: 4,
      id:4, 
      alt : "dsdsfdfs",
      src:"/images/product/13.jpg"
    } 
  ]);
};

export default loadCoupons;
