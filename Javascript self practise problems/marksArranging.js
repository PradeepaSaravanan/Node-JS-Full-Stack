let arr=[74,98,74,86,100,98,74];
let n=arr.length;
 
 for(let i=1;i<n;i++){
    let temp=arr[i]
    let j=i-1

    while(arr[j]>temp && j>=0){
     a[j+1]=a[j]
     j--
    }
    a[j+1]=temp
 }

    

console.log(arr);