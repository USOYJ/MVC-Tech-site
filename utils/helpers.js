module.exports = {
  format_date: function (date) {
    const formattedDate = formatDate(date);
    const formattedTime = formatTime(date);
    return `${formattedDate} at ${formattedTime}`;
  },
};

function formatDate(date) {
  const d = new Date(date);
  return `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`;
}

function formatTime(date) {
  const d = new Date(date);
  const hours = d.getHours().toString().padStart(2, '0');
  const minutes = d.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}
