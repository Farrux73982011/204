let colorBtns1 = document.querySelectorAll('.buttons')
let img = document.querySelector('.imgs_iph')
let span_color = document.querySelector('.span_color')
let iph_js = document.querySelectorAll('.iph_js')
let iph_js2 = document.querySelectorAll('.iph_js2')
let btns_modal = document.querySelectorAll('.btns_modal')
let span_customer = document.querySelector('.span_customer')
let img_modal = document.querySelector('img_modal')

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
    btn.onmouseenter = () => {
        let key = btn.getAttribute('data-color')
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

let open_modal = document.querySelector('.seall_deals')
let close_modal = document.querySelector('.modal_close')
let modal = document.querySelector('.modal')
let modal_bg = document.querySelector('.modal_bg')

open_modal.onclick = () => {
    modal.style.display = "block"
    modal_bg.style.display = "block"

    setTimeout(() => {
        modal.style.opacity = "1"
        modal_bg.style.opacity = "1"
    }, 100)

}
close_modal.onclick = () => {
    modal.style.opacity = "0"
    modal_bg.style.opacity = "0"
    
    setTimeout(() => {
        modal.style.display = "none"
        modal_bg.style.display = "none"
    }, 500)
}

let pictures2 = {
    at_and_t:'./img/at&t logo',
    t_mobile:'./img/Снимок экрана 2023-08-15 170504',
    verizon: './img/Снимок экрана 2023-08-15 171415',
}
let text2 = {
    at_and_t:'AT&T',
    t_mobile:'T-Mobile',
    verizon: 'Verizon',
}

btns_modal.forEach((btn) => {
    btn.onclick = () => {
        btns_modal.forEach(el => el.classList.remove('active5'))
        btn.classList.add('active5')

        let key1 = btn.getAttribute('data-btnmodal')
        span_customer.innerHTML = text2[key1]

        if (key1 === 'at_and_t') {
            img_modal.setAttribute(src, pictures2.at_and_t) 
        }else if (key1 === 't_mobile') {
            img_modal.setAttribute(src, pictures2.t_mobile)
        }else if (key1 === 'verizon') {
            img_modal.setAttribute(src, pictures2.verizon)
        }
    }
})
let modal_acc_btn1 = document.querySelectorAll('.modal_acc_btn1')
let modal_acc_btn2 = document.querySelectorAll('.modal_acc_btn2')
let contend_1_acc = document.querySelectorAll('.contend_1_acc')
let contend_2_acc = document.querySelectorAll('.contend_2_acc')
let strelka1 = document.querySelectorAll('.contend_2_acc')
let strelka2 = document.querySelectorAll('.contend_2_acc')

modal_acc_btn1.onclick = () => {
    contend_1_acc.style.display = 'none'
    
}

// document.querySelector('.accordion').forEach((strelka) => {
//     strelka.onclick = () => {
//         let content = strelka.nextElementSibling
//         console.log(content);
//     }
// })