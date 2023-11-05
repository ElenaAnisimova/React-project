export type PaginationProps = {
  totalPages: number;
  currentPage: number;
  changePage: (page: number) => void;
};
