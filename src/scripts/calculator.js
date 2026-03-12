export function calculatorFactory(){
    return {
        add(num1,num2){
            return num1+num2
        },
        substract(num1,num2){
            return num1-num2
        },
        divide(num1,num2){
            if(num2!=0){
            return num1/num2
            }
        },
        multiply(num1,num2){
            return num1*num2
        }
    }
}