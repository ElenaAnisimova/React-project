import { getPagesNumbers } from '../../ulits/helpers/pagesFunction';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../ulits/states/store';
import { setCurrPage } from '../../ulits/states/reducers/pageReducers';
import { dataAPI } from '../../ulits/API/api';
import { useNavigate } from 'react-router';

export default function Pagination() {
  const query = useSelector((state: RootState) => state.search.query);
  const limit = useSelector((state: RootState) => state.limit.limit);
  const currPage = useSelector((state: RootState) => state.page.currPage);
  const navigate = useNavigate();
  const { data, isLoading } = dataAPI.useFetchAllCharactersQuery({
    searchStr: query,
    limit,
    page: currPage,
  });
  const dispatch = useDispatch();
  const totalPagesData = data?.pages;
  const pagesArr = getPagesNumbers(totalPagesData);
  const changePage = (page: number) => {
    dispatch(setCurrPage(page));
    navigate(`/results/${page}`);
  };
  return (
    <div className="pagination__wrapper">
      {isLoading
        ? null
        : pagesArr.map((page) => (
            <button
              className={page === currPage ? 'page page__current' : 'page'}
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
