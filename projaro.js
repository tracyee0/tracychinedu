var x
var y="my name is Tracy"
var num = 0
var bool = true
var obj ={key:"value"}
var arr =[1, "Tracy", true,{key:"value2"},"the answer","the last value"]
//how to add to an array
//arr.push("policeman")
//converting string to object
var uneditedObj = '{"address":"Abuja nigeria"}'
var editedObj = JSON.parse(uneditedObj)
console.log(editedObj["address"])






//converting object to string 
arr[1]="Onyinye"
obj["key"] = "new value"

var strObj =JSON.stringify(obj)
console.log(strObj)


// increament num++
// to find the length of an array
//console.log(arr.length)

/*
LOOPS
We write loops to iterate through arrays
*/
var index = 0
for(index; index<arr.length; index++){
    if(arr[index]=="the answer"){
    console.log(index)
}else{
    console.log(arr[index] + "is not the answer")
}
}
//  if (num == 18){
//         console.log("correct number!")
//  } else if (num == 16){
//     console.log("still the correct number!")
// }
// else if (num == 0){
//     console.log("this number is zero")
// }
// else{
//     console.log("The number is not correct")
// }
