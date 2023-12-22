var arr=[10,12,10,15,-1,7,6,5,4,2,1,1,1]
let count=0;
let x=11
for(let i=0;i<arr.length-1;i++){
    let j=i+1
    let sum=arr[i]
    while(j<arr.length)
    {
        sum+=arr[j]
        if(sum==x){
            count++;
            sum=sum-arr[j]
            j++
        }
        else{
            sum=sum-arr[j]
            j++
        }
    }
}
console.log(count)