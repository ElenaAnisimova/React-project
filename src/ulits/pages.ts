export const getTotalCount = (totalCount: number, limit: number) => {
  return Math.ceil(totalCount / limit);
};
