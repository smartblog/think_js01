const someElement = new Div()
someElement.template = `<div>{{output}}</div>`

someElement.variables = {
    output: 'Some text'
}

someElement.styles = {
	color: 'red'
}

someElement.render()

someElement.onClick = function () {
	console.log('test Click')
}

someElement.styles = {
	color: 'blue'
}

// Для Input

const someInput = new Input();
someInput.template = `<input type="text" value={{value}} />`;

someInput.variables = {
    value: 'test',
}

someInput.render();

someInput.onFocus = function () { console.log('input is focused') }
someInput.onInput = function () { console.log('input keypress') }
