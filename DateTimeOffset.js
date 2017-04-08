import momentTimezone from 'moment-timezone';
import tz from './timezone-consts';

const defaultFormat = 'YYYY-MM-DD HH:mm:ss';

export default class DateTimeOffset {
  constructor(date, options = {}) {
    const timezone = options.timezone || 'GMT';
    const format = options.format || defaultFormat;
    const moment = momentTimezone.tz.setDefault(tz[timezone]);
    this.datetime = moment(date, format).tz(tz[timezone]);
    this.timezone = tz[timezone];
    return this;
  }
  toString(format = defaultFormat, timezone = 'GMT') {
    return this.datetime.tz(tz[timezone]).format(format);
  }
  addDays(number) {
    if (arguments.length !== 1) throw new Error('addDays require 1 number argument');
    if (typeof number !== 'number') throw new Error('addDays argument is not typeof number');
    this.datetime.add(number, 'days');
    return this;
  }
  addHours(number) {
    throw new Error('addHours undefined');
  }
  addMinutes(number) {
    throw new Error('addMinutes undefined');
  }
  addMonth(number) {
    throw new Error('addMonth undefined');
  }
  addSeconds(number) {
    throw new Error('addSeconds undefined');
  }
  addYears(number) {
    throw new Error('addYears undefined');
  }
  static compare(dateTimeOffsetA, dateTimeOffsetB) {
    throw new Error('static compare undefined');
  }
  compareTo(datetimeOffset) {
    throw new Error('compareTo undefined');
  }
  equals(datetimeOffset) {
    throw new Error('equals undefined');
  }
  static equals(datetimeOffsetA, dateTimeOffsetB) {
    throw new Error('static equals undefined');
  }
}
