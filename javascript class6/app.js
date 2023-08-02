var player1 = {
    name : "shoaib",
    total: 0,
}
var player2 = {
    name : "siddiqui",
    total:0,
}


var turnofplayer = "player1";
function rolladice(){
    var rolldice = Math.round(Math.random()*6);
    // document.getElementById("cuurent1").innerHTML = rolldice
    if(rolldice == 0 && turnofplayer == "player1"){
      turnofplayer = "player2"
    }else if(rolldice == 0 && turnofplayer == "player2"){
        turnofplayer = "player1"
    }

    if(turnofplayer == "player1"){
document.getElementById("cuurent1").innerHTML = rolldice
player1.total = player1.total + rolldice;
document.getElementById("total1").innerHTML = player1.total;
}else{
    document.getElementById("cuurent2").innerHTML = rolldice
player2.total = player2.total + rolldice;
document.getElementById("total2").innerHTML = player2.total  ;
}
}


