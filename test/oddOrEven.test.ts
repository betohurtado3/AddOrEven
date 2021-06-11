import {it, describe, expect} from "@jest/globals";
import {oddOrEven} from "../src/oddOrEven";

describe("Test if adding all the numbers is pair or inpair", () =>{
    it("should return Even for receive [0, -1, -5]", () => {
        expect(oddOrEven([0,1,1,1])).toBe("Odd");
    });
});