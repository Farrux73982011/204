let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let reset = document.querySelector(".reset");
let h1 = document.querySelector(".num");
let number = 0


reset.addEventListener('click', () =>{
    number = 0
    h1.innerHTML = number
})

plus.onclick = () => {
    if(h1.innerHTML < 10) {
        h1.innerHTML++

    }
}

minus.onclick = () =>{
    if(h1.innerHTML > -10){
        h1.innerHTML--
    }
}