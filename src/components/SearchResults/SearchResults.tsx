import Loader from '../Loaders/Loader';
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
          <div
            className="search-item"
            key={index}
            onClick={() => showDetails(result._id)}
          >
            <h4>{result.name}</h4>
            <p>Race: {result.race}</p>
            <p>Birth year: {result.birth}</p>
            <p>Height: {result.height}</p>
            <p>Spouse: {result.spouse}</p>
          </div>
        ))
      )}
    </div>
  );
}
