
    let toTop = document.querySelector('.toTop')
    let floatHeader=document.querySelector('.float-header')
    window.onscroll = function() {
        let height = document.documentElement.scrollTop
        if (height >= 200) {
            floatHeader.style.display = 'block'
            toTop.style.display = 'block'
        } else {
            floatHeader.style.display = 'none'
            toTop.style.display = 'none'

        }
    }

    toTop.onclick = function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }