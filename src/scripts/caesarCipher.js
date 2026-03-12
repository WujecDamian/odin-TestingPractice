export function caesarCipher(string,shiftValue){
    let stringArray=string.split("")

    for(let i=0;i<stringArray.length;i++){
        let stringCodeAt=stringArray[i].charCodeAt()+shiftValue
        if(stringCodeAt>122){
            stringArray[i]=String.fromCharCode(stringCodeAt-26)
        }
        if(stringCodeAt>65 && stringCodeAt<91){
        stringArray[i]=String.fromCharCode(stringCodeAt)
        }
        if(stringCodeAt>96 && stringCodeAt<123){
        stringArray[i]=String.fromCharCode(stringCodeAt)
        }
    }
    return stringArray.join("")
}