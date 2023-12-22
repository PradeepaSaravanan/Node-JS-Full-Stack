let arr=[2,4,6,8,1,2,3,5];
 const even= (ele)=>ele%2==0;

 console.log(arr.every(even));
 console.log(arr.filter(even));
 arr.forEach((ele)=>
 console.log("element",ele));


 const square= (ele)=>ele*ele;

 console.log("Square of array:",arr.map(square));
const sum= (accumulator,ele)=>accumulator+ele;
 console.log(arr.reduce(sum));

 console.log("Some",arr.some(even));