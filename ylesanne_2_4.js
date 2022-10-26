let valik = prompt("Kas valid ise v loosid(ise, loos): " )
let istekoht
let loos = Math.floor(Math.random() * (3 - 1 + 1) + 1)


if(valik == "ise"){
    istekoht = prompt("Vali istekoht(kas aken v6i muu): ")
    console.log("Valisite ise. " + istekoht)
} else {
    istekoht = loos
    if(loos == 1){
        istekoht = "Aknakoht"
    } else {
        istekoht = "Muu"
    }
    console.log("Istekoht loositi. " + istekoht)
}