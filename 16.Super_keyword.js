
class myClass{
    app(){
        console.log('This is one1')
    }
    app2(){
        console.log('This is Two2') 
    }
}

class yourClass extends myClass{
    demo(){
        super.app();
        super.app2();
    }
}

let obj = new yourClass
obj.demo()