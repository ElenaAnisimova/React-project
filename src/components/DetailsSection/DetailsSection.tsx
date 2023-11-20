import { CloseButton } from '../Buttons/CloseButton';
import DetailsLoader from '../Loaders/DetailsLoader';
import { characterAPI } from '../../ulits/API/api';
import { useSelector } from 'react-redux';
import { RootState } from '../../ulits/states/store';
import { setOpenDetails } from '../../ulits/states/reducers/openDetailsReducers';
import { useDispatch } from 'react-redux';
export default function DetailsSection() {
  const currCharacter = useSelector(
    (state: RootState) => state.currCharacter.currCharacter
  );
  const dispatch = useDispatch();
  const { data, isLoading } = characterAPI.useFetchAllCharactersQuery({
    id: currCharacter,
  });

  return (
    <aside className="details">
      <CloseButton closeDetails={() => dispatch(setOpenDetails(false))}>
        Close Details
      </CloseButton>
      {isLoading ? (
        <div className="loader-wrapper">
          <DetailsLoader></DetailsLoader>
        </div>
      ) : (
        <div className="search-item__detailed">
          <h4>{data?.docs[0].name}</h4>
          <p>Race: {data?.docs[0].race}</p>
          <p>Birth year: {data?.docs[0].birth}</p>
          <p>Height: {data?.docs[0].height}</p>
          <p>Spouse: {data?.docs[0].spouse}</p>
        </div>
      )}
    </aside>
  );
}
