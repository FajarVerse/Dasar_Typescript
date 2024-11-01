describe("Function", function () {
  it("should support in typescript", function () {
    function sayHi(nama: string): string {
      return `Hi my name is ${nama}`;
    }

    expect(sayHi("Gifari")).toBe("Hi my name is Gifari");

    // tanpa tipe data return value
    function printSayHi(nama: string): void {
      console.info(`Hi ${nama}`);
    }

    printSayHi("Gifari");
  });

  // Default Value parameter
  it("should support default value", function () {
    function sayHi(nama: string = "Tanpa Nama"): string {
      return `Hi ${nama}`;
    }

    expect(sayHi()).toBe("Hi Tanpa Nama");
    expect(sayHi("Gifari")).toBe("Hi Gifari");
  });

  // Rest Parameter
  it("should support rest parameter", function () {
    function sum(...values: number[]): number {
      let total = 0;

      for (const value of values) {
        total += value;
      }

      return total;
    }

    expect(sum(2, 3, 4, 5, 5)).toBe(19);
  });

  // optional parameter
  it("should support optional parameter", function () {
    function sayHello(firstName: string, lastName?: string): string {
      if (lastName) {
        return `Hello ${firstName} ${lastName}`;
      } else {
        return `Hello ${firstName}`;
      }
    }

    expect(sayHello("Gifari")).toBe("Hello Gifari");
    expect(sayHello("Fajar", "Maulana")).toBe("Hello Fajar Maulana");
  });

  // Function Overloading (nama function yang sama tetapi tipe data berbeda)
  it("should support function overloading", function () {
    function callMe(value: string): string;
    function callMe(value: number): number;
    function callMe(value: any): any {
      if (typeof value === "string") {
        return value.toLowerCase();
      } else if (typeof value === "number") {
        return value * 2;
      }
    }

    expect(callMe("Gifari")).toBe("gifari");
    expect(callMe(5)).toBe(10);
  });

  // Function sebagai parameeter (callback function)
  it("should function as parameter", function () {
    function sayHi(name: string, filter: (nama: string) => string): string {
      return `Hi ${filter(name)}`;
    }

    function toLower(nama: string): string {
      return nama.toLowerCase();
    }

    expect(sayHi("GIFARI", toLower)).toBe("Hi gifari");

    // Anonymus Function
    expect(
      sayHi("gifari", function (name: string): string {
        return name.toUpperCase();
      })
    ).toBe("Hi GIFARI");

    // Arrow Function
    expect(sayHi("gifari", (name: string): string => name.toUpperCase())).toBe(
      "Hi GIFARI"
    );
  });
});
