let arr=[1,3,4,5,7]
let arr2=[2,3,3,5,6]

// *****UNION *****
let resArr=[]
var k=0
let arr3=arr.concat(arr2)
//console.log(arr)
for(let i=0;i<arr.length;i++){
    var flag=0;
    for(let j=0;j<resArr.length;j++){
        if(arr[i]==resArr[j]){
            flag=1
            break;
        }
    }
    if(flag==0){
        resArr[k]=arr[i];
        k++
    }
}

// ****** Union ******
let  res=[];
   let m=0;
   //let i,j;
   
   for(let i=0;i<arr3.length;i++){
    if(!res.includes(arr3[i])){
        //console.log("example")
        res[m++]=arr3[i];
    }
   }

console.log("Res Array", res.sort().toString())
console.log("resArr", resArr)
let res2=[]
let n=0;
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr2.length;j++){
        if(arr[i]==arr2[j]){
         res2[n++]=arr[i]
         break  
        }
    }
}

console.log(res2)