// node
const idAdvice = document.getElementById("id-advice");
const adviceContainer = document.getElementById("advice");
const btn = document.getElementById("button-dice");

const url = "https://api.adviceslip.com/advice";
async function callAdvice(){
    const res = await fetch(`${url}`);
    const data = await  res.json();
    const {advice, id } = data.slip;
    
    idAdvice.innerText = id;
    
    adviceContainer.innerText = advice;
}
window.addEventListener("load", () => {
    callAdvice();
});

btn.addEventListener("click", () => {
    callAdvice();

})