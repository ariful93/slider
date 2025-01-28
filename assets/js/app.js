let nextBtn = document.querySelector('#next')
let prevBtn = document.querySelector('#prev')
let slider = document.querySelector('.sliders')
let sliderList = slider.querySelector('.sliders .list')
let sliderItems = document.querySelectorAll('.sliders .list .item')

nextBtn.addEventListener('click', () => {
    showSlider('next')
})

prevBtn.addEventListener('click', () => {
    showSlider('prev')
})

let autoNext = setInterval(() => {
    next.click()
}, 4000)

let showSlider = (direction) => {
    let sliderItem = document.querySelectorAll('.sliders .list .item')
    if (direction === 'next') {
        sliderList.appendChild(sliderItem[0])
    } else {
        sliderList.prepend(sliderItem[sliderItem.length -1])
    }

    clearInterval(autoNext)
    autoNext = setInterval(() => {
        next.click()
    }, 4000)

}