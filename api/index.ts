import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { CategoryResolver } from "./src/category/resolver";
import { OrderResolver } from "./src/admin/order/resolver";
import { TransactionResolver } from "./src/admin/transaction/resolver";
import { ProductResolver } from "./src/product/resolver";
import { FilterResolver } from "./src/helpers/resolver";
import { CouponResolver } from "./src/admin/coupon/resolver";
import { PageResolver } from "./src/admin/pages/resolver";
import { MediaResolver } from "./src/admin/media/resolver";
import { MenuResolver } from "./src/admin/menu/resolver";
import { UserResolver } from "./src/admin/users/resolver";
import { LocalizeResolver } from "./src/admin/localization/resolver";
import { CurrencyResolver } from "./src/currency/resolver";

const PORT = 4000;
async function main() {
  const schema = await buildSchema({
    resolvers: [
      CategoryResolver,
      ProductResolver,
      FilterResolver,
      OrderResolver,
      TransactionResolver,
      CouponResolver,
      PageResolver,
      MediaResolver,
      MenuResolver,
      UserResolver,
      LocalizeResolver,
      CurrencyResolver,
    ],
  });
  const server = new ApolloServer({
    schema,
    playground: true,
  });
  server.listen(8000, () => {
    console.log(`graphql api running 🔥 http://localhost:8000/graphql`);
  });
}
main();
