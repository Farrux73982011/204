let img2 = document.querySelector('.spase')
let dengi = document.querySelector('.dengi')
let b1 = document.querySelectorAll('[data-opi]')
let colorBtns2 = document.querySelectorAll('.buttonsss')
let color_mac = document.querySelector('.color_mac')

let pictures2 = {
    white: './img/mbp14-silver-select-202110 1.png',
    gray: './img/mbp14-spacegray-select-202110 1.png'
}
let txt = {
    white: 'White',
    gray: 'Space Grey'
}
let dengiobj = {
    gb512: 0,
    tb1: 200,
    tb2: 600,
    tb4: 1200
}

let orgPrice = 1999

b1.forEach(btn => {
    btn.onclick = () => {
        b1.forEach(el => el.classList.remove('active'))

        btn.classList.add('active')

        let key = btn.getAttribute('data-opi')
        dengi.innerHTML = orgPrice + dengiobj[key]
    }
})

colorBtns2.forEach((btn) => {
    btn.onclick = () => {
        colorBtns2.forEach(el => el.classList.remove('active4'))

        btn.classList.add('active4')

        let key = btn.getAttribute('data-col')
        img2.src = pictures2[key]
        color_mac.innerText = txt[key]
    }
})
