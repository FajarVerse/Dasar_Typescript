describe("Array", function () {
  // Normal Array 
  it("typescript array", function () {
    const names: string[] = ["Gifari", "Andre", "Hasna"];
    const values: number[] = [0, 10, 30];

    console.info(names);
    console.info(values);
  });

  // Array Readonly
  it("typescript readonly array", function () {
    let hobi: ReadonlyArray<string> = ["Main Game", "Coding", "Memancing"];

    console.info(hobi);
    console.info(hobi[0]);
  });

  // Arrau Tupple
  it("typescript tupple array", function () {
    const biodata: readonly [string, number, string, boolean]= ["Gifari", 20, "Bekasi", true];

    console.info(biodata)
    console.info(biodata[0])
  });
});
