import { dataController } from "../src/controller/dataController";
import { expect } from "chai";

describe("init Check test for dataController", () => {
  it("check testFunction in dataController ", () => {
    const result = dataController.testFunction(5);
    expect(result).deep.equal(10);
  });
});
