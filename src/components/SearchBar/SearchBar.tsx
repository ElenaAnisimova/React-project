import { SearchButton } from '../Buttons/SearchButton';
import { ErrorButton } from '../Buttons/ErrorButton';
import { SearchBarProps } from './SearchBarTypes';

export default function SearchBar({
  query,
  placeholder,
  handleInput,
  sendRequest,
  makeError,
  type,
  className,
}: SearchBarProps) {
  return (
    <form>
      <input
        type={type}
        className={className}
        value={query}
        onChange={handleInput}
        placeholder={placeholder}
      />
      <SearchButton sendRequest={sendRequest} text="Search"></SearchButton>
      <ErrorButton makeError={makeError} text="Try Error"></ErrorButton>
    </form>
  );
}
