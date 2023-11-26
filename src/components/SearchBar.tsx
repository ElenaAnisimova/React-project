import { placeholderText } from "./types/SearchPageVariables";
import { useAppDispatch, useAppSelector } from "../ulits/states/store";
import { setQuery } from "../ulits/states/reducers/queryReducers";
import { useState } from "react";
import { SearchButton } from "./Buttons/SearchButton";
import { log } from "console";

export default function SearchBar() {
  const [currQuery, setCurrQuery] = useState('');
  const dispatch = useAppDispatch();
  // const navigate = useNavigate();
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setCurrQuery(event.target.value);
  };
  // const makeError = () => {
  //   dispatch(setHasError(true));
  //   throw new Error('New Error');
  // };

  function sendRequest() {
    dispatch(setQuery(currQuery));
    console.log(currQuery);
    
    // dispatch(setCurrPage(DEFAULT_VALUES.DEFAULT_CURRENT_PAGE));
    // navigate(`/results/${DEFAULT_VALUES.DEFAULT_CURRENT_PAGE}`);
  }
  return (
    <form>
      <div>search bar</div>
      <input
        type="text"
        className="search-input"
        value={currQuery}
        onChange={handleInputChange}
        placeholder={placeholderText}
      />
       <SearchButton sendRequest={sendRequest}>Search</SearchButton>
      {/* 
      <ErrorButton makeError={makeError}>Try Error</ErrorButton> */}
    </form>
  );
}
