let inimesed = 100
let kohad = 23
let bussideArv = Math.floor(inimesed / kohad)
let inimesedYlejaanud = inimesed % kohad
let inimesedBussides = (inimesed - inimesedYlejaanud)



console.log(inimesed + " inimeste s6idutamiseks l2heb vaja " + bussideArv
    + " bussi" )

if(inimesedYlejaanud != 0) {
    console.log("ja " + inimesedYlejaanud + " inimest on maha j22nud")
} else {
    console.log("ja bussist ei j22nud maha mitte kedagi")
}

// == != < > >= <= v6rdusoperaatorid, tulemus true v false(boolean)
/*
if(tingimus) {
    tegevused, mis sooritadakse kui vastus
    tingimusele on true
}


*/

