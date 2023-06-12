import Category from "./";
import { plainToClass } from "class-transformer";

const loadCategories = (): Category[] => {
  return plainToClass(Category, [
    {
      
      id:1,
      img:'product/10.jpg',
      title: "Fashion",
    },
    {
      id:2,
      img:'product/12.jpg',
      title: "Watches",
    },

    {
      id:3,
      img:'product/13.jpg',
      title: "Purse",
    },

    {
      id:4,
      img:'product/30.jpg',
      title: "Bags",
    },

    {
      id:5,
      img:'product/10.jpg',
      title: "Vegetables",
    },
    {
      id:6,
      img:'product/12.jpg',
      title: "Toys",
    },
    {
      id:7,
      img:'product/13.jpg',
      title: "Electronic",
    }
  ]);
};

export default loadCategories;
