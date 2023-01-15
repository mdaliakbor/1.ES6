function myNumber(...numbers){
    let sum = 0
    for(let i of numbers){
        sum +=i;
    }
    console.log(sum)
}

myNumber(1,2,4,5,6,99)