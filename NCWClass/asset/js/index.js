function menu(id) {
    let target = document.getElementById(id)
    if(getComputedStyle(target).display === 'none') {
        target.style.display='block'
        target.ariaHidden=false
        target.ariaExpanded='true'
    } else {
        target.style.display='none'
        target.ariaHidden=true
        target.ariaExpanded='false'
    }
}