describe("For Loop", function () {
  it("should support in typescript", function () {
    const names: string[] = ["Gifari", "Fajar", "Maulana"];

    // for i
    for (let i = 0; i < names.length; i++) {
      console.info(names[i]);
    }

    // For of
    for (const name of names) {
      console.info(name);
    }

    // For in
    for (const key in names) {
      console.info(names[key]);
    }
  });

  // while loop
  it("should support while loop", function () {
    let value: number = 0;

    while (value < 5) {
      console.info(value);
      value++;
    }
  });

  // do while loop
  it("should support do while", function () {
    let value: number = 0;

    do {
      console.info(value);
      value++;
    } while (value < 5);
  });

  // break & continue
  it("should support break and continue", function () {
    let value = 0;

    do {
      value++;
      if (value > 10) {
        break;
      }
      if (value % 2 == 0) {
        continue;
      }

      console.info(value);
    } while (true);
  });
});
