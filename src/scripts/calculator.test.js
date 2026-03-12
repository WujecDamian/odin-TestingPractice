import { calculatorFactory } from "./calculator.js"

test ('takes two numbers and returns correct calculation',()=>{
    let calculator=calculatorFactory()
    expect(calculator.add(2,6)).toBe(8)
    expect(calculator.substract(12,3)).toBe(9)
    expect(calculator.divide(50,2)).toBe(25)
    expect(calculator.multiply(6,6)).toBe(36)
})