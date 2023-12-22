function arrJoin(arr){
    let str="";
    for(let i=0;i<arr.length;i++){
        str+=arr[i];
    }
    return str;
}

var arr=["banana",2 , 4,"apple"];
console.log(arrJoin(arr));