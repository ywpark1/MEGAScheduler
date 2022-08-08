export const getFormattedDate = (dateString: string) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  const hour = ("0" + date.getHours()).slice(-2);
  const min = ("0" + date.getMinutes()).slice(-2);
  const seg = ("0" + date.getSeconds()).slice(-2);
  return year + "-" + month + "-" + day + " " + hour + ":" + min + ":" + seg;
};

export const getDateFileName = (dateString: string) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  return year + "-" + month + "-" + day;
};

export const getAppointmentHours = (timeDifference: number) => {
  return timeDifference / (1000 * 60 * 60);
};
