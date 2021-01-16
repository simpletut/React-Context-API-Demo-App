
export const removeFromArray = (idsToRemove, prevArr) => {
  if (!Array.isArray(idsToRemove) || !Array.isArray(prevArr)) return;

  return prevArr.filter(({ id }) => {
    return !idsToRemove.includes(id);
  });
}