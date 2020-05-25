describe('wordStat', () => {
    it('empty value', () => {
        expect(() => wordStat()).to.throw('Value is empty');
    });
    it('value is not string', () => {
        expect(() => wordStat([1, 2, 3])).to.throw('Value is not string');
    });
    it('string has not words', () => {
        expect(() => wordStat(" ")).to.throw('String has not words');
    });
    it('with only one word', () => {
        const result = wordStat("Lorem");
        assert.deepEqual(result, [
            { word: 'Lorem', sum: 511 }
        ]);
    });
    it('with correct data', () => {
        const result = wordStat("Lorem ipsum dolor sit amet.");
        assert.deepEqual(result, [
            { word: 'Lorem', sum: 511 },
            { word: 'ipsum', sum: 558 },
            { word: 'dolor', sum: 544 },
            { word: 'sit', sum: 336 },
            { word: 'amet.', sum: 469 }
        ]);
    });
});

describe('sumCodes', () => {
    it('empty value', () => {
        expect(() => sumCodes()).to.throw('Value is empty');
    });
    it('value is not string', () => {
        expect(() => sumCodes([1, 2, 3])).to.throw('Value is not string');
    });
    it('with correct data', () => {
        const result = sumCodes("Lorem");
        assert.equal(result, 511);
    });
});
