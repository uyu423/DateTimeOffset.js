# datetime-offset.js
Javascript Class like C# DateTimeOffset Structure (mapping momnet-timezome)

## Default Usage
```javascript
import DateTimeOffset from 'datetime-offset';

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

### addDays(number)
- To be developed

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
