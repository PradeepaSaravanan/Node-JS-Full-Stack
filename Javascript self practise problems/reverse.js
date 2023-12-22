let arr=[1,2,3,4,5];
let i=0;
let j=arr.length-1;
let k= Math.floor((i+j)/2);
while(i<=k){
    let temp;
    temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
    i++;
    j--;
}
console.log(arr)