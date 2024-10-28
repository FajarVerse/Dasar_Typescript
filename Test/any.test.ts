describe("Any", function () {
  // Tipe Daya Any(bebas atau bisa di ubah)
  it("should support in typescript", function () {
    const biodata: any = {
      nim: 231,
      name: "Gifari",
      prodi: "Manajemen Informatika",
    };

    biodata.age = 20;
    console.info(biodata);
  });
});
