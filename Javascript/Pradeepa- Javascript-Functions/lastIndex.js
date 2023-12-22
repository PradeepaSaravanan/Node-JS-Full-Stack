function arrLastIndexOf(arr, val){
    var x=-1;
    for(let i=0;i<arr.length;i++){
       if(arr[i]== val){
        x=i
       }
    }
    return x;
}

var arr=[23,45,23,12,6,23];
var value=20;
console.log(arrLastIndexOf(arr,value));