'use strict';

/**
 * @param {string} name имя пристани
 * @param {Position} position позиция пристани
 */
function Dock(name, position) {
    this.ships = {};

    this.moor = function (ship) {
        if (this.position.x != ship.position.x || this.position.y != ship.position.y)
            throw new Error('Ship position != position dock');

        if (this.ships[ship.name])
            throw new Error('Dock already moor this ship');

        this.ships[ship.name] = ship;
        return true;
    };

    this.unmoor = function (ship) {
        if (!this.ships[ship.name])
            throw new Error('Dock has not this ship');

        delete this.ships[ship.name];
        return true;
    };

    this.isShipMoor = function (ship) {
        return this.ships[ship.name]
    }

    this.buildShip = function (name, model, shipKind) {
        if ( this.kind !== shipKind )
            throw new Error('This Dock can build ship only specified kind');

        if ( shipKind === "motor" )
            return new MotorShip(name, model, this.position)
        if ( shipKind === "sailing" )
            return new SailingShip(name, model, this.position)
    };

    this.repairShip = function (ship) {
        if ( this.kind !== ship.kind )
            throw new Error('This Dock can repair ship only specified kind');
        if ( !this.isShipMoor(ship) )
            throw new Error('Ship is not moor on dock');
        if ( ship.isNeedRepair === false )
            throw new Error('Ship is not need repair');

        ship.isNeedRepair = false;
        return !ship.isNeedRepair;
    };

    this.paintShip = function (ship, color) {
        if ( !color )
            throw new Error('Value color is empty');
        if ( !this.isShipMoor(ship) )
            throw new Error('Ship is not moor on dock');

        ship.color = color;
    };

    this.changeShip = function (ship, newName) {
        if ( !this.isShipMoor(ship) )
            throw new Error('Ship is not moor on dock');
        if ( this.kind !== ship.kind )
            throw new Error('This Dock can change ship only specified kind');

        if ( ship.kind === "motor" )
            return new MotorShip('New Ship', ship.model, this.position)
        if ( ship.kind === "sailing" )
            return new SailingShip('New Ship', ship.model, this.position)
    };
}

const MotorDock = function (name, position) {
    validateDockValues(name, position);
    this.name = name;
    this.kind = "motor";
    this.position = { x: position.x, y: position.y };
}

MotorDock.prototype = new Dock();

const SailingDock = function (name, position) {
    validateDockValues(name, position);
    this.name = name;
    this.kind = "sailing";
    this.position = { x: position.x, y: position.y };
}

SailingDock.prototype = new Dock();

function validateDockValues(name, position) {
    if (!name)
        throw new Error('You need enter name of dock');
    if (!position)
        throw new Error('You need enter position of dock');

    if (typeof name !== "string")
        throw new Error('Value name is not string');

    if (typeof position.x !== 'number')
        throw new Error('Position coordinate X is not number');
    if (typeof position.y !== 'number')
        throw new Error('Position coordinate Y is not number');
}
