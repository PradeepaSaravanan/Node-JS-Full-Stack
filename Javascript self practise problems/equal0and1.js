//var arr=[1,0,0,1,0,1,1]
var arr=[1,0,0,1,1, 0, 0, 1]
let n=arr.length;
for(let i=0;i<n;i++){
    if(arr[i]==0){
        arr[i]=-1;
    }
}
//   1, -1, -1, 1,-1,  1,  1
//console.log(arr)
let count=0;                                
for(let i=0;i<n-1;i++){
    let sum=arr[i];     1
    //let sum=0    
    for(let j=i+1;j<n;j++){
       sum+=arr[j];    //-1+1  =0
      // console.log(sum,i,j,count)
       if(sum==0 && (j-i+1)%2==0)
       {
        count++
       }
    }
}
console.log(count);