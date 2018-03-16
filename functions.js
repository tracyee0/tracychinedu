var Colors = ["red","yellow","indigo","blue","orange","green","violet"]
// }function add(num1,num2){
//     alert(num1+num2)
function multiply(num1,num2){
    alert(num1*num2)
}
function showMe (message ,message2){
    alert(message)
    console.log("message2")
}


function biggerNumber (num1,num2){
    var number 
    if(num1>num2){
        number=num1
    }else{
        number=num2
    }
    alert("the bigger number is " + number )
}
function even(num){
var doc= document.getElementById('my_number');
var num=doc.value;

if(isNaN (num)){
    document.getElementById("the_answer").innerHTML="please enter a number.other than character"
    return
}

if(num == null|| num=="" ){
    document.getElementById("the_answer").innerHTML ="Please enter a valid number";
    return
}
if(num<1){
    document.getElementById("the_answer").innerHTML="Number must not be less than 1";
    return
}

if(num%2==0){
    document.getElementById("the_answer").innerHTML ="The number is even"
} else{
    document.getElementById("the_answer").innerHTML ="The number is odd"
}
var currentColor = 0
setInterval(()=>{
    console.log("Something")
    currentColor++
    document.getElementById("the_body").style.backgroundColor= Colors[currentColor]
}, 5000)

}

// function clickMe(){
//     alert("my name is Tracy")
// }
//  vfunction showMe(message,message2="This is the default value")
//     alert(message)
//     console.log(message2)
//}
// showMe("This is my message","show in console")

// function myName(){
//     alert("what is your name?")
// }
// myName()

// function Intro(name){
//     alert("welcome "+ name)
// }
// Intro("tracy") 

// confirm("Are you sure you want to continue")