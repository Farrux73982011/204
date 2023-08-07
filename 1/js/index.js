let colorBtns1 = document.querySelectorAll('.buttons')
let img = document.querySelector('.imgs_iph')
let span_color = document.querySelector('.span_color')
let iph_js = document.querySelectorAll('.iph_js')
let iph_js2 = document.querySelectorAll('.iph_js2')


let pictures1 = {
    violet:'./img/violet_iphone.png',
    gold:'./img/gold_iphone.png',
    silver: './img/white_iphone.png',
    black: './img/spaseblack_iphone.png'
}

let texts = {
    violet:' - violet',
    gold:' - gold',
    silver: ' - silver',
    black: ' - black'
}

colorBtns1.forEach((btn) => {
    btn.onclick = () => {
        let key = btn.getAttribute('data-color')

        colorBtns1.forEach(el => el.classList.remove('active2'))
        btn.classList.add('active2')

        img.src = pictures1[key]
        
    }
    btn.onmousecenter = () => {
        span_color.innerHTML = texts[key]
    }
})
iph_js.forEach((btn) => {
    btn.onclick = () => {
        iph_js.forEach(el => el.classList.remove('active3'))
        btn.classList.add('active3')
    }
})
iph_js2.forEach((btn) => {
    btn.onclick = () => {
        iph_js2.forEach(el => el.classList.remove('active3'))
        btn.classList.add('active3')

    }
})

iph_js2.forEach((btn) => {
    btn.onclick = () => {
        img.src = './img/iphons.png'
    }
})