import SearchBar from '../components/SearchBar/SearchBar';
import SearchResults from '../components/SearchResults/SearchResults';
import Pagination from '../components/Pagination/Pagination';
import ItemsSelect from '../components/ItemsPerPage/ItemsSelect';
import DetailsSection from '../components/DetailsSection/DetailsSection';
import { useSelector } from 'react-redux';
import { RootState } from '../ulits/states/store';
import { useEffect } from 'react';
// import Loader from '../components/Loaders/Loader';

export function SearchPage() {
  // useEffect(() => {
  //   const savedQuery = localStorage.getItem('searchQuery');
  //   const queryString = savedQuery ? savedQuery : query;
  //   getSearchResults(queryString, limit, currentPage);
  // }, []);
  const hasError = useSelector((state: RootState) => state.hasError.hasError);
  useEffect(() => {
    if (hasError) {
      throw new Error('oh no! It is an Error!');
    }
  }, [hasError]);

  // async function sendRequest() {
  //   setCurrentPage(1);
  //   getSearchResults(query, limit, currentPage);
  //   navigate('/results/1');
  //   localStorage.setItem('searchQuery', query.trim());
  // }
  const openDetails = useSelector(
    (state: RootState) => state.openDetails.openDetails
  );
  return (
    <div>
      <SearchBar></SearchBar>
      <ItemsSelect></ItemsSelect>
      <SearchResults />
      <Pagination />
      {/* <DetailsSection /> */}
      {openDetails ? <DetailsSection /> : null}
    </div>
  );
}

export default SearchPage;
