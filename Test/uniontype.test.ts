describe("Type Union", function () {
  // Type data UnionType(bisa dirubah sesuai ketentuan)
  it("should support in typescript", function () {
    let example: string | number | boolean = "Gifari";

    example = true;

    console.info(example);
  });

  // Pengecekan ketika menggunakan method
  it("should support typeof operator", function () {
    function proses(value: string | number | boolean) {
      if (typeof value === "string") {
        return value.toUpperCase();
      } else if (typeof value === "number") {
        return value + 5;
      } else {
        return !value;
      }
    }

    expect(proses("gifari")).toBe("GIFARI");
    expect(proses(20)).toBe(25);
    expect(proses(false)).toBe(true);
  });
});
