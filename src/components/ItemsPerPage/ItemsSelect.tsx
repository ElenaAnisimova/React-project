import { ItemsSelectProps } from './ItemsSelectTypes';

export default function ItemsSelect({ getValue }: ItemsSelectProps) {
  return (
    <div className="per-page">
      <p>Items per page:</p>
      <select onChange={getValue}>
        <option value="5">5</option>
        <option selected value="10">
          10
        </option>
        <option value="15">15</option>
      </select>
    </div>
  );
}
