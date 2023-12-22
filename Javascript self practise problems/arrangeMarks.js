let arr=[23,89,23,45,89,34];
let n=arr.length;
let j=0;
let k=n-1;

let arr2=[];
for(let i=0;i<n;i++){
  if(arr[i]<74){
    arr2[j++]=arr[i];
  }
  else{
    arr2[k--]=arr[i];
  }
}
console.log(arr2);