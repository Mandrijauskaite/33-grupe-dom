const titleDOM = document.querySelector('h1');
const titleDOM = document.querySelector('ul');
const darzovesDOM = document.querySelectorAll('ul > li > span');

const title = titleDOM.innerText;
const newTitle = title + ' yra apvalus';
console.log(newTitle);

const darzoviuPavadinimai = [];
for (let i = 0; i < darzovesDOM.length; i++) {
    const darzovesDOM = darzovesDOM[i];
    darzoviuPavadinimai.push(darzovesDOM.innerText);
}
console.log(darzoviuPavadinimai);
const darzoviuSuvestine = `Suvestine: ${darzoviuPavadinimai.join(', ')}`;
console.log(darzoviuSuvestine);