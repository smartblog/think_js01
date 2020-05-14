let text = 'The syntax of Java is largely influenced by C++. Расставить символы конца строки так, чтобы строка была не длиннее 80 символов. The syntax of Java is largely influenced by C++.';

let array = text.split(" ");

let completeText = "";
let tempStr = "";
let tempStrNext = "";

for ( let i = 0 ; i < array.length ; i++ ) {
    tempStr += array[i];
    tempStrNext = tempStr + " " + array[i + 1];
    if (tempStrNext.length >= 80) {
        completeText += tempStr + "\n";
        tempStr = "";
        tempStrNext = "";
    } else {
        tempStr += " ";
    }
}

completeText += tempStr;

console.log(completeText);
