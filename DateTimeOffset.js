import momentTimezone from 'moment-timezone';
import tz from './timezone-consts';

const moment = momentTimezone.tz.setDefault(tz.GMT);

export default class DateTimeOffset {
  constructor(Date, timezone = tz.UTC) {
    this.datetime = moment(Date).tz(timezone);
    return this;
  }
  addDays(number) {
    throw new Error('addDays undefined');
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
  toString(format, timzone = tz.UTC) {
    throw new Error('static equals undefined');
  }
}
