let display=document.querySelector(".display");
let screen=document.querySelector(".screen");
let ply1;
let ply2;
let buttons=document.querySelectorAll(".btn");
let point1=document.querySelector("#point1");
let point2=document.querySelector("#point2");
let para=document.querySelector("#para");
let reset=document.querySelector("#reset");

const btrDisable=()=>{
    buttons.forEach(btn=> btn.disabled=true);
}
const btrEnable=()=>{
    buttons.forEach(btn=>{
        btn.disabled=false;
    } );}

buttons.forEach(btn=>{
    btn.addEventListener("click",()=>{
        ply1=btn.id;
        ply2="btn"+Math.floor(Math.random()*3+1);
        console.log(ply1);
        console.log(ply2);
        printImag(ply1,display);
        printImag(ply2,screen);
        btrDisable();
        checkwinner(ply1,ply2);
        result(ply1,ply2);
        setTimeout(() => {
            display.style.backgroundImage="url('gif.gif')";
            display.style.backgroundSize="cover";
            screen.style.backgroundImage="url('gif.gif')";
            screen.style.backgroundSize="cover";
            btrEnable();
            if(point1.innerText==3||point2.innerText==3){
                btrDisable();
            }
            
                     
        }, 1500);
        
    })
})

function printImag(ply,obj){
if(ply=="btn1"){
    obj.style.backgroundImage="url('stone.png')";
    obj.style.backgroundSize="cover";
}
if(ply=="btn2"){
    obj.style.backgroundImage="url('paper.png')";
    obj.style.backgroundSize="cover";
}
if(ply=="btn3"){
    obj.style.backgroundImage="url('scissors.png')";
    obj.style.backgroundSize="cover"; 
}
}

function checkwinner(ply1,ply2){
    if((ply1=="btn1" && ply2=="btn2")||(ply1=="btn2" &&ply2=="btn3" )||(ply1=="btn3" &&ply2=="btn1"  )){
        point2.innerText=Number(point2.innerText)+1;
        
    }
    if((ply2=="btn1" && ply1=="btn2")||(ply2=="btn2" &&ply1=="btn3" )||(ply2=="btn3" &&ply1=="btn1"  )){
        point1.innerText=Number(point1.innerText)+1;
        
    }
    result(point1.innerText,point2.innerText);
}
function result(ply1,ply2){
    if(ply1==3){
        para.innerText="Congratution! You won the game";
        reset.innerText="New Game";
    }
    if(ply2==3){
        para.innerText="Game Over! You lose";
        reset.innerText="New Game";
    }
    
}

reset.addEventListener("click",()=>{
    point1.innerText="0";
    point2.innerText="0";
    para.innerText="";
    reset.innerText="Reset Game";
    btrEnable();
})





