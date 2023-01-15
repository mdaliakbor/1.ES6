
class parent{
    hello1(){
        console.log('This is parent One')
    }
    hello2(){
        console.log('This is parent Two')
    }
}

class child  extends parent{

}

let obj = new child()
obj.hello2()