'use strict';

/**
 * @type {World} Список всех кораблей
 */
const world = {
    docks: {},
    ships: {},
};

const dock01 = new Dock('Dock 01', {x: 1, y: 1});

const ship01 = new Ship('Ship 01', 'Model 01', {x: 1, y: 1});
const ship02 = new Ship('Ship 02', 'Model 02', {x: 2, y: 2});


function addDock(world, dock) {
    if (world.docks[dock.name])
        throw new Error('Dock with this name already add');

    world.docks[dock.name] = ship;
}

function addShip(world, ship) {
    if (world.ships[ship.name])
        throw new Error('Ship with this name already add');

    world.ships[ship.name] = ship;
}
