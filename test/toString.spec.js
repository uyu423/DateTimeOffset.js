/* eslint-env chai, mocha */
import chai from 'chai';
import dirtyChai from 'dirty-chai';
import DateTimeOffset from '../DateTimeOffset';

chai.use(dirtyChai);
const expect = chai.expect;

const customTime = '2017-04-10T00:00:00Z';
const customTimeForm = '2017-04-10 00:00:00';
// const customTimeKST = '2017-04-10T09:00:00Z';
const customTimeKST = '2017-04-10 09:00:00';

describe('toString Method Tests', () => {
  describe(`const utc = new DateTimeOffset('${customTime}')`, () => {
    it('utc.toString() expect 2017-04-10 00:00:00', () => {
      const t = new DateTimeOffset(customTime);
      expect(t.toString()).to.be.equal('2017-04-10 00:00:00');
    });
    it('utc.toString(undefined, \'UTC\') expect 2017-04-10 00:00:00', () => {
      const t = new DateTimeOffset(customTime);
      expect(t.toString(undefined, 'UTC')).to.be.equal('2017-04-10 00:00:00');
    });
    it('utc.toString(undefined, \'KST\') expect 2017-04-10 09:00:00', () => {
      const t = new DateTimeOffset(customTime);
      expect(t.toString(undefined, 'KST')).to.be.equal('2017-04-10 09:00:00');
    });
    it('utc.toString(\'YYYY-MM-DD HH:mm:ss\') expect 2017-04-10 00:00:00', () => {
      const t = new DateTimeOffset(customTime);
      const form = 'YYYY-MM-DD HH:mm:ss';
      expect(t.toString(form)).to.be.equal('2017-04-10 00:00:00');
    });
    it('utc.toString(\'YYYY-MM-DD HH:mm:ss\', \'UTC\') expect 2017-04-10 00:00:00', () => {
      const t = new DateTimeOffset(customTime);
      const form = 'YYYY-MM-DD HH:mm:ss';
      expect(t.toString(form, 'UTC')).to.be.equal('2017-04-10 00:00:00');
    });
    it('utc.toString(\'YYYY-MM-DD HH:mm:ss\', \'KST\') expect 2017-04-10 09:00:00', () => {
      const t = new DateTimeOffset(customTime);
      const form = 'YYYY-MM-DD HH:mm:ss';
      expect(t.toString(form, 'KST')).to.be.equal('2017-04-10 09:00:00');
    });
  });
  describe(`const utc = new DateTimeOffset('${customTimeForm}', { format: 'YYYY-MM-DD HH:mm:ss' })`, () => {
    it('utc.toString() expect 2017-04-10 00:00:00', () => {
      const form = 'YYYY-MM-DD HH:mm:ss';
      const t = new DateTimeOffset(customTimeForm, {
        format: form,
      });
      expect(t.toString()).to.be.equal('2017-04-10 00:00:00');
    });
    it('utc.toString(undefined, \'UTC\') expect 2017-04-10 00:00:00', () => {
      const form = 'YYYY-MM-DD HH:mm:ss';
      const t = new DateTimeOffset(customTimeForm, {
        format: form,
      });
      expect(t.toString(undefined, 'UTC')).to.be.equal('2017-04-10 00:00:00');
    });
    it('utc.toString(undefined, \'KST\') expect 2017-04-10 09:00:00', () => {
      const form = 'YYYY-MM-DD HH:mm:ss';
      const t = new DateTimeOffset(customTimeForm, {
        format: form,
      });
      expect(t.toString(undefined, 'KST')).to.be.equal('2017-04-10 09:00:00');
    });
    it('utc.toString(\'YYYY-MM-DD HH:mm:ss\') expect 2017-04-10 00:00:00', () => {
      const form = 'YYYY-MM-DD HH:mm:ss';
      const t = new DateTimeOffset(customTimeForm, {
        format: form,
      });
      expect(t.toString(form)).to.be.equal('2017-04-10 00:00:00');
    });
    it('utc.toString(\'YYYY-MM-DD HH:mm:ss\', \'UTC\') expect 2017-04-10 00:00:00', () => {
      const form = 'YYYY-MM-DD HH:mm:ss';
      const t = new DateTimeOffset(customTimeForm, {
        format: form,
      });
      expect(t.toString(form, 'UTC')).to.be.equal('2017-04-10 00:00:00');
    });
    it('utc.toString(\'YYYY-MM-DD HH:mm:ss\', \'KST\') expect 2017-04-10 09:00:00', () => {
      const form = 'YYYY-MM-DD HH:mm:ss';
      const t = new DateTimeOffset(customTime, {
        format: form,
      });
      expect(t.toString(form, 'KST')).to.be.equal('2017-04-10 09:00:00');
    });
  });
  describe(`const kst = new DateTimeOffset('${customTimeKST}', { format: 'YYYY-MM-DD HH:mm:ss', timezone: 'KST'})`, () => {
    it('kst.toString() expect 2017-04-10 00:00:00', () => {
      const form = 'YYYY-MM-DD HH:mm:ss';
      const t = new DateTimeOffset(customTimeKST, {
        timezone: 'KST',
        format: form,
      });
      expect(t.toString()).to.be.equal('2017-04-10 00:00:00');
    });
    it('kst.toString(undefined, \'UTC\') expect 2017-04-10 00:00:00', () => {
      const form = 'YYYY-MM-DD HH:mm:ss';
      const t = new DateTimeOffset(customTimeKST, {
        timezone: 'KST',
        format: form,
      });
      expect(t.toString(undefined, 'UTC')).to.be.equal('2017-04-10 00:00:00');
    });
    it('kst.toString(undefined, \'KST\') expect 2017-04-10 09:00:00', () => {
      const form = 'YYYY-MM-DD HH:mm:ss';
      const t = new DateTimeOffset(customTimeKST, {
        timezone: 'KST',
        format: form,
      });
      expect(t.toString(undefined, 'KST')).to.be.equal('2017-04-10 09:00:00');
    });
    it('kst.toString(\'YYYY-MM-DD HH:mm:ss\') expect 2017-04-10 00:00:00', () => {
      const form = 'YYYY-MM-DD HH:mm:ss';
      const t = new DateTimeOffset(customTimeKST, {
        timezone: 'KST',
        format: form,
      });
      expect(t.toString(form)).to.be.equal('2017-04-10 00:00:00');
    });
    it('kst.toString(\'YYYY-MM-DD HH:mm:ss\', \'UTC\') expect 2017-04-10 00:00:00', () => {
      const form = 'YYYY-MM-DD HH:mm:ss';
      const t = new DateTimeOffset(customTimeKST, {
        timezone: 'KST',
        format: form,
      });
      expect(t.toString(form, 'UTC')).to.be.equal('2017-04-10 00:00:00');
    });
    it('kst.toString(\'YYYY-MM-DD HH:mm:ss\', \'KST\') expect 2017-04-10 09:00:00', () => {
      const form = 'YYYY-MM-DD HH:mm:ss';
      const t = new DateTimeOffset(customTimeKST, {
        timezone: 'KST',
        format: form,
      });
      expect(t.toString(form, 'KST')).to.be.equal('2017-04-10 09:00:00');
    });
  });
});
