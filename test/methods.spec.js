/* eslint-env chai, mocha */
const chai = require('chai');
const dirtyChai = require('dirty-chai');
const DateTimeOffset = require('../DateTimeOffset').default;

chai.use(dirtyChai);
const expect = chai.expect;

const customTime = '2017-04-10T00:00:00Z';
const customTime2 = '2017-04-09T23:50:00Z';
const customTime3 = '2017-04-10T00:10:00Z';
const customTimeKST = '2017-04-10 09:00:00';
const customTime2KST = '2017-04-10 08:50:00';
const customTime3KST = '2017-04-10 09:10:00';

describe('DateTimeOffset Method Tests', () => {
  describe(`const datetime = new DateTimeOffset(${customTime})`, () => {
    it('datetime.addDays(10) expect 2017-04-20 00:00:00', () => {
      const t = new DateTimeOffset(customTime).addDays(10);
      expect(t.toString()).to.be.equal('2017-04-20 00:00:00');
    });
    it('datetime.addDays(-5) expect 2017-04-05 00:00:00', () => {
      const t = new DateTimeOffset(customTime).addDays(-5);
      expect(t.toString()).to.be.equal('2017-04-05 00:00:00');
    });
    it('datetime.addDays(\'aaaa\') expect throw Error', () => {
      const t = new DateTimeOffset(customTime);
      expect(t.addDays.bind(t, 'aaaa')).to.throw(Error, /typeof Number/);
    });
    it('datetime.addDays(null) expect throw Error', () => {
      const t = new DateTimeOffset(customTime);
      expect(t.addDays.bind(t, null)).to.throw(Error, /typeof Number/);
    });
    it('datetime.addDays(undefined) expect throw Error', () => {
      const t = new DateTimeOffset(customTime);
      expect(t.addDays.bind(t)).to.throw(Error, /More Argument/);
    });
    it('datetime.addDays(1, 1) expect throw Error', () => {
      const t = new DateTimeOffset(customTime);
      expect(t.addDays.bind(t, 1, 1)).to.throw(Error, /More Argument/);
    });
    it('datetime.addHours(10) expect 2017-04-10 10:00:00', () => {
      const t = new DateTimeOffset(customTime).addHours(10);
      expect(t.toString()).to.be.equal('2017-04-10 10:00:00');
    });
    it('datetime.addHours(-10) expect 2017-04-09 14:00:00', () => {
      const t = new DateTimeOffset(customTime).addHours(-10);
      expect(t.toString()).to.be.equal('2017-04-09 14:00:00');
    });
    it('datetime.addHours(\'aaaa\') expect throw Error', () => {
      const t = new DateTimeOffset(customTime);
      expect(t.addHours.bind(t, 'aaaa')).to.throw(Error, /typeof Number/);
    });
    it('datetime.addHours(null) expect throw Error', () => {
      const t = new DateTimeOffset(customTime);
      expect(t.addHours.bind(t, null)).to.throw(Error, /typeof Number/);
    });
    it('datetime.addHours(undefined) expect throw Error', () => {
      const t = new DateTimeOffset(customTime);
      expect(t.addHours.bind(t)).to.throw(Error, /More Argument/);
    });
    it('datetime.addMonth(5) expect 2017-09-10 00:00:00', () => {
      const t = new DateTimeOffset(customTime).addMonth(5);
      expect(t.toString()).to.be.equal('2017-09-10 00:00:00');
    });
    it('datetime.addMonth(-3) expect 2017-01-10 00:00:00', () => {
      const t = new DateTimeOffset(customTime).addMonth(-3);
      expect(t.toString()).to.be.equal('2017-01-10 00:00:00');
    });
    it('datetime.addMonth(\'aaaa\') expect throw Error', () => {
      const t = new DateTimeOffset(customTime);
      expect(t.addMonth.bind(t, 'aaaa')).to.throw(Error, /typeof Number/);
    });
    it('datetime.addMonth(null) expect throw Error', () => {
      const t = new DateTimeOffset(customTime);
      expect(t.addMonth.bind(t, null)).to.throw(Error, /typeof Number/);
    });
    it('datetime.addMonth(undefined) expect throw Error', () => {
      const t = new DateTimeOffset(customTime);
      expect(t.addMonth.bind(t)).to.throw(Error, /More Argument/);
    });
    it('datetime.addSeconds(50) expect 2017-04-10 00:00:50', () => {
      const t = new DateTimeOffset(customTime).addSeconds(50);
      expect(t.toString()).to.be.equal('2017-04-10 00:00:50');
    });
    it('datetime.addSeconds(120) expect 2017-04-10 00:02:00', () => {
      const t = new DateTimeOffset(customTime).addSeconds(120);
      expect(t.toString()).to.be.equal('2017-04-10 00:02:00');
    });
    it('datetime.addSeconds(-50) expect 2017-04-09 23:59:10', () => {
      const t = new DateTimeOffset(customTime).addSeconds(-50);
      expect(t.toString()).to.be.equal('2017-04-09 23:59:10');
    });
    it('datetime.addSeconds(\'aaaa\') expect throw Error', () => {
      const t = new DateTimeOffset(customTime);
      expect(t.addSeconds.bind(t, 'aaaa')).to.throw(Error, /typeof Number/);
    });
    it('datetime.addSeconds(null) expect throw Error', () => {
      const t = new DateTimeOffset(customTime);
      expect(t.addSeconds.bind(t, null)).to.throw(Error, /typeof Number/);
    });
    it('datetime.addSeconds(undefined) expect throw Error', () => {
      const t = new DateTimeOffset(customTime);
      expect(t.addSeconds.bind(t)).to.throw(Error, /More Argument/);
    });
    it('datetime.addYears(10) expect 2027-04-10 00:00:00', () => {
      const t = new DateTimeOffset(customTime).addYears(10);
      expect(t.toString()).to.be.equal('2027-04-10 00:00:00');
    });
    it('datetime.addYears(-10) expect 2007-04-10 00:00:00', () => {
      const t = new DateTimeOffset(customTime).addYears(-10);
      expect(t.toString()).to.be.equal('2007-04-10 00:00:00');
    });
    it('datetime.addYears(\'yowu\') expect throw Error', () => {
      const t = new DateTimeOffset(customTime);
      expect(t.addYears.bind(t, 'yowu')).to.throw(Error, /typeof Number/);
    });
    it('datetime.addYears(null) expect throw Error', () => {
      const t = new DateTimeOffset(customTime);
      expect(t.addYears.bind(t, null)).to.throw(Error, /typeof Number/);
    });
    it('datetime.addYears(undefined) expect throw Error', () => {
      const t = new DateTimeOffset(customTime);
      expect(t.addYears.bind(t)).to.throw(Error, /More Argument/);
    });
    it('datetime.addMinutes(10) expect 2017-04-10 00:10:00', () => {
      const t = new DateTimeOffset(customTime).addMinutes(10);
      expect(t.toString()).to.be.equal('2017-04-10 00:10:00');
    });
    it('datetime.addMinutes(120) expect 2017-04-10 02:00:00', () => {
      const t = new DateTimeOffset(customTime).addMinutes(120);
      expect(t.toString()).to.be.equal('2017-04-10 02:00:00');
    });
    it('datetime.addMinutes(-10) expect 2017-04-09 23:50:00', () => {
      const t = new DateTimeOffset(customTime).addMinutes(-10);
      expect(t.toString()).to.be.equal('2017-04-09 23:50:00');
    });
    it('datetime.addMinutes(-120) expect 2017-04-09 22:00:00', () => {
      const t = new DateTimeOffset(customTime).addMinutes(-120);
      expect(t.toString()).to.be.equal('2017-04-09 22:00:00');
    });
    it('datetime.addMinutes(\'yowu\') expect throw Error', () => {
      const t = new DateTimeOffset(customTime);
      expect(t.addMinutes.bind(t, 'yowu')).to.throw(Error, /typeof Number/);
    });
    it('datetime.addMinutes(null) expect throw Error', () => {
      const t = new DateTimeOffset(customTime);
      expect(t.addMinutes.bind(t, null)).to.throw(Error, /typeof Number/);
    });
    it('datetime.addMinutes(undefined) expect throw Error', () => {
      const t = new DateTimeOffset(customTime);
      expect(t.addMinutes.bind(t)).to.throw(Error, /More Argument/);
    });
    it(`datetime.compareTo(new DateTimeOffset(${customTime})) expect 0`, () => {
      const t = new DateTimeOffset(customTime);
      const t2 = new DateTimeOffset(customTime);
      expect(t.compareTo(t2)).to.be.equal(0);
    });
    it(`datetime.compareTo(new DateTimeOffset(${customTime2})) expect +number`, () => {
      const t = new DateTimeOffset(customTime);
      const t2 = new DateTimeOffset(customTime2);
      expect(t.compareTo(t2)).to.be.above(0);
    });
    it(`datetime.compareTo(new DateTimeOffset(${customTime3})) expect -number`, () => {
      const t = new DateTimeOffset(customTime);
      const t2 = new DateTimeOffset(customTime3);
      expect(t.compareTo(t2)).to.be.below(0);
    });
    it(`datetime.compareTo(new DateTimeOffset(${customTimeKST}, 'KST')) expect 0`, () => {
      const t = new DateTimeOffset(customTime);
      const tk = new DateTimeOffset(customTimeKST, {
        format: 'YYYY-MM-DD HH:mm:ss',
        timezone: 'KST',
      });
      expect(t.compareTo(tk)).to.be.equal(0);
    });
    it(`datetime.compareTo(new DateTimeOffset(${customTime2KST}, 'KST')) expect +number`, () => {
      const t = new DateTimeOffset(customTime);
      const tk = new DateTimeOffset(customTime2KST, {
        format: 'YYYY-MM-DD HH:mm:ss',
        timezone: 'KST',
      });
      expect(t.compareTo(tk)).to.be.above(0);
    });
    it(`datetime.compareTo(new DateTimeOffset(${customTime3KST}, 'KST')) expect -number`, () => {
      const t = new DateTimeOffset(customTime);
      const tk = new DateTimeOffset(customTime3KST, {
        format: 'YYYY-MM-DD HH:mm:ss',
        timezone: 'KST',
      });
      expect(t.compareTo(tk)).to.be.below(0);
    });
    it('datetime.compareTo(undefined) expect throw Error', () => {
      const t = new DateTimeOffset(customTime);
      expect(t.compareTo.bind(t)).to.throw(Error, /More Argument/);
    });
    it('datetime.compareTo(\'aaaa\') expect throw Error', () => {
      const t = new DateTimeOffset(customTime);
      expect(t.compareTo.bind(t, 'yowu')).to.throw(Error, /instanceof DateTimeOffset/);
    });
    it(`datetime.equals(new DateTimeOffset(${customTime})) expect true`);
    it(`datetime.equals(new DateTimeOffset(${customTime2})) expect false`);
    it(`datetime.equals(new DateTimeOffset(${customTimeKST}, 'KST')) expect true`);
    it(`datetime.equals(new DateTimeOffset(${customTime2KST}, 'KST')) expect false`);
  });
  describe('Static Methods', () => {
    it(`compare(new DateTimeOffset(${customTime}), new DateTimeOffset(${customTime})) expect 0`);
    it(`compare(new DateTimeOffset(${customTime}), new DateTimeOffset(${customTime2})) expect +number`);
    it(`compare(new DateTimeOffset(${customTime}), new DateTimeOffset(${customTime3})) expect -number`);
    it(`equals(new DateTimeOffset(${customTime}, 'UTC'), new DateTimeOffset(${customTime}, 'UTC')) expect true`);
    it(`equals(new DateTimeOffset(${customTime}, 'UTC'), new DateTimeOffset(${customTime2}, 'UTC')) expect false`);
    it(`equals(new DateTimeOffset(${customTime}, 'UTC'), new DateTimeOffset(${customTimeKST}, 'KST')) expect true`);
    it(`equals(new DateTimeOffset(${customTime2}, 'UTC'), new DateTimeOffset(${customTimeKST}, 'KST')) expect false`);
  });
});
