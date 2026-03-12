import { caesarCipher } from "./caesarCipher.js"

test('happy path 1 - shifts simple string',()=>{
    expect(caesarCipher("abc",2)).toBe("cde")
})

test('works with xyz (eg. test wrapping from z to a)',()=>{
    expect(caesarCipher("xyz",3)).toBe("abc")
})

test("case preservation",()=>{
    expect(caesarCipher("HeLLo",3)).toBe("KhOOr")
})

test("Punctuation, spaces, and other non-alphabetical characters remain unchanged",()=>{
    expect(caesarCipher('Hello, World!', 3)).toBe("Khoor, Zruog!")
})