function greet(a,b,c){
  //sum ab
  var sum = parseInt(a, 10);
  var suma = (sum/59) * 60;

  var sumb = parseInt(b, 10);
  var asrb = (sumb/59) * 60;
  
  //contain.textContent = "The result is"+""+ sum;
  //sum c
  var sumc = parseInt(c, 10);
  var asrc = (sumc/55) * 60;
  const total_num = Math.trunc(suma) + Math.trunc(asrb) + Math.trunc(asrc);
  //document.getElementById("contain").innerText = "Your's total mark is"+ " "+ total_num+".";
  //alert(sum);
  //document.write(sum);
  //document.write("hello"+firstname+""+secondname);
  if(isNaN(total_num)){
    document.querySelector("#contain").textContent = "The result is none."
  } else {
    document.querySelector("#contain").textContent = "Your's total mark is"+ " "+ total_num+".";
  }
}
function isInputNumber(e) {
  var x = e.which || e.keycode;
  if((x >= 48 && x <= 57))
    return true;
  else
    return false;
}
