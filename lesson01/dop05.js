let text = "The syntax of Java is largely influenced by C++. Unlike C++, Java does not support operator overloading. Java uses comments similar to those of C++";

let array = text.split(".");

let replWord = "Java";
let newWord = "JS";
let condition = "overloading";

let newText = "";

for ( let i = 0 ; i < array.length ; i++ ) {
    if ( array[i].indexOf(condition) !== -1 ) {
        array[i] = array[i].replace(replWord, newWord);
    }
    newText += array[i];
}

console.log(newText);
