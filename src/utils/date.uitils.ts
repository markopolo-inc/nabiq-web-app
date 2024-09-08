import moment from 'moment-timezone';

export function formatTimeAgo(dateTimeString) {
  const date = moment(dateTimeString);
  const now = moment();
  const diffInSeconds = now.diff(date, 'seconds');
  const diffInMinutes = now.diff(date, 'minutes');
  const diffInHours = now.diff(date, 'hours');
  const diffInDays = now.diff(date, 'days');

  if (diffInSeconds < 60) {
    return 'Just now, Today';
  } else if (diffInMinutes < 60) {
    return `${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''} ago, Today`;
  } else if (diffInHours < 24) {
    return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago, Today`;
  } else if (diffInDays < 1) {
    return `${date.format('hh:mm A')}, Yesterday`;
  } else if (diffInDays < 2) {
    return `${date.format('hh:mm A')}, Yesterday`;
  } else if (diffInDays < 3) {
    return `${date.format('hh:mm A')}, ${date.format('DD MMM, YYYY')}`;
  } else {
    return `${date.format('hh:mm A')}, ${date.format('DD MMM, YYYY')}`;
  }
}
