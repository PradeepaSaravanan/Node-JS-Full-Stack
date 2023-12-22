function arrConcat(){
    var arr=[1,2,3,4];
    var arr2=[5,6,7,8];
    var arr3=[];
    let j=0;
    for(let i=0;i<arr.length;i++){
        arr3[j++]=arr[i]
    }
    for(let i=0;i<arr2.length;i++){
        arr3[j++]=arr2[i]
    }
     return arr3
}
 console.log(arrConcat());