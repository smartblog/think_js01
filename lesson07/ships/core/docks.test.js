
describe('class Dock', () => {
    describe('create MotorDock', () => {
        it('Empty name of dock', () => {
            expect(() => new MotorDock()).to.throw('You need enter name of dock');
        });
        it('Empty position of ship', () => {
            expect(() => new MotorDock('Dock 01')).to.throw('You need enter position of dock');
        });
        it('Value name is not string', () => {
            expect(() => new MotorDock(123, {x: 0, y: 0})).to.throw('Value name is not string');
        });
        it('Position coordinate X is not number', () => {
            expect(() => new MotorDock('name', {x: "123", y: 0})).to.throw('Position coordinate X is not number');
        });
        it('Position coordinate Y is not number', () => {
            expect(() => new MotorDock('name', {x: 0, y: "123"})).to.throw('Position coordinate Y is not number');
        });
    });

    describe('create SailingDock', () => {
        it('Empty name of dock', () => {
            expect(() => new SailingDock()).to.throw('You need enter name of dock');
        });
        it('Empty position of ship', () => {
            expect(() => new SailingDock('Dock 01')).to.throw('You need enter position of dock');
        });
        it('Value name is not string', () => {
            expect(() => new SailingDock(123, {x: 0, y: 0})).to.throw('Value name is not string');
        });
        it('Position coordinate X is not number', () => {
            expect(() => new SailingDock('name', {x: "123", y: 0})).to.throw('Position coordinate X is not number');
        });
        it('Position coordinate Y is not number', () => {
            expect(() => new SailingDock('name', {x: 0, y: "123"})).to.throw('Position coordinate Y is not number');
        });
    });

    describe('operations', () => {
        const dock55 = new MotorDock('Dock 55', {x: 55, y: 55})
        const ship55 = new MotorShip('Ship 55', 'model1', {x: 55, y: 55});
        const ship22 = new MotorShip('Ship 22', 'model1', {x: 22, y: 22});
        const testSailingShip = new SailingShip('SailingShip', 'model2', {x: 55, y: 55});

        describe('build ships', () => {
            it('build ship with incorrect kind', () => {
                expect(() => dock55.buildShip('Test Ship', 'Test model', 'sailing')).to.throw('This Dock can build ship only specified kind');
            });

            it('successfully build MotorShip', () => {
                const dock66 = new MotorDock('Dock 66', {x: 66, y: 66})
                const ship66 = dock66.buildShip('Ship 66', 'model 66', 'motor');
                assert.equal(ship66 instanceof MotorShip, true);
            });

            it('successfully build SailingShip', () => {
                const dock77 = new SailingDock('Dock 77', {x: 77, y: 77})
                const ship77 = dock77.buildShip('Ship 77', 'model 77', 'sailing');
                assert.equal(ship77 instanceof SailingShip, true);
            });
        });

        describe('moor/unmoor ships', () => {
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

        describe('repair ships', () => {
            it('repair ship with incorrect kind', () => {
                expect(() => dock55.repairShip(testSailingShip)).to.throw('This Dock can repair ship only specified kind');
            });
            it('repair unmoor ship', () => {
                expect(() => dock55.repairShip(ship22)).to.throw('Ship is not moor on dock');
            });
            it('ship is not need repair', () => {
                dock55.moor(ship55);
                expect(() => dock55.repairShip(ship55)).to.throw('Ship is not need repair');
            });
            it('successfully repair ship', () => {
                ship55.isNeedRepair = true;
                assert.equal(dock55.repairShip(ship55), true);
            });
        });

        describe('paint ships', () => {
          it('color is empty', () => {
              expect(() => dock55.paintShip(ship55)).to.throw('Value color is empty');
          });
          it('paint unmoor ship', () => {
              dock55.unmoor(ship55);
              expect(() => dock55.paintShip(ship55, 'red')).to.throw('Ship is not moor on dock');
          });
          it('successfully paint ship', () => {
              dock55.moor(ship55);
              dock55.paintShip(ship55, 'red')
              assert.equal(ship55.color, 'red');
          });
        });

        describe('change ships', () => {
          it('change unmoor ship', () => {
              dock55.unmoor(ship55);
              expect(() => dock55.changeShip(ship55)).to.throw('Ship is not moor on dock');
          });
          it('change ship with incorrect kind', () => {
              dock55.moor(testSailingShip);
              expect(() => dock55.changeShip(testSailingShip)).to.throw('This Dock can change ship only specified kind');
          });
          it('successfully change ship', () => {
              dock55.moor(ship55);
          });
        });
    });
});
