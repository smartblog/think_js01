const text = "Lorem ipsum dolor sit amet.";

function textToArray(text) {
    arr = text.split(" ");
    resultArr = [];

    arr.forEach(word => {
        let sumCode = 0;
        for ( let i = 0 ; i < word.length ; i++ ) {
          sumCode += word.charCodeAt(i);
        }
        result = { word: word, code: sumCode };
        resultArr.push(result);
    })
    return resultArr;
}

console.log(textToArray(text));
