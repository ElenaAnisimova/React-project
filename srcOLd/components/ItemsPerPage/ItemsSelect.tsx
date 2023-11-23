import { PAGINATION_FILTERS } from './ItemsSelectVariables';
import { DEFAULT_VALUES } from '../../pages/SearchPageVariables';
import { useDispatch } from 'react-redux';
import { setLimit } from '../../ulits/states/reducers/limitReducers';
import { setCurrPage } from '../../ulits/states/reducers/pageReducers';
import { useNavigate } from 'react-router';

export default function ItemsSelect() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function changeItemsLimit(event: React.ChangeEvent<HTMLSelectElement>) {
    dispatch(setLimit(Number(event.target.value)));
    dispatch(setCurrPage(DEFAULT_VALUES.DEFAULT_CURRENT_PAGE));
    navigate(`/results/${DEFAULT_VALUES.DEFAULT_CURRENT_PAGE}`);
  }
  return (
    <div className="per-page">
      <p>Items per page:</p>
      <select
        data-testid="items-select"
        defaultValue={DEFAULT_VALUES.DEFAULT_LIMIT}
        onChange={changeItemsLimit}
      >
        {PAGINATION_FILTERS.map((item, i) => (
          <option key={i} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
