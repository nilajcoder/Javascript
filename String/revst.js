
/*

Wap in Js 
Reverse String 
*/

function revstr(st){

    let reversestr=""

    for(let j=st.length-1;j>=0;j--){
        
        reversestr+=st[j]

    }

  return reversestr;
}

console.log(revstr("Hello"))



let str="Nilaj"
let rev =""

for(let i=str.length-1;i>=0;i--){
     rev+=str[i]
}

console.log(rev)