
function merge(arr1,arr2){
    let res=[]
    let k=0;
    let i=0,j=0;
    let n1=arr1.length;
    let n2=arr2.length;
    while(i<n1 && j<n2){
        if(arr1[i]>arr2[j]){
            res[k++]=arr2[j++];
            
        }
        else{
            res[k]=arr1[i];
            k++;
            i++;
        }
    }

    while(i<n1){
        res[k++]=arr1[i++];
    }

    while(j<n2){
        res[k++]=arr2[j++];
    }

return res;

}
function divide(arr)

{
      if(arr.length<=1) return arr;
       let n=arr.length
      let mid= Math.ceil(n/2)
      let leftArr=divide(arr.slice(0,mid))
      let rightArrr=divide(arr.slice(mid,n))
    //   divide(leftArr)
    //   divide(rightArrr)
      return merge(leftArr, rightArrr)
   //   divide((arr,start,mid))
   //   divide(arr,mid+1,end)
      //merge(arr,start,mid,end)

}
var arr=[21,9,1,90,45,67,11,34,87,12]

console.log(divide(arr));
