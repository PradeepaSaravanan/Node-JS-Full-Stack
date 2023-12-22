var arr=[12,4,13,5,8,1,4]

let n=arr.length;
function swap(arr,i,j){
    let temp;
    temp=arr[i]
    arr[i]=arr[j]
    arr[j]=temp
}

for(let i=0;i<n-1;i++){
    let min=i
    for(let j=i+1;j<n;j++){
        if(arr[j]<arr[min]){
            min=j
        }
    }
    swap(arr,min,i)

}
console.log(arr)