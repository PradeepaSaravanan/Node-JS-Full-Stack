function arrPop(arr){
    let x=arr[arr.length-1];
    
    // console.log("Length:", len);
    // for(let i=0;i<arr.length;i++){
    //     arr[i]=arr[i+1]
    // }
     for(let i=1;i<arr.length;i++){
        arr[i-1]=arr[i];
     }
    arr.length=arr.length-1;
    
    return x;
}

var arr=[12,13,14,14,15];
console.log ( "Pop Element:",arrPop(arr));
console.log("Array:",arr)
