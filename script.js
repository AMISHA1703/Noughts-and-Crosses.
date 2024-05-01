let cells=document.querySelectorAll(".box");//targets each cells 
let turn1=true; //turn1 0r turn0
const winningPositions=[
    [0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]
]
  let colortext=document.querySelector(".box");
// The forEach() method calls a function for each element in an array.
cells.forEach((box)=>
 box.addEventListener("click",()=>{
    
    if(turn1){
        box.style.color="Green";
        box.innerText="1";
        turn1=false;
    }
    else{
        box.innerText="0";
        turn1=true;
    }
       box.disabled=true;
 })
)

let resetbtn=document.querySelector(".resetbtn");
resetbtn.addEventListener("click",()=>{
    cells.forEach(())
})
