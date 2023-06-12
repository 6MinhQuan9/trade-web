import Menus from "./";
import { plainToClass } from "class-transformer";
const loadCoupons = (): Menus[] => {
  return plainToClass(Menus, [
    {
      name:'Dashboard',
      status:'active',
      createdOn:'02/01/2020'
    },
    {
      name:'Product',
      status:'active',
      createdOn:'02/01/2020'
    },
    {
      name:'Sale',
      status:'active',
      createdOn:'02/01/2020'
    },
    {
      name:'Coupon',
      status:'active',
      createdOn:'02/01/2020'
    },
    {
      name:'Media',
      status:'active',
      createdOn:'02/01/2020'
    },
    {
      name:'User',
      status:'active',
      createdOn:'02/01/2020'
    },
    {
      name:'Vendor',
      status:'active',
      createdOn:'02/01/2020'
    },
    {
      name:'Localization',
      status:'active',
      createdOn:'02/01/2020'
    }
  ]);
};

export default loadCoupons;
