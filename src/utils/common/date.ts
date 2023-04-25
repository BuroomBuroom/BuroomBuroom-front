export const getNextFriday = (): Date => {
  const today = new Date();
  today.setDate(today.getDate() + (today.getDay() === 6 ? 5 : 5 - today.getDay()));
  return today;
};
