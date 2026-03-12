export function analyzeArray(array){
    return {
        average:average(),
        min:min(),
        max:max(),
        length:getLength()
    }
    function average(){
            let avg=0
            for(let a=0;a<array.length;a++){
            avg+=array[a]
            }
            return avg/array.length
        }
    function min(){
        let min=array[0]
        for(let b=0;b<array.length;b++){
            if(array[b]<array[b+1]){
                min=array[b]
            }
            return min
            }
    }
    function max(){
        let max=array[0]
        for(let b=0;b<array.length;b++){
            if(array[b]<array[b+1]){
                max=array[b+1]
            }
            return max
            }
    }
    function getLength(){
        return array.length
    }
}