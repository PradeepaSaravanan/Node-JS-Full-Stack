function findUnionAndIntersection(arr1, arr2) { //Don't change the number of parameters
    // Please write your code here
    //union
    let res = " ";
    var mergeArr = arr1.concat(arr2);
    let unionArr = [];
    var k = 0;
    for(i=0;i<mergeArr.length;i++){
        var pin = 0;
        for(j=0;j<mergeArr.length;j++){
            if(mergeArr[i]==unionArr[j]){
                pin = 1;
                break;
            }
        }
        if(pin==0){
            unionArr[k++] = mergeArr[i];
        }
    }

   // console.log("Union",unionArr)
    for(i=0;i<unionArr.length;i++){
        for(j=0;j<unionArr.length;j++){
            if(unionArr[i]<unionArr[j]){
                temp = unionArr[i];
                unionArr[i] = unionArr[j];
                unionArr[j] = temp;
            }
        }
    }
   /* let str = [];
    let m=0;
    for(i=0;i<unionArr.length;i++){
        str[m++] = unionArr[i];
    }*/

   // console.log(unionArr.toString())
  //  process.stdout.write("Union: "+str);

    //Intersection
    var interArr=[];
    var x=0;
    for(i=0;i<arr1.length;i++){
        for(j=0;j<arr2.length;j++){
            if(arr1[i]==arr2[j] && arr[j]!=0){
               interArr[x++] = arr1[i];
               arr[j=0]
               break;
            }
        }
    }
   /* let str1 = [];
    let n =0;
    for(i=0;i<interArr.length;i++){
        str1[n++] = interArr[i];
    }*/
   // console.log("Inter",interArr)
    //process.stdout.write( "Intersection: " + str1);
    return "Union: "+ unionArr.toString()+"\n"+ "Intersection: "+ interArr.toString();
}

arr=[1,23,3,22,4]
arr2=[1,24,6,7,4]
console.log(findUnionAndIntersection(arr,arr2))

 

//Please don't modify the below code

 

