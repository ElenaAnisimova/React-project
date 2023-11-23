import Loader from '../Loaders/Loader';
import SearchItem from '../SearchItem/SearchItem';
import { useSelector } from 'react-redux';
import { RootState } from '../../ulits/states/store';
import { dataAPI } from '../../ulits/API/api';
import { setCurrCharacter } from '../../ulits/states/reducers/currCharacterReducers';
import { setOpenDetails } from '../../ulits/states/reducers/openDetailsReducers';
import { useDispatch } from 'react-redux';

export default function SearchResults() {
  const query = useSelector((state: RootState) => state.search.query);
  const limit = useSelector((state: RootState) => state.limit.limit);
  const currPage = useSelector((state: RootState) => state.page.currPage);
  const dispatch = useDispatch();
  const { data, isLoading, isFetching } = dataAPI.useFetchAllCharactersQuery({
    searchStr: query,
    limit,
    page: currPage,
  });

  function showDetails(id: string) {
    dispatch(setCurrCharacter(id));
    dispatch(setOpenDetails(true));
  }

  return (
    <div className="wrapper">
      {isLoading || isFetching ? (
        <Loader />
      ) : (
        data &&
        data.docs.map((result, index: number) => (
          <SearchItem
            key={index}
            searchResults={result}
            showDetails={showDetails}
          />
        ))
      )}
    </div>
  );
}
