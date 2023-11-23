import { SearchButton } from '../Buttons/SearchButton';
import { ErrorButton } from '../Buttons/ErrorButton';
import { placeholderText } from '../../pages/SearchPageVariables';
import { useDispatch } from 'react-redux';
import { setQuery } from '../../ulits/states/reducers/queryReducers';
import { useState } from 'react';
// import { useNavigate } from 'react-router';
import { setCurrPage } from '../../ulits/states/reducers/pageReducers';
import { setHasError } from '../../ulits/states/reducers/ErrorReducers';
import { DEFAULT_VALUES } from '../../pages/SearchPageVariables';
export default function SearchBar() {
  const [currQuery, setCurrQuery] = useState('');
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setCurrQuery(event.target.value);
  };
  const makeError = () => {
    dispatch(setHasError(true));
    throw new Error('New Error');
  };

  function sendRequest() {
    dispatch(setQuery(currQuery));
    dispatch(setCurrPage(DEFAULT_VALUES.DEFAULT_CURRENT_PAGE));
    // navigate(`/results/${DEFAULT_VALUES.DEFAULT_CURRENT_PAGE}`);
  }
  return (
    <form>
      <input
        type="text"
        className="search-input"
        value={currQuery}
        onChange={handleInputChange}
        placeholder={placeholderText}
      />
      <SearchButton sendRequest={sendRequest}>Search</SearchButton>
      <ErrorButton makeError={makeError}>Try Error</ErrorButton>
    </form>
  );
}
