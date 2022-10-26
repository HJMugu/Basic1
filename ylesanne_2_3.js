let vanus = prompt("sisesta enda vanus: ")
let sugu = prompt("sisesta enda sugu(m v6i n): ")
let treeninguTyyp = prompt("sisesta enda treeningu tyyp(1, 2, 3): ")

let v2himPulss
let suurimPulss
let treeningPulssVaiksem
let treeningPullsSuurim

if(sugu == "n"){
    suurimPulss = 206 - ((vanus / 100) * 88)
} else {
    suurimPulss = 220 - vanus
}

if(treeninguTyyp == 1){
    treeningPulssVaiksem = ((suurimPulss / 100) * 50)
    treeningPullsSuurim = ((suurimPulss / 100) * 70)
} else if(treeninguTyyp == 2) {
    treeningPulssVaiksem = ((suurimPulss / 100) * 70)
    treeningPullsSuurim = ((suurimPulss / 100) * 80)
} else if(treeninguTyyp == 3) {
    treeningPulssVaiksem = ((suurimPulss / 100) * 80)
    treeningPullsSuurim = ((suurimPulss / 100) * 87)
}

console.log("Pulsisagedus peaks olema vahemikus " + treeningPulssVaiksem
    + " kuni " + treeningPullsSuurim)



