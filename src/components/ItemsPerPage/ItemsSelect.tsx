/* eslint-disable @typescript-eslint/no-unused-vars */
import { ItemsSelectProps } from './ItemsSelectTypes';
import { PAGINATION_FILTERS } from './ItemsSelectVariables';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../ulits/states/store';
import { setLimit } from '../../ulits/states/reducers';

export default function ItemsSelect() {
  const dispatch = useDispatch();
  const limit = useSelector((state: RootState) => state.limit.limit);
  function changeItemsLimit(event: React.ChangeEvent<HTMLSelectElement>) {
    dispatch(setLimit(Number(event.target.value)));
    console.log(limit);

    // setCurrentPage(1);
    // navigate(`/results/${1}`);
  }
  return (
    <div className="per-page">
      <p>Items per page:</p>
      <select defaultValue={10} onChange={changeItemsLimit}>
        {PAGINATION_FILTERS.map((item, i) => (
          <option key={i} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
