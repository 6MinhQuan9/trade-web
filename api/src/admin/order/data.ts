import Order from "./";
import { plainToClass } from "class-transformer";

const loadCategories = (): Order[] => {
  return plainToClass(Order, [
    {
      
      id:1,
      img:'/images/product/10.jpg',
      title: "Krupsa",
      paymentStatus:"Awaiting Authentication",
      paymentMethod:"Master Card",
      orderStatus:"shipped",
      date:"21/2/2020",
      total:"$500"
    },
    {
      id:2,
      img:'/images/product/12.jpg',
      title: "Watches",
      paymentStatus:"Payment Failed",
      paymentMethod:"Debit Card",
      orderStatus:"processing",
      date:"21/2/2020",
      total:"$2500"
    },

    {
      id:3,
      img:'/images/product/13.jpg',
      title: "Purse",
      paymentStatus:"Paid",
      paymentMethod:"Credit Card",
      orderStatus:"Deliverd",
      date:"21/2/2020",
      total:"$1500"
    },

    {
      id:4,
      img:'/images/product/30.jpg',
      title: "Bags",
      paymentStatus:"Awaiting Authentication",
      paymentMethod:"Paypal",
      orderStatus:"Cancelled",
      date:"21/2/2020",
      total:"$500"
    },

    {
      id:5,
      img:'/images/product/10.jpg',
      title: "Vegetables",
      paymentStatus:"Paid",
      paymentMethod:"Visa",
      orderStatus:"Processing",
      date:"21/2/2020",
      total:"$5500"
    },
    {
      id:6,
      img:'/images/product/12.jpg',
      title: "Toys",
      paymentStatus:"Awaiting Authentication",
      paymentMethod:"Credit Card",
      orderStatus:"shipped",
      date:"21/2/2020",
      total:"$2500"
    },
    {
      id:7,
      img:'/images/product/13.jpg',
      title: "Electronic",
      paymentStatus:"Awaiting Authentication",
      paymentMethod:"Credit Card",
      orderStatus:"Deliverd",
      date:"21/2/2020",
      total:"$500"
    }
  ]);
};

export default loadCategories;
