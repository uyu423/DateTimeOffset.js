/* eslint-env chai, mocha */
const chai = require('chai');
const dirtyChai = require('dirty-chai');

chai.use(dirtyChai);
const expect = chai.expect;

const customTime = '2017-04-10T00:00:00Z';
const customTimeKST = '2017-04-10T09:00:00Z';

describe('toString Method Tests', () => {
  describe(`const utc = new DateTimeOffset(${customTime}, 'UTC')`, () => {
    it('utc.toString(\'YYYY-MM-DD HH:mm:ss\') expect 2017-04-10 00:00:00');
    it('utc.toString(\'YYYY-MM-DD HH:mm:ss\', \'UTC\') expect 2017-04-10 00:00:00');
    it('utc.toString(\'YYYY-MM-DD HH:mm:ss\', \'KST\') expect 2017-04-10 09:00:00');
  });
  describe(`const kst = new DateTimeOffset(${customTimeKST}, 'KST')`, () => {
    it('kst.toString(\'YYYY-MM-DD HH:mm:ss\') expect 2017-04-10 00:00:00');
    it('kst.toString(\'YYYY-MM-DD HH:mm:ss\', \'UTC\') expect 2017-04-10 00:00:00');
    it('kst.toString(\'YYYY-MM-DD HH:mm:ss\', \'KST\') expect 2017-04-10 09:00:00');
  });
});
