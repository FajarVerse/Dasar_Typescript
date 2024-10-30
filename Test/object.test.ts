describe("Object Type", function () {
  // Object Type, & optional properties(?)
  it("should support in typescript", function () {
    const mhs: { nim: string; name: string; hobbies?: string[] } = {
      nim: "211263",
      name: "Gifari Fajar Maulana",
    };

    console.info(mhs);

    mhs.nim = "211264";
    mhs.name = "Hasna";
    mhs.hobbies = ["Baca Buku"];

    console.info(mhs);
  });
});
