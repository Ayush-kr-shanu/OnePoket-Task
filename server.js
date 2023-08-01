function sumOfArrayOfInteger(numbers){
    let sum=0
    for(let i=0;i<numbers.length;i++){
        sum+=numbers[i]
    }
    return sum
}

let arr=[1,2,3,4,5,6,7,8,9]

let res=sumOfArrayOfInteger(arr)
console.log(res);