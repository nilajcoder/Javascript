




// for..in loop
// The for..in loop is used to iterate over the properties of an object.
const person = {
    name: "John",
    age: 30,
    city: "New York"
};

for (let i in person) {
    console.log(person[i]);
}


// for..of loop
// The for..of loop is used to iterate over iterable objects like arrays, strings, etc.
var numbers = [1, 2, 3];
var sum = 0;
for (let i of numbers) {
    //console.log();
        sum += i;

}
console.log("Sum is " + sum);


/*

For loop:
for(initialization; condition; update){
    // code to execute
}

In JavaScript, the for loop is used when 
you want to repeat a block of code a specific number of times.
*/

/*
1 to 5
*/
for(let j=1;j<=5;j++){ //1<=5 j++ 2<=5 j++ 3 3<=5  j++
    console.log(j) //1 2 3
}