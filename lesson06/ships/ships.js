'use strict';

/**
 * @param {string} name
 * @param {model} model
 * @param {Position} position
 */
function Ship(name, model, position) {
    validateValues();

    let _isAnchorDroped = false;
    this.name = name;
    this.model = model;
    this.position = { x: position.x, y: position.y };
    this.speed = 0;
    this.distance = 0;

    this.move = function (direction) {
        if (_isAnchorDroped)
            throw new Error('You need to rise anchor');

        direction = direction.toLowerCase();

        switch(direction) {
            case 'n':
              this.position.y += 1;
              this.distance += 1;
              return true;

            case 'w':
              this.position.x -= 1;
              this.distance += 1;
              return true;

            case 's':
              this.position.y -= 1;
              this.distance += 1;
              return true;

            case 'e':
              this.position.x += 1;
              this.distance += 1;
              return true;

            default:
              throw new Error('Unknow direction');
        };
    };

    this.moveTo = function (position) {
        if (_isAnchorDroped)
            throw new Error('You need to rise anchor');

        const positionBefore = {...this.position};
        const distance = Math.abs(positionBefore.x - position.x) + Math.abs(positionBefore.y - position.y)

        this.position = {
            x: position.x,
            y: position.y,
        }

        this.distance += distance;
        return true;
    };


    this.isAnchorDroped = function () {
        return _isAnchorDroped;
    };

    /**
     * @param {boolean} droped
     */
    this.dropAnchor = () => {
        if (this.speed !== 0)
            throw new Error('Speed must be 0');

        _isAnchorDroped = true;

        if (this.isAnchorDroped() == true) {
            return true
        } else {
            return false
        }
    };

    /**
     * @param {boolean} droped
     */
    this.riseAnchor = () => {
        _isAnchorDroped = false;

        if (this.isAnchorDroped() == false) {
            return true
        } else {
            return false
        }
    };

    function validateValues() {
        if (!name)
            throw new Error('You need enter name of ship');
        if (!model)
            throw new Error('You need enter model of ship');
        if (!position)
            throw new Error('You need enter position of ship');

        if (typeof name !== "string")
            throw new Error('Value name is not string');
        if (typeof model !== "string")
            throw new Error('Value model is not string');

        if (typeof position.x !== 'number')
            throw new Error('Position coordinate X is not number');
        if (typeof position.y !== 'number')
            throw new Error('Position coordinate Y is not number');
    }
}
