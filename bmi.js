function calcBmi() {

  let a = document.getElementById("bmivalue").innerHTML;
 document.getElementById("button").style.visibility="hidden";
if(a==NaN  || a==0){
  document.getElementById("bmivalue").style.display="";
  document.getElementById("result").innerHTML=" ";
  
}
  else if (a < 18.5) {
  
   document.getElementById("result").innerHTML="Under Weight"
   document.getElementById("result").style.color="yellow";
   document.getElementById("div1").style.display="";
   document.getElementById("bmivalue").style.display="";
  }
  else if (a > 18.5 && a < 24.9) {
   
    document.getElementById("result").innerHTML="Normal Weight"
    document.getElementById("result").style.color="green";
    document.getElementById("div1").style.display="";
    document.getElementById("bmivalue").style.display="";
  }
  else if (a > 25 && a < 29.9) {
    document.getElementById("div1").style.display="";
   document.getElementById("result").innerHTML="Over Weight"
   document.getElementById("result").style.color="orange";
   document.getElementById("bmivalue").style.display="";
  }
  else if (a >= 30) {
    document.getElementById("div1").style.display="";
   document.getElementById("result").innerHTML="Obesity"
   document.getElementById("result").style.color="red";
   document.getElementById("bmivalue").style.display="";
   
  }
}
function loadBody() {
  document.getElementById("bmivalue").innerHTML = " ";
  document.getElementById("div1").style.display="none";

 
}
