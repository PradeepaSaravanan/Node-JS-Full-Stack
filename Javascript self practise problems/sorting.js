var arr=[12,5,23,4,1,7,3,8,0]

let n=arr.length;
let k=0
function swap(arr,i,j){
    var temp;

    temp=arr[i]

    arr[i]=arr[j]

    arr[j]=temp
}
for(k=0;k<n;k++)

{

    i=0

    for(j=1;j<n-k;j++)

    {

        if(arr[i]>arr[j])

        {

            swap(arr,i,j)

        }

        i++

    }

}
console.log(arr)