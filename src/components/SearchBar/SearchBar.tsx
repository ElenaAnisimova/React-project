import { SearchButton } from '../Buttons/SearchButton';
import { ErrorButton } from '../Buttons/ErrorButton';
import { SearchBarProps } from './SearchBarTypes';
import { useContext } from 'react';
import { SearchContext } from '../../ulits/contexts/SearchContext';

export default function SearchBar({
  placeholder,
  sendRequest,
  makeError,
  type,
  className,
}: SearchBarProps) {
  const { query, setQuery } = useContext(SearchContext);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setQuery(event.target.value);
  };

  return (
    <form>
      <input
        type={type}
        className={className}
        value={query}
        onChange={handleInputChange}
        placeholder={placeholder}
      />
      <SearchButton sendRequest={sendRequest}>Search</SearchButton>
      <ErrorButton makeError={makeError}>Try Error</ErrorButton>
    </form>
  );
}
