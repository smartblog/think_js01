
describe('sumOfPositive', () => {
    it('empty value', () => {
        expect(() => sumOfPositive()).to.throw('Value is empty');
    });
    it('value is not array', () => {
        expect(() => sumOfPositive("asd")).to.throw('Value is not array');
    });
    it('empty array[]', () => {
        const result = sumOfPositive([]);
        assert.deepEqual(result, {count: 0, sum: 0});
    });
    it('no Positive number', () => {
        const result = sumOfPositive([-1, -2, -7, -6]);
        assert.deepEqual(result, {count: 0, sum: 0});
    });
    it('incorrect data in array', () => {
        expect(() => sumOfPositive([3, -2, "asd", 6])).to.throw('Invalid array');
    });
    it('correct data in array', () => {
        const result = sumOfPositive([1, 2, 3]);
        assert.deepEqual(result, {count: 3, sum: 6});
    });
});
