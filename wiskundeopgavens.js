function berekenInhoud(lengte,hoogte,diepte){
    return lengte * hoogte * diepte;
}
let kubusInhoud = berekenInhoud(10, 7, 5);
console.log(kubusInhoud);

function berekenCilinderInhoud(diameter, hoogte) {
    const radius = diameter / 2;
    const pi = Math.PI;
    return Math.pow(radius, 2) * pi * hoogte;
}

let cilinderInhoud = berekenCilinderInhoud(10, 3);
console.log(cilinderInhoud); 
function berekenHypotenusa(lengte, hoogte) {
    return Math.sqrt(lengte*lengte + hoogte*hoogte);
}

let langeZijde = berekenHypotenusa(4, 3);
console.log(langeZijde);

function berekenGemiddelde(arg1, arg2,arg3,arg4,arg5,arg6,arg7) {
    let som = arg1 + arg2 + arg3 + arg4 + arg5 + arg6 + arg7;
    return som / 7;
}

let gemiddelde = berekenGemiddelde([20, 30, 40, 50, 60, 70, 80]);
console.log(gemiddelde)