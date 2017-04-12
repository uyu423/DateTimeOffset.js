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
  toString(timezone = 'GMT', format = defaultFormat) {
    if (!tz[timezone]) throw new Error(error.UNSUPPORTED_TZ);
    return this.datetime.tz(tz[timezone]).format(format);
  }
  addYears(number) {
    if (arguments.length !== 1) throw new Error(error.REQUIRE_MORE_ARG);
    if (typeof number !== 'number') throw new Error(error.REQUIRE_NUMBER_ARG);
    this.datetime.add(number, 'years');
    return this;
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
    if (arguments.length !== 1) throw new Error(error.REQUIRE_MORE_ARG);
    if (typeof number !== 'number') throw new Error(error.REQUIRE_NUMBER_ARG);
    this.datetime.add(number, 'minutes');
    return this;
  }
  addSeconds(number) {
    if (arguments.length !== 1) throw new Error(error.REQUIRE_MORE_ARG);
    if (typeof number !== 'number') throw new Error(error.REQUIRE_NUMBER_ARG);
    this.datetime.add(number, 'seconds');
    return this;
  }
  static compare(dateTimeOffsetA, dateTimeOffsetB) {
    throw new Error('static compare undefined');
  }
  compareTo(datetimeOffset) {
    if (arguments.length < 1) throw new Error(error.REQUIRE_MORE_ARG);
    if (arguments.length > 1) throw new Error(error.TOO_MANY_ARG);
    if (!(datetimeOffset instanceof DateTimeOffset)) {
      throw new Error(error.REQUIRE_DATETIMEOFFSET_ARG);
    }
    const result = this.datetime - datetimeOffset.datetime;
    return result;
  }
  equals(datetimeOffset) {
    throw new Error('equals undefined');
  }
  static equals(datetimeOffsetA, dateTimeOffsetB) {
    throw new Error('static equals undefined');
  }
}
