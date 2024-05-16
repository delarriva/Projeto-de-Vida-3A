const buttons = document.querySelectorAll(".botao");
let c = 0;

buttons.forEach((val, el) => {
    val.addEventListener("click", ()=>{
        buttons[c].id = "";
        c = el;
        buttons[c].id = "hover";
    })
});