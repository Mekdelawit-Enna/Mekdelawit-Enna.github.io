//Question #1
var count  = function()
{
    var counter = 1; 

    const add = function()
    {
        counter++;
        return counter;
    };
    const reset = function()
    {
        counter = 0;
        return counter;
    };
    return {
        addMethod: add,
        resetMethod: reset
    };
}

/* Question #2
    2.  A free variable is a variable that's not declared inside a given function or a variable that's
        not passed as a parameter.
        counter is the free varible. 
*/

/* Question #3*/
var make_adder = function(inc)
{
   var counter  = 0;
   return function add()
   {
       counter += inc;
       return counter;
   }
}
/* Question #4
The IIFE Modlue Pattern can be used to solve the issue.
 (function(params)
    {
       statements;
    }
    ))(params);
*/

//Question #5
const Module = (function()
{
    let name;
    let age;
    let salary;

    const _getNamePrivate = function(){
        return name;
    }
    const _getAgePrivate = function(){
        return age;
    }
    const _getSalaryPrivate = function(){
        return salary;
    }

    const setAge = function(ag){
         age = ag;
    }
    const setSalaryPublic = function(sal){
        salary = sal;
    };
    const incrementAgePublic = function(){
        setAge(_getAgePrivate() + 1);
    };
    const setNamePublic =  function(nm){
        name = nm;
    };
    const incrementSalaryPublic = function(percentage){
        salary = (_getSalaryPrivate() * (percentage/100)) + _getSalaryPrivate();
    };
    const setAgePublic = function(ag){
        age = ag;
    };
    return {
        incrementSalary: incrementSalaryPublic,
        setName: setNamePublic,
        setSalary: setSalaryPublic,
        incrementAge: incrementAgePublic,
        getName: function(){
            return _getNamePrivate();
        },
        setAge: setAgePublic,
        getAge: function(){
            return _getAgePrivate();
        },
        getSalary: function(){
            return _getSalaryPrivate();
        },
        
    }
})();

//Question #6
//option 1
var extension = (function(md){
    var address;
    var setAddress = function(add)
    {
        address = add;
        
    }
    var getAddress = function()
    {
        
        return address;
    }
    return {
        set: setAddress,
        get: getAddress
    }
})(Module);
//option 2
Module.ext = function()
{
    var address;
    var setAddress = function(add)
    {
        address = add;
        
    }
    var getAddress = function()
    {
        
        return address;
    }
    return {
        set: setAddress,
        get: getAddress
    }
}

//JS Fiddle Question
var me = {
    first: 'Josh',
    last: 'Splinter',
    getFullName: function() {
      return this.first + ' ' + this.last;
    }
  };
  
  var you = {
    first: 'William',
    last: 'Smith'
  };
  
let full = me.getFullName.bind(you); 
console.log(full()); 
console.log(me.getFullName.call(you));
console.log(me.getFullName.apply(you));

