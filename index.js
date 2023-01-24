function randomNumberGenerator(range){
    var num = Math.random();
    num=Math.floor(num*range)+1;
    return num;
}
//alert("hello");
var player1DiceNumber=randomNumberGenerator(6);
var player2DiceNumber=randomNumberGenerator(6);
var img1Obj=document.querySelector(".img1");
var img2Obj=document.querySelector(".img2");
var img1Src="images/dice"+ player1DiceNumber+".png";
var img2Src="images/dice"+ player2DiceNumber+".png";
img1Obj.setAttribute("src",img1Src);
img2Obj.setAttribute("src",img2Src);
var headingObj=document.querySelector("h1");
if(player1DiceNumber==player2DiceNumber)
    headingObj.innerHTML="Draw!";
else if(player1DiceNumber>player2DiceNumber)
    headingObj.innerHTML="🚩Player 1 Wins!";
else
    headingObj.innerHTML="Player 2 Wins!🚩";
