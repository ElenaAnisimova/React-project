import { getPagesNumbers } from '../../ulits/pagesFunction';
import { PaginationProps } from './PaginationTypes';

export default function Pagination({
  totalPages,
  currentPage,
  changePage,
}: PaginationProps) {
  const pagesArr = getPagesNumbers(totalPages);
  return (
    <div className="pagination__wrapper">
      {pagesArr.map((page) => (
        <button
          className={page === currentPage ? 'page page__current' : 'page'}
          key={page}
          type="button"
          onClick={() => changePage(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
}
