
describe('Create Ships', () => {
    it('Empty name of ship', () => {
        expect(() => new Ship()).to.throw('You need enter name of ship');
    });
    it('Empty model of ship', () => {
        expect(() => new Ship('Ship 01')).to.throw('You need enter model of ship');
    });
    it('Empty position of ship', () => {
        expect(() => new Ship('Ship 01', 'Model 01')).to.throw('You need enter position of ship');
    });
    it('Value name is not string', () => {
        expect(() => new Ship(123, 'model', {x: 0, y: 0})).to.throw('Value name is not string');
    });
    it('Value model is not string', () => {
        expect(() => new Ship('name', 123, {x: 0, y: 0})).to.throw('Value model is not string');
    });
    it('Position coordinate X is not number', () => {
        expect(() => new Ship('name', 'model', {x: "123", y: 0})).to.throw('Position coordinate X is not number');
    });
    it('Position coordinate Y is not number', () => {
        expect(() => new Ship('name', 'model', {x: 0, y: "123"})).to.throw('Position coordinate Y is not number');
    });
});

describe('Ships operations', () => {
    const ship = new Ship('name1', 'model1', {x: 0, y: 0});
    ship.dropAnchor();
    const ship2 = new Ship('name2', 'model1', {x: 0, y: 0});

    it('Ship can not moveTo when anchor drop', () => {
        expect(() => ship.moveTo({ x: 10, y: 10 })).to.throw('You need to rise anchor');
    });

    it('Ship can not move when anchor drop', () => {
        expect(() => ship.move('w')).to.throw('You need to rise anchor');
    });

    it('Unknow direction in move', () => {
        expect(() => ship2.move('ZZ')).to.throw('Unknow direction');
    });

    it('Ship can not drop anchor when speed > 0', () => {
        const ship = new Ship('name3', 'model2', {x: 0, y: 0});
        ship.speed = 10;
        expect(() => ship.dropAnchor()).to.throw('Speed must be 0');
    });

    it('Ship riseAnchor', () => {
        ship.riseAnchor();
        assert.equal(ship.isAnchorDroped(), false);
    });

    it('Ship dropAnchor', () => {
        ship.dropAnchor();
        assert.equal(ship.isAnchorDroped(), true);
    });
});

describe('Ship moves', () => {
    const shipTestMove = new Ship('Test Move', 'model1', {x: 0, y: 0});

    it('Successful move N', () => {
        const positionBefore = {...shipTestMove.position};
        const distanceBefore = shipTestMove.distance
        shipTestMove.move('n');
        assert.equal(shipTestMove.position.y, positionBefore.y + 1);
        assert.equal(shipTestMove.distance, distanceBefore + 1);
    });

    it('Successful move W', () => {
        const positionBefore = {...shipTestMove.position};
        const distanceBefore = shipTestMove.distance
        shipTestMove.move('w');
        assert.equal(shipTestMove.position.x, positionBefore.x - 1);
        assert.equal(shipTestMove.distance, distanceBefore + 1);
    });

    it('Successful move S', () => {
        const positionBefore = {...shipTestMove.position};
        const distanceBefore = shipTestMove.distance
        shipTestMove.move('s');
        assert.equal(shipTestMove.position.y, positionBefore.y - 1);
        assert.equal(shipTestMove.distance, distanceBefore + 1);
    });

    it('Successful move E', () => {
        const positionBefore = {...shipTestMove.position};
        const distanceBefore = shipTestMove.distance
        shipTestMove.move('e');
        assert.equal(shipTestMove.position.x, positionBefore.x + 1);
        assert.equal(shipTestMove.distance, distanceBefore + 1);
    });
});
