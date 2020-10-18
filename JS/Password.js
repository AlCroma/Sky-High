function myFunction() 
 {
 	var uname= document.forms[0].ip1.value;
 	var pwd= document.forms[0].ip2.value;
  	if(uname=="skyhigh@gmail.com" && pwd=="SKYHIGH")
 	 {
 	 	return true;
 	 }
 	else
 	 {
 	 	alert("Please Check The Username And Password Once Again");
 	 	return false;
 	 }
 }