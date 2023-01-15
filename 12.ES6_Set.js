
let mySet = new Set()

mySet.add('Bangladesh')
mySet.add('India')
mySet.add('Pakistan')
mySet.add('nepal')

console.log(mySet)
console.log(mySet.values())
console.log(mySet.size)


if(mySet.has('India')){
    console.log('yes')
}


for(let myObj of mySet.values()){
    console.log(myObj)
}
