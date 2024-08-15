var n=Math.floor(Math.random()*6);
if(n===0){document.querySelector(".img1").setAttribute("src","./images/dice1.png");}
else if(n===1){document.querySelector(".img1").setAttribute("src","./images/dice2.png");}
else if(n===2){document.querySelector(".img1").setAttribute("src","./images/dice3.png");}
else if(n===3){document.querySelector(".img1").setAttribute("src","./images/dice4.png");}
else if(n===4){document.querySelector(".img1").setAttribute("src","./images/dice5.png");}
else{document.querySelector(".img1").setAttribute("src","./images/dice6.png");}
var o=Math.floor(Math.random()*5);
if(o===0){document.querySelector(".img2").setAttribute("src","./images/dice1.png");}
else if(o===1){document.querySelector(".img2").setAttribute("src","./images/dice2.png");}
else if(o===2){document.querySelector(".img2").setAttribute("src","./images/dice3.png");}
else if(o===3){document.querySelector(".img2").setAttribute("src","./images/dice4.png");}
else if(o===4){document.querySelector(".img2").setAttribute("src","./images/dice5.png");}
else{document.querySelector(".img2").setAttribute("src","./images/dice6.png");}
if(o<n){document.querySelector("h1").innerHTML="Player 1 Wins";}
else if(n<o){document.querySelector("h1").innerHTML="Player 2 Wins";}
else{document.querySelector("h1").innerHTML="It's a tie";}