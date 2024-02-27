import { betegObjektum } from "./objektum.js";
main();

function main(){
    feladat();
}

function feladat(){
    const betegAdatok = betegObjektum();
    let index = 0;
    // Nevekre
    while(index < betegAdatok.length){
        console.log(betegAdatok[index].nev);
        index++;
    }
    // Korokra
    index = 0;
    while (index < betegAdatok.length){
        console.log(betegAdatok[index].szulDatum);
        index++;
    }
}