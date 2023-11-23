import SearchBar from '../components/SearchBar/SearchBar';
import SearchResults from '../components/SearchResults/SearchResults';
import Pagination from '../components/Pagination/Pagination';
import ItemsSelect from '../components/ItemsPerPage/ItemsSelect';
import DetailsSection from '../components/DetailsSection/DetailsSection';
import { useSelector } from 'react-redux';
import { RootState } from '../ulits/states/store';
import { useEffect } from 'react';

export function SearchPage() {
  const hasError = useSelector((state: RootState) => state.hasError.hasError);
  useEffect(() => {
    if (hasError) {
      throw new Error('oh no! It is an Error!');
    }
  }, [hasError]);

  const openDetails = useSelector(
    (state: RootState) => state.openDetails.openDetails
  );
  return (
    <div>
      <SearchBar></SearchBar>
      <ItemsSelect></ItemsSelect>
      <SearchResults />
      <Pagination />
      {openDetails ? <DetailsSection /> : null}
    </div>
  );
}

export default SearchPage;
