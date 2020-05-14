const vowels = 'aeiou'
let text = prompt("Введите текст");

let clearText = text.toLowerCase().replace(/[^a-z]/gi,'');
let array = clearText.split('');
let vowelsCount = 0;
let consonantCount = 0;

for (let i = 0; i < array.length; ++i) {
    if (vowels.indexOf(array[i]) !== -1) {
        vowelsCount += 1;
    } else {
        consonantCount += 1;
    }
}

alert(`В тексте из ${array.length} букв: ${vowelsCount} гласных и ${consonantCount} согласных`);
