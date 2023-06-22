let music=new Audio("fal.mp3");
let audioTurn=new Audio("ting.mp3");
let gameover=new Audio("gameover.mp3");
let isgameover=false;


let turn="X";

const changeTurn = ()=>{

return turn==="X"? "0": "X";

}


const checkWin = ()=>{

let boxtext=document.getElementsByClassName('boxText');

let wins=[

   [0,1,2,5,5,0],
   [3,4,5,5,15,0],
   [6,7,8,5,25,0],
   [0,3,6,-5,15,90],
   [1,4,7,5,15,90],
   [2,5,8,15,15,90],
   [0,4,8,5,15,45],
   [2,4,6,5,15,135],

]


wins.forEach(e => {

if((boxtext[e[0]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[1]].innerText===boxtext[e[2]].innerText)&&(boxtext[e[0]].innerText!=="")){

document.querySelector('.Info').innerText=boxtext[e[0]].innerText+" won";
isgameover=true;
music.play();
document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="200px";
document.querySelector('.line').style.width="20vw";
document.querySelector('.line').style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`


}


})







}


let boxes=document.getElementsByClassName("box");

Array.from(boxes).forEach(element =>{

let boxtext=element.querySelector('.boxText');
element.addEventListener('click',()=>{

if(boxtext.innerText===''){

boxtext.innerText=turn;
turn=changeTurn();

audioTurn.play();



checkWin();
if(!isgameover){
document.getElementsByClassName("Info")[0].innerText="Turn for " + turn;
}




}

})






})

let res=document.getElementById('reset');
res.addEventListener('click',()=>{
let boxtext=document.querySelectorAll('.boxText');
Array.from(boxtext).forEach(e=> {

e.innerText="";

});

turn="X";
isgameover=false;
music.pause();

document.querySelector('.line').style.width="0vw";
document.getElementsByClassName("Info")[0].innerText="Turn for " + turn;
document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px";




})
