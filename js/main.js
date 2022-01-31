const titleDOM = document.querySelector('h1');
const section1DOM = document.querySelector('#darzoves');
const section2DOM = document.querySelector('#darzoves');
const listDOM = document.querySelector('ul');
const darzovesDOM = document.querySelectorAll('ul > li > span');

titleDOM.innerText = 'Zuikoi ūkis';

const darzoviuPavadinimai = [];
for (let i = 0; i < darzovesDOM.length; i++) {
    const darzovesDOM = darzovesDOM[i];
    darzoviuPavadinimai.push(darzovesDOM.innerText);
    darzovesDOM.innerText += ` (${darzovesDOM.innerText.length})`;
}
console.log(darzoviuPavadinimai);

const darzoviuSuvestine = `Suvestine: ${darzoviuPavadinimai.join(', ')}`;
console.log(darzoviuSuvestine);

console.log(section1DOM);
console.log(section2DOM);