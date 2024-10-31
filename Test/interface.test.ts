import { Dosen } from "../src/interface";
import { Developer, Manager } from "../src/interfaceExtends";

describe("Interface", function () {
  // type interface
  it("should support in typescript", function () {
    const dosen: Dosen = {
      id: 2311,
      nama: "Joko Sundan",
      matkul: "web pemograman",
      noPhone: "021381932",
    };

    console.info(dosen);
  });

  // Function Interface
  it("should support function interface", function () {
    interface addNumber {
      (value1: number, value2: number): number;
    }

    const add: addNumber = (value1: number, value2: number): number => {
      return value1 + value2;
    };

    expect(add(2, 5)).toBe(7);
  });

  // Indexable Interface
  it("should support indexable interface", function () {
    interface StringArray {
      [index: number]: string;
    }

    const array: StringArray = ["Gifari", "Fajar", "Maulana"];

    console.info(array);
    console.info(array[2]);
  });

  it("should support indexable interface non index number", function () {
    interface StringDataMhs {
      [key: string]: string;
    }

    const dataMhs: StringDataMhs = {
      name: "Gifari Fajar Maulana",
      age: "20 Tahun",
    };

    expect(dataMhs["name"]).toBe("Gifari Fajar Maulana");
    expect(dataMhs["age"]).toBe("20 Tahun");
    console.info(dataMhs["name"]);
  });

  // Extends Interface
  it("should support extends interface", function () {
    const webDev: Developer = {
      id: 1321,
      name: "Maulana",
      division: "Web Dev",
    };

    const manager: Manager = {
      id: 2121,
      name: "Gifari",
      division: "IT",
      numberOfDeveloper: 15,
    };

    console.info(webDev);
    console.info(manager);
  });

  // Function di dalam Interface
  it("should support function in interface", function () {
    interface Person {
      name: string;
      sayHi(name: string): string;
    }

    const person: Person = {
      name: "Gifari Fajar Maulana",
      sayHi: function (name: string): string {
        return `Hi ${name}, my name is ${this.name}`;
      },
    };

    console.info(person.sayHi("Sulika"));
    console.info(person);
  });
});
