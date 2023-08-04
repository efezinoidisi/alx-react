import { getFooterCopy, getFullYear, getLatestNotification } from './utils';

describe('getFooterCopy', () => {
  it('should return the appropriate footer text', () => {
    const footer = getFooterCopy(true);
    const footerTwo = getFooterCopy(false);
    expect(footer).toBe('Holberton School');
    expect(footerTwo).toBe('Holberton School main dashboard');
  });
});

describe('getFullYear', () => {
  it('should return the current year', () => {
    const date = new Date();
    const currentYear = getFullYear();
    expect(currentYear).toBe(date.getFullYear());
  });
});

describe('getLatestNotification', () => {
  it('should return the appropriate string', () => {
    const str = '<strong>Urgent requirement</strong> - complete by EOD';
    const notif = getLatestNotification();
    expect(notif).toBe(str);
  });
});
