require('chai').should();
const helpers = require('../src/helpers');
const testData = require('./testdata.js');

describe('diff', () => {
    let installedModules = helpers.getInstalledModules();
    let usedModules = helpers.getUsedModules();
    usedModules = helpers.filterRegistryModules(usedModules);
    let unusedModules = helpers.diff(installedModules, usedModules);
    let modulesNotInstalled = helpers.diff(usedModules, installedModules);
    console.log(modulesNotInstalled);
    it('should return unusedModules', () => {
        unusedModules.should.deep.equal(testData.unusedModules);
    });
    it('should return modulesNotInstalled', () => {
        modulesNotInstalled.should.deep.equal(testData.modulesNotInstalled);
    });
});
