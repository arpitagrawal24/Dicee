var randomNumber1 = Math.floor(Math.random()*6 ) + 1;
var randomNumber2 = Math.floor(Math.random()*6 ) + 1;

var image1 = "images/dice" + randomNumber1 + ".png" ;
var image2 = "images/dice" + randomNumber2 + ".png" ;

var img1 = document.querySelectorAll("img")[0];
var img2 = document.querySelectorAll("img")[1];

img1.setAttribute("src",image1);
img2.setAttribute("src",image2);
// alert("vi");
if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML = "1st wins";
}
else if(randomNumber2 > randomNumber1)
{
    document.querySelector("h1").innerHTML = "2nd wins";
}
else
{
    document.querySelector("h1").innerHTML = "Draw";
}