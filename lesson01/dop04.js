const keyCodeA = 'a'.charCodeAt(0);
let alphabet = "";

for (let l = 0 ; l < 26 ; l++) {
    code = keyCodeA + l;
    alphabet += String.fromCharCode(code);
}

let key = 'sqnzbeuigvxtmhfpdcjyoakwlr';

let text = `Back in the good old days | the "Golden Era" of Computers, it was easy
to separate the men from the boys (sometimes called "Real Men" and "Quiche
Eaters" in the literature). During this period, the Real Men were the ones
that understood computer programming, and the Quiche Eaters were the ones
that didn't.`;

text = text.toLocaleLowerCase();

console.log(text);


let encoded = '';

for (let index = 0; index < text.length; index++) {
    let code = text.charCodeAt(index) - keyCodeA;
    if (code < 0 || code >= 26)
        encoded += ' ';
    else
        encoded += key[code];
}

console.log(encoded);


let decoded = '';

for (let index = 0; index < encoded.length; index++) {
    let letter = encoded[index];
    let i = key.indexOf(letter);
    if ( i === -1 )
        decoded += ' ';
    else
        decoded += alphabet[i];
}

console.log(decoded);
