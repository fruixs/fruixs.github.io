function menu(id) {
    let target = document.getElementById(id)
    if (getComputedStyle(target).display === 'none') {
        target.style.display = 'block'
        target.ariaHidden = false
        target.ariaExpanded = 'true'
    } else {
        target.style.display = 'none'
        target.ariaHidden = true
        target.ariaExpanded = 'false'
    }
}
document.querySelector("nav > ul > li:nth-child(1) > button").addEventListener('keyup', function (e) {
    if (e.key === 'ArrowDown') {
        console.log(this)
        this.nextElementSibling.children[0].children[0].focus()
    }
})

document.querySelector("nav > ul > li:nth-child(2) > button").addEventListener('keyup', function (e) {
    if (e.key === 'ArrowDown' && document.activeElement === this) {
        console.log(this)
        this.nextElementSibling.children[0].children[0].focus()
    }
})