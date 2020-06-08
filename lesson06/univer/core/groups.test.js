
describe('class Group', () => {
    describe('create', () => {
        it('Empty number of group', () => {
            expect(() => new Group()).to.throw('You need enter number of group');
        });
        it('Value number is not number', () => {
            expect(() => new Group([1,2,3])).to.throw('Value number is not number');
        });
    });
});
