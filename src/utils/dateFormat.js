import moment from 'moment'

export const AddMonthsIntoDate = (date, months) => {
  var d = date.getDate();
  date.setMonth(date.getMonth() + +months);
  if (date.getDate() != d) {
    date.setDate(0);
  }
  return date;
}

export const isMoreThan30DaysAgo = (date) => {
  //                   days  hours min  sec  ms
  const thirtyDaysInMs = 30 * 24 * 60 * 60 * 1000;
  const timestampThirtyDaysAgo = new Date().getTime() - thirtyDaysInMs;
  if (timestampThirtyDaysAgo > date) {
    return true;
  } else {
    return false;
  }
}

export const Years = (startYear) => {
  const currentYear = new Date().getFullYear() -1, years = [];
  startYear = startYear || 1920;
  while (startYear <= currentYear) {
    years.push(startYear++);
  }
  return years;
}

export const Days = (year, month) => {
  const totalMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const monthIndex = totalMonths.findIndex(mon => mon == month)
  const totalNum = new Date(year, monthIndex + 1, 0).getDate()
  const days = Array.from(
    { length: (totalNum - 1) / 1 + 1 },
    (value, index) => 1 + index * 1
  )
  return days
}