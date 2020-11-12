
var seconds=2400;
  function secpassed(){
    var min=Math.round((seconds- 30)/60);
    var remsec=seconds % 60;
    if (min<10){
      min="0"+min;
    }
    if (remsec<10){
      remsec="0"+remsec;
    }

    document.getElementById("minute").innerHTML = min;
    document.getElementById("second").innerHTML=remsec;
    if (seconds == 0){
      clearInterval(countdownTimer);
      window.alert("TIME OUT");
    }
    else{
      seconds --;
    }
  }
  var countdownTimer=setInterval("secpassed()",1000);

function show_alert(){
  alert("Do you wish to submit your test");
}