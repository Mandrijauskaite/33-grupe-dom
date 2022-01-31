const pirmas = 7;
const antras = 5;

// function expresio - iprasta funkcijos forma / sintakse
function sudeti (a, b) {
    return a + b;
}
console.log(`${pirmas} + ${antras} = ${sudeti(pirmas, antras)} `);

// anonimine funkcija, priskirta kintamajam
const atimti =  function(a, b) {
    return a - b;
}
console.log(`${pirmas} ${antras} = ${atimti(pirmas, antras)}`);

//arrow function - rodykline funkcija
const padalinti =  (a, b) => {
    return a / b;
}
console.log(`${pirmas} / ${antras} = ${padalinti(pirmas, antras)} `);

// arrow functio -rodykline funkcija
// jei parametru bloke () yra tik 1 parametras, tai
// galima nerasyti ()
const kvadratu = a => a ** 2;
console.log(`${pirmas}^2 = ${kvadratu(pirmas)}`);
console.log(`${antras}^2 = ${kvadratu(antras)}`);

/*
Funkcijos:
1. masyvo ilgis (array length)
2. teksto ilgis
3. pirma teksto raide
4. paskutine teksto raide
5. vidurine teksto raide
6. triju skaiciu vidurkis
7. pasisveikinimo sakinys, kur duodamas tik vardas: "Sveiki, as esu [vardenis]!"
*/

console.log('1. -------------');
const skaiciai = [10, 2, 8];
console.log(skaiciai);

console.log('2. -------------');

console.log('3. -------------');

console.log('4. -------------');

console.log('5. -------------');


console.log('6. -------------');
const skaiciuSuma = skaiciai[0] + skaiciai[1] + skaiciai[2];
console.log(`Skaiciu suma: ${skaiciuSuma}`);
console.log(`Triju skaiciu vidurkis: ${skaiciuSuma / skaiciai.length}`);

console.log('7. -------------');
const asmuo = "Alina";
const pasisveikinimas = `Sveiki, as esu ${asmuo}!`;
console.log(pasisveikinimas);

function pasisveikinimas1(asmuo) {
    return `Sveiki, as esu ${asmuo}!`;
}
const labas = pasisveikinimas1(asmuo);
console.log(labas);
