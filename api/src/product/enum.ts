import { registerEnumType } from "type-graphql";

export enum ProductSortType {
  HIGH_TO_LOW = "HighToLow",
  LOW_TO_HIGH = "LowToHigh",
  NEWEST = "Newest",
  ASC_ORDER = "AscOrder",
  DESC_ORDER = "DescOrder",
}

registerEnumType(ProductSortType, {
    name: "ProductSort",
    description: "The basic product sorting types"
  });

