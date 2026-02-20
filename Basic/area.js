
/*
Write a Function Area of Circle
*/

function areacircle(r){

    if(r>0){
        let area=3.14285714286*r*r
         return area
    }

   
}
console.log("Area Of a Circle =",areacircle(5))


/*
Area of Rectangle
*/
function arearectangle(l,b){

    return l*b
}

console.log("Area Of rectangle =",arearectangle(5,4))

/*
Area of a Traingle

*/
function areatraingle(h,b){

    return 0.5*h*b
}
console.log("Area of Traingle = ",areatraingle(5,8))