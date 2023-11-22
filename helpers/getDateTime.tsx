export const getDateTime = (date?: Date) => {
  // Create a new Date object
  var currentDate = new Date(date ?? "");

  // Get individual components of the date
  var year = currentDate.getFullYear();
  var month = currentDate.getMonth() + 1; // Months are zero-based, so add 1
  var day = currentDate.getDate();
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds();

  // Format the date string in a desired way
  var formattedDateString = `${year}-${month < 10 ? "0" + month : month}-${
    day < 10 ? "0" + day : day
  } ${hours < 10 ? "0" + hours : hours}:${
    minutes < 10 ? "0" + minutes : minutes
  }:${seconds < 10 ? "0" + seconds : seconds}`;

  return formattedDateString;
};
