import { mhs, mhsType } from "../src/enum";

describe("ENUM Type", function () {
  it("should support in typescript", function () {
    const mhs: mhs = {
      nim: "217123",
      name: "Gifari Fajar Maulana",
      type: mhsType.REGULER,
    };

    console.info(mhs);
  });
});
