const symbols = document.querySelectorAll('.examples__block span')

document.querySelectorAll('.examples__block').forEach((item, index) => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.examples__text').forEach((text, textIndex) => {
            if (index === textIndex) {
                text.classList.toggle('visible')
                symbols[index].innerHTML === '+' ? symbols[index].innerHTML = '-' : symbols[index].innerHTML = '+'
            }
        })
    })
})

const next = document.querySelector('.next')
const prev = document.querySelector('.prev')

let scroll = 0

const wrapper = document.querySelector('.description__wrapper')

next.addEventListener('click', () => {
    scroll < 200 ? scroll += 100 : 0
    wrapper.style.transform = `translateX(-${scroll}vw)`
})

prev.addEventListener('click', () => {
    scroll > 0 ? scroll -= 100 : 200
    wrapper.style.transform = `translateX(-${scroll}vw)`
})