import momentTimezone from 'moment-timezone';
import tz from './timezone-consts';
import error from './error-consts';

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
    if (!tz[timezone]) throw new Error(error.UNSUPPORTED_TZ);
    return this.datetime.tz(tz[timezone]).format(format);
  }
  addMonth(number) {
    if (arguments.length !== 1) throw new Error(error.REQUIRE_MORE_ARG);
    if (typeof number !== 'number') throw new Error(error.REQUIRE_NUMBER_ARG);
    this.datetime.add(number, 'months');
    return this;
  }
  addDays(number) {
    if (arguments.length !== 1) throw new Error(error.REQUIRE_MORE_ARG);
    if (typeof number !== 'number') throw new Error(error.REQUIRE_NUMBER_ARG);
    this.datetime.add(number, 'days');
    return this;
  }
  addHours(number) {
    if (arguments.length !== 1) throw new Error(error.REQUIRE_MORE_ARG);
    if (typeof number !== 'number') throw new Error(error.REQUIRE_NUMBER_ARG);
    this.datetime.add(number, 'hours');
    return this;
  }
  addMinutes(number) {
    throw new Error('addMinutes undefined');
  }
  addSeconds(number) {
    if (arguments.length !== 1) throw new Error(error.REQUIRE_MORE_ARG);
    if (typeof number !== 'number') throw new Error(error.REQUIRE_NUMBER_ARG);
    this.datetime.add(number, 'seconds');
    return this;
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
