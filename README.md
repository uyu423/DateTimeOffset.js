# datetime-offset.js
Javascript Class like C# DateTimeOffset Structure (mapping momnet-timezome)

## Default Usage
```javascript
import DateTimeOffset from 'datetime-offset';
// if using Require
// const DateTimeOffset = require('datetime-offset').default

const t1 = new DateTimeOffset(new Date());
const t2 = new DateTimeOffset('2017-04-10 00:00:00', {
  format: 'YYYY-MM-DD HH:mm:ss',
  // default timezone UTC
})
const t3 = new DateTimeOffset('2017-04-10 00:00:00', {
  format: 'YYYY-MM-DD HH:mm:ss',
  timezone: 'UTC' // same 'GMT', 'Atlantic/Reykjavik'
})
const t4 = new DateTimeOffset('2017-04-10 09:00:00', {
  format: 'YYYY-MM-DD HH:mm:ss',
  timezone: 'KST', // same 'UTC+9', 'Asia/Seoul'
});
```

## Supported Timezones
- UTC (Same GMT, Atlantic/Reykjavik)
- KST (Smae UTC+9, Asia/Seoul)
- EDT (Same UTC-4, America/New_York)
- PDT (Same UTC-7, America/Vancouver)
- JST (Same UTC+9, Asia/Tokyo)
- CST (Smae UTC+8, Asia/Shanghai)

- If you have a timezone you need, please add it to `timezone-consts.js` using http://momentjs.com/timezone.

## Constructor
### `DateTimeOffset(datetime, options)`;
- date : Supported ISO 8601 strings [#](http://momentjs.com/docs/#/parsing/string/), if you using custom fomarts, refer `ptions.format`
- options : object
  - format : refer http://momentjs.com/docs/#/parsing/string-format/
  - timezone : refer Supported Timezones

## Methods
### `toString(format = 'YYYY-MM-DD HH:mm:ss', timezone = 'GMT')`
- **The order of the `format` and `timezone` parameters has changed since version 0.3.0.**
- Default `format` : YYYY-MM-DD HH:mm:ss
- Default `timezone` : GMT

```javascript
const t2 = new DateTimeOffset(new Date('2017-04-10'));
console.log(t2.timezone) // Atlantic/Reykjavik
t2.toString()  //  2017-04-10 00:00:00
t2.toString('UTC')  //  2017-04-10 00:00:00
t2.toString('KST')  //  2017-04-10 09:00:00
t2.toString('UTC', 'YYYY-MM-DD')  //  2017-04-10
t2.toString(undefined, 'YYYY-MM-DD')  //  2017-04-10 timezone default set 'UTC'

const t4 = new DateTimeOffset('2017-04-10 09:00:00', {
  format: 'YYYY-MM-DD HH:mm:ss',
  timezone: 'KST',
});
console.log(t4.timezone) // Asia/Seoul
t4.toString()  //  2017-04-10 00:00:00
t4.toString('UTC')  //  2017-04-10 00:00:00
t4.toString('KST')  //  2017-04-10 09:00:00
t4.toString('UTC', 'YYYY-MM-DD')  //  2017-04-10
t4.toString(undefined, 'YYYY-MM-DD')  //  2017-04-10 timezone default set 'UTC'
```

### `addYears(number)`
```javascript
const t = new DateTimeOffset(new Date('2017-04-10'));
console.log(t.addYears(10).toString()) // 2027-04-10 00:00:00
console.log(t.addYears(-20).toString()) // 2007-04-10 00:00:00
t.addYears(1, 1) // throw Error
t.addYears('string') // throw Error
t.addYears(null) // throw Error
t.addYears(undefined) // throw Error
```

### `addMonth(number)`
```javascript
const t = new DateTimeOffset(new Date('2017-04-10'));
console.log(t.addMonth(5).toString()) // 2017-09-10 00:00:00
console.log(t.addMonth(24).toString()) // 2019-09-10 00:00:00
console.log(t.addMonth(-7).toString()) // 2019-02-10 00:00:00
console.log(t.addMonth(-12).toString()) // 2018-02-10 00:00:00
t.addMonth(1, 1) // throw Error
t.addMonth('string') // throw Error
t.addMonth(null) // throw Error
t.addMonth(undefined) // throw Error
```

### `addDays(number)`
```javascript
const t = new DateTimeOffset(new Date('2017-04-10'));
console.log(t.addDays(10).toString()); // 2017-04-20 00:00:00
console.log(t.addDays(-5).toString()); // 2017-04-15 00:00:00
t.addDays(1, 1) // throw Error
t.addDays('string') // throw Error
t.addDays(null) // throw Error
t.addDays(undefined) // throw Error
```

### `addHours(number)`
```javascript
const t = new DateTimeOffset(new Date('2017-04-10'));
console.log(t.addHours(10).toString()) // 2017-04-10 10:00:00
console.log(t.addHours(14).toString()) // 2017-04-11 00:00:00
console.log(t.addHours(-10).toString()) // 2017-04-10 14:00:00
t.addHours(1, 1) // throw Error
t.addHours('string') // throw Error
t.addHours(null) // throw Error
t.addHours(undefined) // throw Error
```

### `addMinutes(number)`
```javascript
const t = new DateTimeOffset(new Date('2017-04-10'));
console.log(t.addMinutes(10).toString()) // 2017-04-10 00:10:00
console.log(t.addMinutes(60).toString()) // 2017-04-00 01:10:00
console.log(t.addMinutes(-130).toString()) // 2017-04-09 23:00:00
t.addMinutes(1, 1) // throw Error
t.addMinutes('string') // throw Error
t.addMinutes(null) // throw Error
t.addMinutes(undefined) // throw Error
```

### `addSeconds(number)`
```javascript
const t = new DateTimeOffset(new Date('2017-04-10'));
console.log(t.addSeconds(10).toString()) // 2017-04-10 00:00:10
console.log(t.addSeconds(60).toString()) // 2017-04-10 00:01:10
console.log(t.addSeconds(-130).toString()) // 2017-04-09 23:59:00
t.addSeconds(1, 1) // throw Error
t.addSeconds('string') // throw Error
t.addSeconds(null) // throw Error
t.addSeconds(undefined) // throw Error
```

### `static compare(DateTimeOffset, DateTimeOffset)`
- To be developed

### `compareTo(DateTimeOffset)`
- To be developed

### `equals(DateTimeOffset)`
- To be developed

### `static equals(DateTimeOffset, DateTimeOffset)`
- To be developed
