const updatemsg=document.querySelector(".msg");
const red=document.querySelector(".red");
const green=document.querySelector(".green");
const blue=document.querySelector(".blue");
const yellow=document.querySelector(".yellow");
const startbtn=document.querySelector(".start");
const boxes=[red,green,blue,yellow];
let userlist=[],computerlist=[];
let level=1,Started=false;
document.addEventListener("keydown",function(event){
    if(event.code==="Space"&&!Started){
        Started=true;
        game();
    }
});
startbtn.addEventListener("click",function(){
    if(!Started){
        Started=true;
        game();
    }
});
function blink(x){
    let tochange=boxes[x];
    let initcolor=tochange.classList[1];
    tochange.style.backgroundColor="#fff";
    setTimeout(()=>{tochange.style.backgroundColor=initcolor;},500);
}
function game(){
    userlist=[];
    computerlist=[];
    level=1;
    nextlevel();
}
function nextlevel(){
    userlist=[];
    updatemsg.textContent=`Level-${level}|Score:${getscore()}`;
    let val=Math.floor(Math.random()*4);
    computerlist.push(boxes[val].classList[1]);
            setTimeout(()=>blink(val),1000);
            userturn();
}
function userturn(){
    updatemsg.textContent="YOUR TURN!";
    userlist=[];
    boxes.forEach(box=>{
        box.addEventListener("click",userclick);
    });
}
function userclick(e){
    let choosen=e.target.classList[1];
    userlist.push(choosen);
    let x=userlist.length-1;
    if(userlist[x]!=computerlist[x]){
        updatemsg.textContent="YOU LOST!";
        resetgame();return;
    }if(userlist.length==computerlist.length){
        updatemsg.textContent=`Congratulations!Keep going|Your Score:${getscore()}`;
        setTimeout(()=>{
            level++;
            nextlevel();
        },1250);}
}
function resetgame(){
    Started=false;
    setTimeout(()=>{
        updatemsg.textContent="Press start button or space to start the game";
    },2000);
}
function getscore(){
    return(level)*10;
}
