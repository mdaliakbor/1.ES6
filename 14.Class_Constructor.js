class className{
    constructor(){
        console.log('This is class constructor')
    }
}

let obj = new className()




class myClass{
    constructor(a,b,c){
        this.firstNumber = a;
        this.midNumber = b;
        this.lastNumber = c;
    }
    add(){
        let result = this.firstNumber + this.midNumber + this.lastNumber;
        console.log(result)
    }
}

let  object = new myClass(23,54,65)
object.add()


///////////// static keyword 

class className{
    static hello(){
        console.log('This is static key')
    }
}

