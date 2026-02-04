
/*

Four Example of falsy values in JS
*/

//1. undefined

let a;
console.log(a)//undefined
console.log(Boolean(a))//false


//2. Null

let b=null;
console.log(Boolean(b))//false
 

//3. "" Empty String

let c=""
console.log(Boolean(c))//false

//4. NAN
let d=NaN;
console.log(Boolean(d))//false

//5. 0

let cc=0;
console.log(Boolean(cc))//false

//6. false

let dd=false;
console.log(Boolean(dd))//false


/*

Give Me Examples of Truthy Value 
*/

//1.String With Space " "

let gg=" ";
console.log(Boolean(gg))//true



console.log(Boolean("0"));   // true
console.log(Boolean([]));    // true
console.log(Boolean({}));    // true
console.log(Boolean(-10));   // true
console.log(Boolean(5));//true



if ("") {
    console.log("yes");
}
else {
    console.log("no");
} //no



if (" "){
    console.log("yes");
}
else {
    console.log("no");
} // yes  


if ("0"){

    console.log("yes");
}
else {
    console.log("no");
}
// "yes" (string "0" is truthy)


if (-5){
    console.log("yes");
}
else {
    console.log("no");
} // yes  


if ([]){
    console.log("yes");
}
else {
    console.log("no");
}
//[] empty array truthy value yes


if ({}){
    console.log("yes");
}
else {
    console.log("no");
}  //{} truthy value yes


if (1){
    console.log("yes");
}
else {
    console.log("no");
} //1 trure yes


if (0){
    console.log("yes");
}
else {
    console.log("no");
}  //0 false no