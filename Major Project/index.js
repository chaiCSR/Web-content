function register(){
    //connected
    var email=document.getElementById("email").value;
    var psw=document.getElementById("psw").value;
    var pswrepeat=document.getElementById("psw-repeat").value;
    // both the same
    if(psw!=pswrepeat){
        alert("password Missmatch");
    }
    else{
        firebase.auth().createUserWithEmailAndPassword(email,psw).then((success)=>
        {
           alert("signup successfully");
           window.location.href="login.html";
                        
        
        }).catch((error)=>
        {
            alert("something failed");            
         });        
    }
}

function login(){
    var username=document.getElementById("username").value;
    var psd=document.getElementById("psd").value;
    firebase.auth().signInWithEmailAndPassword(username,psd).then((success)=>
    {
       alert("login successfully");
       window.location.href="personal.html";
                    
    
    }).catch((error)=>
    {
        alert("Login failed");            
     });
}
