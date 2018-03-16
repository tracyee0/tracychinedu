var arr = ["good", "bad","ugly",3,true,false,{"game":"God of war"},[4,5,6]]

var index=0
for(index ;index<arr.length; index++)
    {
        console.log(arr[index])
        if(arr[index] == false){
            break
        }
    }
    var index2 =0
     while(index2 < arr.length){
       console.log(arr[index2]);
        index2++
     }