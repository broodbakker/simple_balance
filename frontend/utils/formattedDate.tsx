const formattedDate = () => {
  const d = new Date();
  return [d.getFullYear(), d.getMonth() + 1, d.getDate()]
    .map(n => (n < 10 ? `0${n}` : `${n}`))
    .join("-");
};

export default formattedDate;
