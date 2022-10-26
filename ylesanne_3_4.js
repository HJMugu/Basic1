let poialpoisid = Number(prompt("sisesta poialpoista arv: "))
let algsedPoialpoisid = 1
let ounad
let ounadAlgsed = 14

while(algsedPoialpoisid <= poialpoisid){
    ounad = (Math.floor(Math.random()*2+1))
    ounadAlgsed = ounadAlgsed - ounad
    console.log(ounad)


    algsedPoialpoisid++
}


console.log("lumivalgukesele j2i " + ounadAlgsed)