import { reverseString } from "./reverseString.js"

test('reverse string',()=>{
    expect(reverseString("It's a me Mario!")).toEqual("!oiraM em a s'tI")
})