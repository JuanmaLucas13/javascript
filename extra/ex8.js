const ship1 = {name: "Banca rota", damage: 44, pv: 150};
let ship2 = {name: "Cacique pero no", damage: 66, pv: 124};

var attack = (barco1, barco2) => {

    let dolor = Math.random(barco1.damage).toFixed(0);
    console.log(dolor);
    barco2.pv = barco2.pv - dolor;

    //return barco2;
}

attack(ship1, ship2);

console.log(ship1, ship2);
