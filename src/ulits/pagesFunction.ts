export const getPagesNumbers = (totalPages: number) => {
  const pagesArr = [];
  for (let i = 0; i < totalPages; i++) {
    pagesArr.push(i + 1);
  }
  return pagesArr;
};
