let nimi = prompt("Sisestage oma nimi: ")
let lubatud = prompt("Sisesta suurim lubatud kiirus: ")
let tegelik = prompt("Sisesta enda tegelik kiirus: ")
let trahvEsialgne = (tegelik - lubatud) * 3
let trahvLoplik = Math.min(190, trahvEsialgne)



console.log(nimi + ", kiiruse yletamise eest on teie trahv " + String(trahvLoplik))

