 var my_password="tracy"
 var my_email="tracychinedu@gmail.com"


// function login( email,password ){
//     if(email=='my_email' && password=='my_password')
// alert("welcome")
//  }else{
//     alert("email or password incorrect")
//  }
function showField(field){ 
    if(field=="email"){
        document.getElementById('phone_div').style.visibility="hidden"
document.getElementById('email_div').style.visibility="visible"
    }else{
        if(field=="phone"){
            document.getElementById('email_div').style.visibility="hidden"
            document.getElementById('phone_div').style.visibility="visible"
    }
}


function welcome(email){
    alert("welcome!")
}
            
 function SignIn(){
     var email =document.getElementById('myEmail').value;
     var password =document.getElementById('myPassword').value;
     if(email== my_email && password== my_password){
         console.log("tracy")
welcome()
     }else{
         alert("incorrect email or password")
     
     }
    
    }
}