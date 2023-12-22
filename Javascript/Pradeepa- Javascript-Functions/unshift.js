function arrUnshift(arr){
 for(let i=arr.length;i>=0;i--){
    if(i==0){
        arr[i]=8;
    }
    else{
    arr[i]=arr[i-1];
    }
  
 }
 return arr.length;
}
let arr=[1,2,3,4,5];

console.log(arrUnshift(arr));
console.log(arr);
