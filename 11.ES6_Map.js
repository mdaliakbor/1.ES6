
let myMap = new Map();

myMap.set('keyName','valuName')
myMap.set('key1','Bangladesh')
myMap.set('key2','India')
myMap.set('key3','pakistan')
myMap.set('key4','chaina')
myMap.set('key5','Botan')

// console.log(myMap)
// console.log(myMap.keys())
// console.log(myMap1.get('key1'))
// console.log(myMap.values())




let myMap1 = new Map();

myMap1.set('keyName','valuName')
myMap1.set('key1','Bangladesh')
myMap1.set('key2','India')
myMap1.set('key3','pakistan')
myMap1.set('key4','chaina')
myMap1.set('key5','Botan')

// myMap1.delete('keyName')
// // myMap1.clear()
// console.log(myMap1)


if(myMap1.has('key1')){
    console.log('Yes')
}else{
    console.log('No')
}


for(let myKey of myMap1.keys()){
    console.log(myKey)
}



for(let myValue of myMap1.values()){
    console.log(myValue)
}


