export const formatDate = (isoString) => {
  const options = { year: "numeric", month: "short", day: "numeric" };
  return new Date(isoString).toLocaleDateString(undefined, options);
};
