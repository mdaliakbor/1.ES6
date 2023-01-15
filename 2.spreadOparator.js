///spread oparator

let poorCountry = ['bangladesh','srilanka','pakistan'];
let richCountry = [...poorCountry,'arab','dubai','irak']

console.log(richCountry)


///// without spread oparator

let poorCountry = ['bangladesh','srilanka','pakistan'];
let richCountry = ['arab','dubai','irak']
richCountry.push(poorCountry)

console.log(richCountry)