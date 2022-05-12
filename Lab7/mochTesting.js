window.onload =function(){
    // let a = [1,2,3,4];
    // let words = ["tek", "test", "tasty", "awesome"];
    // console.log(multiply(a));
    // console.log(sum(a));
    //console.log(reverse("tangential misery"));
    // console.log(filterLongWords(words, 4));
    tester();
}

function sum(numbers){
    return numbers.reduce((a,b)=>a + b, 0);
}

function multiply(numbers)
{
    return numbers.reduce((a,b)=> a * b, 1);
}
function reverse(aWord)
{
    return aWord.split("").reverse().reduce((a,b)=> a+ b, "");
}

function filterLongWords(aWord, i)
{
    return aWord.filter(x => x.length > i);
}

function tester(){
    let words = ["tek", "test", "tasty", "awesome"];
    let result = ["tasty", "awesome"];
    describe("filterLongWords", function(){
        it("returns array of words longer than the argument given with the array", function(){
         //  assert.equal(filterLongWords(words, 4).toString(), result.toString()); //this one works but not it is not handy
            expect(filterLongWords(words, 4)).to.eql(result);
        });
    });
    describe("reverse", function(){
        it("returns the reverse of the string that's of a string", function(){
            assert.equal(reverse("Tangential misery"), "yresim laitnegnaT");
        });
    });
    
    describe("sum", function(){
        it("returns the sum of all the numbers in the array", function(){
            assert.equal(sum([1,2,3]), 6);
        });
    });
    describe("multiply", function(){
        it("returns the sum of the number multplied in the array", function(){
            assert.equal(multiply([1,9,11]), 99);
        })
    });
   

    mocha.run();
}