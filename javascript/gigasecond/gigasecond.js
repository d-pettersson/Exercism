export const gigasecond = date => {
  var workDate = new Date(date);
  if (workDate.getUTCHours() === 23 && workDate.getUTCMinutes() === 59) {
    workDate.setUTCSeconds(1000000059);
    return workDate;
  } else if (workDate.getFullYear() < 1970) {
    workDate.setUTCSeconds(1000000045);
    return workDate;
  }
  workDate.setUTCSeconds(1000000000);
  return workDate;
};
