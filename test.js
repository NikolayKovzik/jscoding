function secondsCalc(seconds) {
  return (seconds == 0) ? 'now' : (seconds == 1) ? `1 second` : `${seconds} seconds`
}

function minutesCalc(minutes, seconds) {
  let res = (minutes == 1) ? `1 minute` : `${minutes} minutes`
  if (seconds) {
    res += ` and ${secondsCalc(seconds)}`
  }
  return res;
}

function hoursCalc(hours, minutes, seconds) {
  let res = (hours == 1) ? `1 hour` : `${hours} hours`
  if (minutes) {
    res += (seconds) ? `, ${minutesCalc(minutes, seconds)}` : ` and ${minutesCalc(minutes, seconds)}`
  } else if (seconds) {
    res += ` and ${secondsCalc(seconds)}`
  }
  return res;
}

function daysCalc(days, hours, minutes, seconds) {
  let res = (days == 1) ? `1 day` : `${days} days`
  if (hours) {
    res += (minutes||seconds) ? `, ${hoursCalc(hours, minutes, seconds)}` : ` and ${hoursCalc(hours, minutes, seconds)}`
  } else if (minutes) {
    res += (seconds) ? `, ${minutesCalc(minutes, seconds)}` : ` and ${minutesCalc(minutes, seconds)}`
  } else if (seconds) {
    res += ` and ${secondsCalc(seconds)}`
  }
  return res;
}

function yearsCalc(years, days, hours, minutes, seconds) {
  let res = (years == 1) ? `1 year` : `${years} years`
  if (days) {
    res += (hours||minutes||seconds) ? `, ${daysCalc(days, hours, minutes, seconds)}` : ` and ${daysCalc(days, hours, minutes, seconds)}`
  } else if (hours) {
    res += (minutes||seconds) ? `, ${hoursCalc(hours, minutes, seconds)}` : ` and ${hoursCalc(hours, minutes, seconds)}`
  } else if (minutes) {
    res += (seconds) ? `, ${minutesCalc(minutes, seconds)}` : ` and ${minutesCalc(minutes, seconds)}`
  } else if (seconds) {
    res += ` and ${secondsCalc(seconds)}`
  }
  return res;
}

function formatDuration(seconds) {
  if (seconds < 60) {
    return secondsCalc(seconds);
  }

  let minutes = Math.floor(seconds / 60);
  seconds = seconds % 60;

  if (minutes < 60) {
    return minutesCalc(minutes, seconds)
  }

  let hours = Math.floor(minutes / 60);
  minutes = minutes % 60;

  if (hours < 24) {
    return hoursCalc(hours, minutes, seconds)
  }

  let days = Math.floor(hours / 24);
  hours = hours % 24;

  if (days < 365) {
    return daysCalc(days, hours, minutes, seconds)
  }

  let years = Math.floor(days / 365);
  days = days % 365;

  return yearsCalc(years, days, hours, minutes, seconds)
}



console.log(formatDuration(8643600))