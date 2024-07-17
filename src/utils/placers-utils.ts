export const calculateOrdinal = (position: number) => {
  if (position === 1) {
    return "1st";
  } else if (position === 2) {
    return "2nd";
  } else if (position === 3) {
    return "3rd";
  } else {
    return `${position}th`;
  }
};
