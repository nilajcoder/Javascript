


/*

Print 1 to n
*/


console.log("1 to N")
function oneton(n){

    if(n==7){

        return
    }
    console.log(n)
    oneton(n+1)
}

oneton(1)


console.log("Reverse N to  1 ")

function ntoone(f){

    if(f==7){

        return
    }
     ntoone(f+1)
    console.log(f)
    
}

ntoone(1)

/*
dry run
--------

ntoone(1)
→ ntoone(2)
→ ntoone(3)
→ ntoone(4)
→ ntoone(5)
→ ntoone(6)
→ ntoone(7)  // base case → return

return from ntoone(7)

ntoone(6) → console.log(6)
ntoone(5) → console.log(5)
ntoone(4) → console.log(4)
ntoone(3) → console.log(3)
ntoone(2) → console.log(2)
ntoone(1) → console.log(1)


*/