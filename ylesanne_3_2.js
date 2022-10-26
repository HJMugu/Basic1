let ringideArv = Number(prompt("sisesta joostud ringide arv: "))
let porgandid = 0
let ring= 1

while(ring <= ringideArv){
    console.log(`${ring}. ring`)

    if(ring % 2 == 0){
        porgandid = porgandid + ring
    }


    ring++


}
console.log("said porgandeid kokku " + porgandid)