import { ItemsSelectProps } from './ItemsSelectTypes';
import { PAGINATION_FILTERS } from './ItemsSelectVariables';

export default function ItemsSelect({ getValue }: ItemsSelectProps) {
  return (
    <div className="per-page">
      <p>Items per page:</p>
      <select defaultValue={10} onChange={getValue}>
        {PAGINATION_FILTERS.map((item, i) => (
          <option key={i} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
