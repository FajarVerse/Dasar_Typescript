import { sayHello } from "../src/say-hello";

describe("Optional Parameter", function () {
  it("should support in undefined and null", function () {
    // Type undefined (default optional paramater)
    function sayHi(name?: string) {
      if (name) {
        console.info(`Hi, ${name}`);
      } else {
        console.info("Hi");
      }
    }

    sayHi("Gifari Fajar Maulana");
    const nama: string | undefined = undefined;
    sayHi(nama);

    // Type null
    function sayBye(name: string | null) {
      if (name) {
        console.info(`Good Bye, ${name}`);
      } else {
        console.info("Good Bye");
      }
    }

    sayBye("Gifari Fajar Maulana");
    const name: string | null = null;
    sayBye(name);
  });
});
