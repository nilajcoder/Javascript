

/*

There three type of alertbox in js
* alert
* confirm
*prompt
*/


/*
How to Convert Object into array
*/

let obj={

    a:1,
    b:2,
    c:3
}

let val=Object.values(obj)
console.log(val)


/*

We Have List Of Employee
List Contains Name ,age, designation,salary
Calculate D.A 10% of Salary
and total salary=da+salary
*/

let empobj=[

    {
    name: "Nilaj",
    age:25,
    designation:"Developer",
    salary:40000

  },

  {
    name:"Debobroto",
    age:40,
    designation:"Manager",
    salary:100000
  }


]

console.log(obj.name)//undefined
for(let i=0;i<empobj.length;i++){
    console.log(empobj[i].name)
    console.log(empobj[i].age)
    console.log(empobj[i].designation)

empobj[i].da=empobj[i].salary*0.10;
empobj[i].totalsalary=empobj[i].salary+empobj[i].da;
}

console.log(empobj)

