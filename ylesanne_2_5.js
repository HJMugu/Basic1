let suurus = prompt("sisesta kirja suurus(mb): ")
let pealkiri = prompt("sisesta kirja pealkiri: ")
let fail = prompt("kas kirjaga kaasas oli fail(jah v ei): ")
let tulemus = false

if(suurus > 1){
    tulemus = true
} else if(pealkiri == ""){
    tulemus = true
} else if(fail == "jah"){
    tulemus = true
}

if(tulemus == true){
    console.log("kiri on spam")
} else {
    console.log("kiri ei ole spam")
}
