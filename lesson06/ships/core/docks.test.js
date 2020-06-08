
describe('class Dock', () => {
    describe('create', () => {
        it('Empty name of dock', () => {
            expect(() => new Dock()).to.throw('You need enter name of dock');
        });
        it('Empty position of ship', () => {
            expect(() => new Dock('Dock 01')).to.throw('You need enter position of dock');
        });
        it('Value name is not string', () => {
            expect(() => new Dock(123, {x: 0, y: 0})).to.throw('Value name is not string');
        });
        it('Position coordinate X is not number', () => {
            expect(() => new Dock('name', {x: "123", y: 0})).to.throw('Position coordinate X is not number');
        });
        it('Position coordinate Y is not number', () => {
            expect(() => new Dock('name', {x: 0, y: "123"})).to.throw('Position coordinate Y is not number');
        });
    });
    describe('operations', () => {
        const dock55 = new Dock('Dock 55', {x: 55, y: 55})
        const ship55 = new Ship('Ship 55', 'model1', {x: 55, y: 55});
        const ship22 = new Ship('Ship 22', 'model1', {x: 22, y: 22});

        it('Ship can not moor. Ship position != position dock', () => {
            expect(() => dock55.moor(ship22)).to.throw('Ship position != position dock');
        });

        it('Dock moor ship', () => {
            dock55.moor(ship55);
            assert.deepEqual(dock55.ships[ship55.name], ship55);
        });

        it('Ship already moor', () => {
            expect(() => dock55.moor(ship55)).to.throw('Dock already moor this ship');
        });

        it('Dock unmoor ship', () => {
            assert.equal(dock55.unmoor(ship55), true);
        });
    });
});
