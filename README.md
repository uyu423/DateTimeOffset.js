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
- Default `format` : YYYY-MM-DD HH:mm:ss
- Default `timezone` : GMT

```javascript
const t2 = new DateTimeOffset(new Date('2017-04-10'));
console.log(t2.timezone) // Atlantic/Reykjavik
t2.toString()  //  2017-04-10 00:00:00
t2.toString(undefined, 'UTC')  //  2017-04-10 00:00:00
t2.toString(undefined, 'KST')  //  2017-04-10 09:00:00
t2.toString('YYYY-MM-DD')  //  2017-04-10

const t4 = new DateTimeOffset('2017-04-10 09:00:00', {
  format: 'YYYY-MM-DD HH:mm:ss',
  timezone: 'KST',
});
console.log(t4.timezone) // Asia/Seoul
t4.toString()  //  2017-04-10 00:00:00
t4.toString(undefined, 'UTC')  //  2017-04-10 00:00:00
t4.toString(undefined, 'KST')  //  2017-04-10 09:00:00
t4.toString('YYYY-MM-DD')  //  2017-04-10
```

### `addDays(number)`
```javascript
const t = new DateTimeOffset(new Date(2017-04-10));
console.log(t.addDays(10).toString()); // 2017-04-20 00:00:00
console.log(t.addDays(-5).toString()); // 2017-04-15 00:00:00
t.addDays(1, 1) // throw Error
t.addDays('string') // throw Error
t.addDays(null) // throw Error
t.addDays(undefined) // throw Error
```

### addHours(number)
- To be developed

### addMinutes(number)
- To be developed

### addMonth(number)
- To be developed

### addSeconds(number)
- To be developed

### addYears(number)
- To be developed

### static compare(DateTimeOffset, DateTimeOffset)
- To be developed

### compareTo(DateTimeOffset)
- To be developed

### equals(DateTimeOffset)
- To be developed

### static equals(DateTimeOffset, DateTimeOffset)
- To be developed
