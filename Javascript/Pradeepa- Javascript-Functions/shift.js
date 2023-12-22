function arrShift(arr){
  let shiftEle=arr[0];

  for(let i=1;i<arr.length;i++){
        arr[i-1]=arr[i];
    
  }
   arr.length=arr.length-1;
  return shiftEle;
  
}
var arr=[7,9,2,5,12];
console.log(arrShift(arr));
console.log(arr);