class HtmlElement {
    constructor() {
        this._target = document.body;
        this._template;
        this._styles = {};
    }

    set target(element) {
        if (!(element instanceof Element)) {
            throw new Error("Target is not a DOM element");
        }
        this._target = element;
    }

    set template(string) {
        this._template = string;
        this.createElement();
    }

    set variables(params) {
        this._variables = params;
        this.updateTemplate(params);
    }

    set styles(params) {
        this._styles = params;
        this.updateElement();
    }

    get target() {
        return this._target;
    }

    get element() {
        return this._element;
    }

    get styles() {
        return this._styles;
    }

    _render = function () {
        this.updateElement();
        this._target.append(this.element);
    }

    _unrender = function () {
        this.element.remove();
    }

    render = function () {
        this._render();
    }

    unrender = function () {
        this._unrender();
    }

    createElement = function () {
        const element = new DOMParser().parseFromString(this._template, 'text/html').body.children[0];
        element.style.cssText = this.stylesToString(this._styles);
        this._element = element;
    }

    updateElement = function () {
        const element = this._element;
        element.style.cssText = this.stylesToString(this._styles);
    }

    stylesToString = function (object) {
        let styleString = "";
        Object.keys(object).map(function(objectKey, index) {
            let string = objectKey + ": " + object[objectKey];
            styleString += string;
        });
        return styleString;
    }

    updateTemplate = function (object) {
        let newTemplate = "";
        const oldTemplate = this._template;

        Object.keys(object).map(function(objectKey, index) {
            const key = objectKey;
            const value = object[key];
            newTemplate = oldTemplate.replace(new RegExp(`{{${key}}}`, 'g'), value);
        });

        this.template = newTemplate;
    }
}

class Div extends HtmlElement {
    constructor() {
        super();
    }

    set onClick(func) {
        this.element.addEventListener('click', func);
    }
}

class Input extends HtmlElement {
    constructor() {
        super();
    }

    set onInput(func) {
        this.element.addEventListener('keypress', func);
    }

    set onFocus(func) {
        this.element.addEventListener('focus', func)
    }
}
