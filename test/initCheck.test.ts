import { dataForTests } from "./dataForTests";
import { expect } from "chai";

describe("Check data for Testing", () => {
  it("users length should be 3", () => {
    const result = dataForTests.users;
    expect(result.length).deep.equal(3);
  });
  it("artists length should be 3", () => {
    const result = dataForTests.artists;
    expect(result.length).deep.equal(3);
  });
  it("albums length should be 9", () => {
    const result = dataForTests.albums;
    expect(result.length).deep.equal(9);
  });
  it("ratings ratings should be 27", () => {
    const result = dataForTests.ratings;
    expect(result.length).deep.equal(27);
  });
  it("collections ratings should be 4", () => {
    const result = dataForTests.collections;
    expect(result.length).deep.equal(4);
  });
});
