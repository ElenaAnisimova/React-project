export const getPagesNumbers = (totalPages: number | undefined) => {
  const pagesArr = [];
  if (totalPages !== undefined) {
    for (let i = 0; i < totalPages; i++) {
      pagesArr.push(i + 1);
    }
  }
  return pagesArr;
};
