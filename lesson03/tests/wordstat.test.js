describe('wordStat', () => {
    it('empty value', () => {
        const result = wordStat();
        assert.equal(result, 'Value is empty');
    });
    it('value is not string', () => {
        const result = wordStat([1, 2, 3]);
        assert.equal(result, 'Value is not string');
    });
    it('string has not words', () => {
        const result = wordStat(" ");
        assert.equal(result, 'String has not words');
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
        const result = sumCodes();
        assert.equal(result, 'Value is empty');
    });
    it('value is not string', () => {
        const result = sumCodes([1, 2, 3]);
        assert.equal(result, 'Value is not string');
    });
    it('with correct data', () => {
        const result = sumCodes("Lorem");
        assert.equal(result, 511);
    });
});
