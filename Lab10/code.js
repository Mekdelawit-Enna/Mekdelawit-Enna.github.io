String.prototype.filter = function(bannedWords){
    let splitted = this.split(" ");
  

    return splitted.filter((x) => !bannedWords.includes(x)).reduce((a,b)=> a + " " + b);
}

Array.prototype.bubbleSort = function(){
    let toBeSorted = this;
    for(let i = 0; i < toBeSorted.length; i++)
    {
        for(j = 0; j < toBeSorted.length; j++)
        {
            if(toBeSorted[i] < toBeSorted[j])
            {
                let temp = toBeSorted[j];
                toBeSorted[j] = toBeSorted[i];
                toBeSorted[i] = temp;
            }
        }   
    }
    return toBeSorted;
}

var Person = function(){};

Person.prototype.initialize = function(name, age){
    this.name = name;
    this.age = age;

}
Person.prototype.describe = function()
{
    return this.name + ", " + this.age + " years old. ";
}


var Teacher = function(){};
Teacher.prototype = new Person();

Teacher.prototype.teach = function(subject){
   return this.name + " is now teaching " + subject;
}

function che(a)
{
    let pattern = /^[A-Z]{1}.*$/
    return a.filter((x) => x.match(pattern));
}


class Computer
{
    constructor(rm, cpu, stor)
    {
        this.ram = rm;
        this.cpu = cpu;
        this.storage = stor;
    }
    getRam()
    {
        return this.ram;
    }
    setRam(rm)
    {
        this.ram = rm;
    }
    getCpu()
    {
        return this.cpu;
    }
    setCpu(cp)
    {
        this.storage = cp;
    }
    getStorage()
    {
        return this.storage;
    }
    setRam(str)
    {
        this.storage = str;
    }


}
Computer.prototype.runProgram = function(program){
    console.log("running: " + program);
}

class Laptop extends Computer
{
    constructor(rm, cpu, stor, btr)
    {
        super(rm, cpu, stor);
        this.battery = btr;
    }
     getBattery()
    {
        return this.battery;
    }
     setBattery(btr)
    {
        this.battery = btr;
    }
}
Laptop.prototype.carryAround = function(){
    console.log ("carrying laptop: cpu " + this.getCpu() +" ram: " + this.getRam() + " storage: " + this.getStorage() + " battery: " + this.getBattery());
}


let l = new Laptop(1, 2, 3, 4);

l.carryAround();


