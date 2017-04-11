/* eslint-env chai, mocha */
import chai from 'chai';
import dirtyChai from 'dirty-chai';
import DateTimeOffset from '../DateTimeOffset';

chai.use(dirtyChai);
const expect = chai.expect;

const ct = '2017-04-10T00:00:00Z';
const ctForm = '2017-04-10 00:00:00';
const ctKST = '2017-04-10 09:00:00';
const ctNow = new Date();
const dateCustom = new Date('2017-04-10');

describe('Constructor Tests', () => {
  it(`new DateTimeOffset(${ct}) expect instaceof DateTimeOffset`, () => {
    const t = new DateTimeOffset(ct);
    expect(t).to.be.an.instanceof(DateTimeOffset);
  });
  it(`new DateTimeOffset(${ct}) expect toString 2017-04-10 00:00:00`, () => {
    const t = new DateTimeOffset(ct);
    expect(t.toString()).to.be.equal('2017-04-10 00:00:00');
  });
  it(`new DateTimeOffset(${ctNow}) expect instaceof DateTimeOffset`, () => {
    const t = new DateTimeOffset(ctNow);
    expect(t).to.be.an.instanceof(DateTimeOffset);
  });
  it(`new DateTimeOffset(${dateCustom}) expect instaceof DateTimeOffset`, () => {
    const t = new DateTimeOffset(dateCustom);
    expect(t).to.be.an.instanceof(DateTimeOffset);
  });
  it(`new DateTimeOffset(${dateCustom}) expect toString(undefined, 'UTC') 2017-04-10 00:00:00`, () => {
    const t = new DateTimeOffset(dateCustom);
    expect(t.toString('UTC')).to.be.equal('2017-04-10 00:00:00');
  });
  it(`new DateTimeOffset(${dateCustom}) expect toString(undefined, 'KST') 2017-04-10 09:00:00`, () => {
    const t = new DateTimeOffset(dateCustom);
    expect(t.toString('KST')).to.be.equal('2017-04-10 09:00:00');
  });
  it(`new DateTimeOffset(${ctForm}, { format: 'YYYY-MM-DD HH:mm:ss' }) expect instaceof DateTimeOffset`, () => {
    const form = 'YYYY-MM-DD HH:mm:ss';
    const t = new DateTimeOffset(ctForm, {
      format: form,
    });
    expect(t).to.be.an.instanceof(DateTimeOffset);
  });
  it(`new DateTimeOffset(${ctForm}, { format: 'YYYY-MM-DD HH:mm:ss' }) expect toString 2017-04-10 00:00:00`, () => {
    const form = 'YYYY-MM-DD HH:mm:ss';
    const t = new DateTimeOffset(ctForm, {
      format: form,
    });
    expect(t.toString()).to.be.equal('2017-04-10 00:00:00');
  });
  it(`new DateTimeOffset(${ctKST}, { format: 'YYYY-MM-DD HH:mm:ss', timezone: 'KST' }) expect instaceof DateTimeOffset`, () => {
    const form = 'YYYY-MM-DD HH:mm:ss';
    const t = new DateTimeOffset(ctKST, {
      format: form,
      timezone: 'KST',
    });
    expect(t).to.be.an.instanceof(DateTimeOffset);
  });
  it(`new DateTimeOffset(${ctKST}, { format: 'YYYY-MM-DD HH:mm:ss', timezone: 'KST' }) expect toString 2017-04-10 00:00:00`, () => {
    const form = 'YYYY-MM-DD HH:mm:ss';
    const t = new DateTimeOffset(ctKST, {
      format: form,
      timezone: 'KST',
    });
    expect(t.toString()).to.be.equal('2017-04-10 00:00:00');
  });
});
