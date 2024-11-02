describe("IF Statment", function () {
  it("should support in typescript", function () {
    const nilai: number = 70;

    if (nilai > 70) {
      console.info("Lulus");
    }
    if (nilai == 70) {
      console.info("lulus dan remedial");
    } else {
      console.info("tidak lulus dan mengulang");
    }
  });

  // Ternary Operator
  it("should support ternary opreator", function () {
    const nilaMhs = 80;
    const ketentuan = nilaMhs >= 75 ? "Lulus" : "Remedial";

    console.info(ketentuan);
  });

  // Switch statment
  it("should support switch statment", function () {
    const sayHi = (name: string): string => {
      switch (name) {
        case "Gifari":
          return "Hi Gifari";
        case "Andrean":
          return "Hi Andrean";
        default:
          return "Halo tanpa nama";
      }
    };

    console.info(sayHi("Gifari"));
  });
});
