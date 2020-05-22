describe('wordStat', () => {
    it('empty value', () => {
        expect(function () {
            wordStat();
        }).to.throw("Value is empty");
    });
    it('value is not string', () => {
        expect(function () {
            wordStat([1, 2, 3]);
        }).to.throw("Value is not string");
    });
    it('string has not words', () => {
        expect(function () {
            wordStat(" ");
        }).to.throw("String has not words");
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
        expect(function () {
            sumCodes();
        }).to.throw("Value is empty");
    });
    it('value is not string', () => {
        expect(function () {
            sumCodes([1, 2, 3]);
        }).to.throw("Value is not string");
    });
    it('with correct data', () => {
        const result = sumCodes("Lorem");
        assert.equal(result, 511);
    });
});
