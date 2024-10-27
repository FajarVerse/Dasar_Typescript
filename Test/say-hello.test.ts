import { sayHello } from "../src/say-hello";

describe("sayHello", function () {
  it("should return hello Gifari", function () {
    expect(sayHello("Gifari")).toBe("Hello Gifari");
  });
});
