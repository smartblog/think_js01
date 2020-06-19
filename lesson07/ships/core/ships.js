'use strict';

function Ship() {
    this.isAnchorDroped = true;
    this.isNeedRepair = false;

    this.speed = 0;
    this.distance = 0;
    this.color = 'grey';

    this.move = function (direction) {
        if (this.isAnchorDroped)
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
        if (this.isAnchorDroped)
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


    // this.isAnchorDroped = function () {
    //     return this.isAnchorDroped;
    // };

    /**
     * @param {boolean} droped
     */
    this.dropAnchor = function () {
        if (this.speed !== 0)
            throw new Error('Speed must be 0');

        this.isAnchorDroped = true;

        return this.isAnchorDroped;
    };

    /**
     * @param {boolean} droped
     */
    this.riseAnchor = function () {
        this.isAnchorDroped = false;

        return !this.isAnchorDroped;
    };
}

const MotorShip = function (name, model, position) {
    validateShipValues(name, model, position)
    this.kind = 'motor';
    this.name = name;
    this.model = model;
    this.position = { x: position.x, y: position.y };
    this.power = 90;
    this.material = "steel";
}

MotorShip.prototype = new Ship();

const SailingShip = function (name, model, position) {
    validateShipValues(name, model, position);
    this.kind = 'sailing';
    this.name = name;
    this.model = model;
    this.position = { x: position.x, y: position.y };
    this.mastsCount = 2;
    this.sailArea = "steel";
}

SailingShip.prototype = new Ship();

/**
 * Функция валидации обязательных данных для создания корабля
 * @param {string} name имя корабля
 * @param {string} model модель корабля
 * @param {Position} position позиция корабля
 */
function validateShipValues(name, model, position) {
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
