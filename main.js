function generate_password(){
 otp = Math.floor(Math.random() * 1000000);
 document.getElementById("OTPassword").innerHTML = otp;
}