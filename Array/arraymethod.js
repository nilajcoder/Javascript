

/*

Array methods (map, filter, reduce, find, forEach)
*/


/*

MAP
*/
let arr = [1, 2, 3];

let multiplication = arr.map((value) => value * 2);
console.log(multiplication); // [2, 4, 6]



//Filter
let brr = [10, 15, 20, 25];

let filterelement = brr.filter((value) => value > 18);
let even=brr.filter((value=>value%2==0 ))
let odd=brr.filter((value=>value%2==!0 ))
console.log(filterelement); // [20,25]
console.log(even)//10,20
console.log(odd) //15,25


//Find
let ele = [10, 15, 20, 25];

let result = ele.find((value) => value > 18);
console.log(result); // 20 return Single Value First Occurence 




//reduce


let element = [1, 2, 3, 4];

let sum =element.reduce((acc, value) => acc + value);
let mul =element.reduce((acc, value) => acc * value);
console.log(sum); // 10 return Single Elemrnt
console.log(mul)//24


//forEach() does not return a new array.

let res = [1, 2, 3].forEach(x => x * 2);
console.log(res); // undefined


let value = [10, 20, 30];

value.forEach((value) => {
  console.log(value);//10 20 30
});
