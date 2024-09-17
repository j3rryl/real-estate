export const truncateText = (description: string, wordLimit: number = 120) => {
  return description.length > wordLimit
    ? description.slice(0, wordLimit) + "..."
    : description;
};
