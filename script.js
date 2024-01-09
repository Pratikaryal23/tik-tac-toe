let btns=document.querySelectorAll(".btn");
let resets=document.querySelector(".reset");
let Messagecontainer=document.querySelector("#msge-container");
let newBtns=document.querySelector(".newbtn");
let msg=document.querySelector("#msge")
let turno=true;
// console.log(typeof btns);
// console.log(typeof resets);
const winningpattern=[[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
];
btns.forEach((btn) => {
    btn.addEventListener("click",()=>{
        // btn.innerText="abcd";
        if(turno){
            btn.innerText="o"
            turno=false;
        }
        else{
            btn.innerText="X"
            turno= true;
        }
        btn.disabled=true;
        winner();
    });
});

const winner=()=> {
    for(let pattern of winningpattern){
        console.log(pattern)
        let pos1val=btns[pattern[0]].innerText;
        let pos2val=btns[pattern[1]].innerText;
        let pos3val=btns[pattern[2]].innerText;
        if(pos1val!=""&& pos2val!="" && pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log("winner is",pos1val);
                showwinner(pos1val);
                
              

            }
          
        }

    }
   
}
const showwinner=(winner)=>{
msg.innerText=` congratulations ! winner is ${winner}`;
Messagecontainer.style.display='block';
disablebox();

}
const resetbtn=()=>{
    // turno=true;
    enablebox();
    Messagecontainer.style.display="none"; 
    

}

const enablebox=()=>{
    turno="true";
    for(let btn of btns){
btn.innerText="";
btn.di="false";
    }
}

const disablebox=()=>{
    turno="true";
    for(let btn of btns)
btn.disabled="true";
}
resets.addEventListener("click",resetbtn);
newBtns.addEventListener("click",resetbtn);
