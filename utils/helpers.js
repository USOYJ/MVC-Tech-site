function formatDate(dt) {
  const date = new Date(dt);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  
  return `${month}/${day}/${year}`;
}

module.exports = {
  formatDate
};