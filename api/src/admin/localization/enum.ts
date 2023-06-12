import { registerEnumType } from "type-graphql";

export enum CategoryType {
  ELECTRONICS = "electronics",
  VEGETABLES = "vegetables",
  FURNITURE = "furniture",
  JEWELLWEY = "jewellery",
  FASHION = "fashion",
  BEAUTY = "beauty",
  FLOWER = "flower",
  TOOLS = "tools",
  WATCH = "watch",
  METRO = "metro",
  SHOES = "shoes",
  BAGS = "bags",
  KIDS ="kids",
  PETS ="pets",
  ALL ="all"
}

registerEnumType(CategoryType, {
    name: "CategoryType",
    description: "The basic product sorting types"
});

