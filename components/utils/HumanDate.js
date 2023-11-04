export const HumanDate = ({ date }) => new Date(date.replace(/-/g, '/')).toLocaleDateString('en-US', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timeZone: 'America/Chicago',
});

export default HumanDate;
