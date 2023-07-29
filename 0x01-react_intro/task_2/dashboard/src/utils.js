const getFullYear = () => {
  const date = new Date();
  return date.getFullYear();
};

const getFooterCopy = (isIndex) => {
  return isIndex ? 'Holberton School' : 'Holberton School main dashboard';
};

export { getFullYear, getFooterCopy };
