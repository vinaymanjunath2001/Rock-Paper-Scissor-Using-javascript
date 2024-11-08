let userscore=0;
let compscore=0;
const res =document.querySelector("#msg");
const cntusr =document.querySelector("#uscore");
const cntcmp =document.querySelector("#cscore");



const choices =document.querySelectorAll(".choice");
result=((n,m)=>{

    console.log("n is :",n);
    console.log("m is :",m);
    if(n ===m){
        console.log("****Draw****");
        res.innerText="*****DRAW*****";
    }else if(n==="paper" && m==="rock"||n==="rock" && m==="scissor"||n==="scissor" && m==="paper"){
        userscore++;
        console.log("***you won***");
        msg.style.backgroundColor="Green";
        res.innerText=`*YOU WON!* Your "${n}" beat the "${m}"`
        cntusr.innerText=`${userscore}`;
    }else {console.log("computer won");
        compscore++;
        msg.style.backgroundColor="red";
        res.innerText=`*YOU LOST!!!!* "${m}" beat your "${n}"`;
        cntcmp.innerText=`${compscore}`;
    }
});

const compchoice=(n)=>{
    let choices =["rock","paper","scissor"];
   const cmpchoice= Math.floor(Math.random()*3);
   const m =choices[cmpchoice];
    console.log("cmp choice is",choices[cmpchoice]);

    result(n,m);
}

const playGame=(choice) =>{
console.log("user choice = ",choice);
compchoice(choice);

};


choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click", () =>{
        const choiceId =choice.getAttribute("id");
        console.log(choiceId,"was clicked");
        playGame(choiceId);

    })
})
// const user=document.getElementById("#userscore");
// user.innertext(userscore);
// const computer=document.getAttribute("#cmpscore");
// computer.innertext(compscore);
// let msg = document.querySelector("#uscore");
//     msg.innerText = `${userscore}`;