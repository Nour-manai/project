function validateForm(event) {
    event.preventDefault()
    var name = document.rendezVous.name.value
    var type_compteur=document.rendezVous.type_compteur.value
    var calibre =document.rendezVous.calibre.value
    var number = document.rendezVous.compteur.value
    var tel=document.rendezVous.tel.value
    var date=document.rendezVous.date.value
   if (name.length==0)
    return alert(`Vous devez remplir la case`)
    if (type_compteur.length==0)
    return alert(`Vous devez remplir la case`)
    if (calibre.length==0)
    return alert(`Vous devez remplir la case`)
    if (number.length==0)
    return alert(`Vous devez remplir la case`)
    if (tel.length==0)
    return alert(`Vous devez remplir la case`)
   if (number>5)
    return alert(`Vous devez prendre plusieurs rendez-vous`)
    if (tel.length>8)
    return alert(`Le numero n'est pas valide`)
    if (date=="")
    return alert(`Enter une date`)

   }
   

  

