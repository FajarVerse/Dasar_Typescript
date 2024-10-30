import { Category, Product } from "../src/type-alias";

describe("Type Alias", function () {
  it("Should support in typescript", function () {
    const category: Category = {
      id: "A1",
      nama: "Laptop Hp",
    };

    const product: Product = {
      id: 1,
      nama: "Laptop HP Victus",
      qty: 12,
      category: category,
    };


    console.info(category)
    console.info(product)
  });
});
