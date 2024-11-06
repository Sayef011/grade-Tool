function calculate(){
    let a = parseInt(document.getElementById("sub1").value);
    let b = parseInt(document.getElementById("sub2").value);
    let c = parseInt(document.getElementById("sub3").value);
    let d = parseInt(document.getElementById("sub4").value);
    let e = parseInt(document.getElementById("sub5").value);

if(a>100, b>100, c>100 ,d>100 ,e>100){
    alert("please enter correct value");
}
else{
    let obtain = a+b+c+d+e;
    document.getElementById("obtain").innerHTML=obtain; 
    // return obtain;
    let percentage =obtain/500*100;
   document.getElementById("percentage").innerHTML=percentage;

   if(a>40 && b>40 && c>40 && d>40 && e>40){
    document.getElementById("remarks").innerHTML="<span style='color:green'>Pass</span>";
   }else{
    document.getElementById("remarks").innerHTML= "<span style='color:red'>Fail</span>";
   }
 

   if(percentage>=80){
    document.getElementById("grade").textContent="A+";
   }
   else if(percentage>=70){
     document.getElementById("grade").textContent="A";
   }

   else if(percentage>=60){
     document.getElementById("grade").textContent="A-";
   }

   else if(percentage>=50){
     document.getElementById("grade").textContent="B";
   }

     else if(percentage>=40){
     document.getElementById("grade").textContent="C";
   }
      else if(percentage>=33){
     document.getElementById("grade").textContent="D";
   }
   else{
     document.getElementById("grade").textContent="F";
   }
}

}

