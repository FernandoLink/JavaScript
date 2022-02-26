function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'images/manha.jpg'
        document.body.style.background = '#d29b3e'
    } else if (hora >= 12 && hora <= 18){
        img.src = 'images/tarde.jpg'
        document.body.style.background = '#cd8754'
    } else {
        img.src = 'images/noite.jpg'
        document.body.style.background = '#612762'
    }

}