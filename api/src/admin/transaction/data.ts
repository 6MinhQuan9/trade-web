import Transaction from "./";
import { plainToClass } from "class-transformer";

const loadTransaction = (): Transaction[] => {
  return plainToClass(Transaction, [
    {
      orderId:142,
      transactionId:"#212145214510",
      date:"Sep 2,19",
      paymentMethod:"Paypal",
      deliveryStatus:"Delivered",
      amount:"$175/-"
    },
    {
      orderId:143,
      transactionId:"#214576414510",
      date:"Sep 2,19",
      paymentMethod:"Debit Card",
      deliveryStatus:"Pending",
      amount:"$1075/-"
    },
    {
     
      orderId:144,
      transactionId:"#65465214510",
      date:"Sep 2,19",
      paymentMethod:"Paypal",
      deliveryStatus:"Pending",
      amount:"$200/-"
    },

    {
      orderId:145,
      transactionId:"#4564145214510",
      date:"Sep 2,19",
      paymentMethod:"Paypal",
      deliveryStatus:"Delivered",
      amount:"$175/-"
    },

    {
      orderId:146,
      transactionId:"#212154614510",
      date:"Sep 2,19",
      paymentMethod:"Debit Card",
      deliveryStatus:"Pending",
      amount:"$175/-"
    },
    {
      orderId:147,
      transactionId:"#212145214510",
      date:"Sep 2,19",
      paymentMethod:"Credit Card",
      deliveryStatus:"Processing",
      amount:"$210/-"
    },
    {
      orderId:148,
      transactionId:"#54655214510",
      date:"Sep 2,19",
      paymentMethod:"Debit Card",
      deliveryStatus:"Pending",
      amount:"$175/-"
    },
    {
      orderId:149,
      transactionId:"#212145214510",
      date:"Sep 2,19",
      paymentMethod:"Credit Card",
      deliveryStatus:"Pending",
      amount:"$655/-"
    },
    {
      orderId:150,
      transactionId:"#212145214510",
      date:"Sep 2,19",
      paymentMethod:"Debit Card",
      deliveryStatus:"Processing",
      amount:"$175/-"
    },
    {
      orderId:151,
      transactionId:"#212145214510",
      date:"Sep 2,19",
      paymentMethod:"Paypal",
      deliveryStatus:"Pending",
      amount:"$295/-"
    },
    {
      orderId:152,
      transactionId:"#212145214510",
      date:"Sep 2,19",
      paymentMethod:"Paypal",
      deliveryStatus:"Processing",
      amount:"$175/-"
    },
    {
      orderId:153,
      transactionId:"#212145214510",
      date:"Sep 2,19",
      paymentMethod:"Credit Card",
      deliveryStatus:"Pending",
      amount:"$125/-"
    },
    {
      orderId:154,
      transactionId:"#212145214510",
      date:"Sep 2,19",
      paymentMethod:"Paypal",
      deliveryStatus:"Processing",
      amount:"$175/-"
    },
    {
      orderId:155,
      transactionId:"#212145214510",
      date:"Sep 2,19",
      paymentMethod:"Paypal",
      deliveryStatus:"Delivered",
      amount:"$1750/-"
    },
    {
      orderId:156,
      transactionId:"#212145214510",
      date:"Sep 2,19",
      paymentMethod:"Paypal",
      deliveryStatus:"Delivered",
      amount:"$225/-"
    },
    {
      orderId:157,
      transactionId:"#212145214510",
      date:"Sep 2,19",
      paymentMethod:"Credit Card",
      deliveryStatus:"Pending",
      amount:"$75/-"
    }
  ]);
};

export default loadTransaction;
