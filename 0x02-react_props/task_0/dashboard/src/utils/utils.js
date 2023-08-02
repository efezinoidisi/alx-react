const getFullYear = () => {
  const date = new Date();
  return date.getFullYear();
};

const getFooterCopy = (isIndex) => {
  return isIndex ? 'Holberton School' : 'Holberton School main dashboard';
};

const getLatestNotification = () => {
  return '<strong>Urgent requirement</strong> - complete by EOD';
};

export { getFullYear, getFooterCopy, getLatestNotification };
