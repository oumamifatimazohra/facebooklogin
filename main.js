function formValidate(e) {
  var EmailNumPhon = document.getElementById("EmailNumPhon").value;
  var loginPass = document.getElementById("loginPass").value;
  var error = document.getElementById("error");
  var err = document.getElementById("err");
  var text ="";
  var txt ="";

 if(EmailNumPhon.length < 12 || EmailNumPhon === ""){
    if(loginPass<8 || loginPass === ""){
   text ="Please enter valid Email or Phone number!!!";
   error.innerHTML = text;
   txt ="Please enter valid Password!!!";
   err.innerHTML = txt;
   return false;
    }
   else if(loginPass>=8 || loginPass !== ""){
      text ="Please enter valid Email or Phone number!!";
      error.innerHTML = text;
      return false;
    }
 
  
   
 }

 else if(EmailNumPhon.indexOf("@") == -1  ){
   if(loginPass<8 || loginPass === ""){
     text ="Please enter valid Email and Password!!";
  error.innerHTML = text;
  return false;
   }else{

  text ="Please enter valid Email!!";
  error.innerHTML = text;
  return false;
   }
}

 else if(loginPass<8 || loginPass === ""){
   txt ="Please enter valid Password!!";
   error.innerHTML = txt;
   return false;
 }

 else{
  return true;
 }




e.preventDefault();







}
