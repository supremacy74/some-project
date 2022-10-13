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
