export const convertDate = (dateStr) => {
  let date = new Date(dateStr);

  let day = date.getDate().toString();
  if (day.length < 2) {
    day = 0 + day;
  }

  let monthIndex = date.getMonth();

  let month = (date.getMonth() + 1).toString();
  if (month.length < 2) {
    month = 0 + month;
  }

  let year = date.getFullYear().toString();

  let hour = date.getHours().toString();
  if (hour.length < 2) {
    hour = 0 + hour;
  }

  let minute = date.getMinutes().toString();
  if (minute.length < 2) {
    minute = 0 + minute;
  }

  let second = date.getSeconds().toString();
  if (second.length < 2) {
    second = 0 + second;
  }

  return { day, month, monthIndex, year, hour, minute, second };
};
