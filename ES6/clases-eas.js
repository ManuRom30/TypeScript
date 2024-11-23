(()=>{

class Avenger {
    name;
    power;

    constructor (name= 'No Name', power= 1234){
        this.name = name
        this.power = power
    } 
}

class flyingAvenger extends Avenger{
    flying;
    constructor(name, power){
        super(name, power);
        this.flying = true;
    }
}

const hulk = new Avenger('Hulk', 90001)
console.log(hulk)

const falcon = new flyingAvenger ('falcon', 50)
console.log(falcon)

    
})()