let emp=[{
    "empid":1,
    "Age":23,
    "salary":23000
},
{
    "empid":4,
    "Age":24,
    "salary":24000
},
{
    "empid":2,
    "Age":26,
    "salary":67000
}

]



// let result=emp.map((x)=>{
//      x.salary= x.salary+(x.salary*0.05);
//     return emp;
// }
// );


let result1= emp.filter((x)=>{
       return x.Age>25
})

let res=emp.reduce( (total,x)=>{
     return total+x.salary;
  },0)
console.log(result);


