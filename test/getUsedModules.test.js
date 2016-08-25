require('chai').should();
const helpers = require('../src/helpers');
const testData = require('./testdata.js');

describe('getUsedModules', () => {
    it('should return used modules', () => {
        helpers.getUsedModules().should.deep.equal(testData.usedModules);
    });
});
