function arrIndexOf(arr,value){
    let x=-1;
     for(let i=0;i<arr.length;i++){
        if(arr[i]==value)
        {
            //console.log(i+1);
            x=i;
            break;
        }
     }
     return x;

}
var arr=[11,5,13,14,5,56]
specifiedValue=5;
console.log(arrIndexOf(arr,specifiedValue));
