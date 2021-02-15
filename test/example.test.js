import translateToAYes from '../yes.js';
const test = QUnit.test;

test('time to test a function', (expect) => {
    const expected = true;
    const actual = translateToAYes('yeeeeahs');
    expect.equal(actual, expected);
});
