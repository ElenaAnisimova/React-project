import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { SearchResultType } from "../components/types/SearchResultsTypes";
import SearchItem from "../components/SearchItem";
import { APISearch } from "./api/api";
import SearchBar from "../components/SearchBar";
import { useState } from "react";
import { useAppSelector } from "../ulits/states/store";
import { RootState } from "../ulits/states/store";
import { wrapper } from "../ulits/states/store";

interface ReviewsPageProps {
  data: SearchResultType[];
}

const ReviewsPage: React.FC<ReviewsPageProps> = ({ data }) => {
  // const [currQuery, setCurrQuery] = useState('');

  return (
    <div>
      <Head>
        <title>Lord of the Rings API Search</title>
        <meta name="title" content="LOTR API" />
      </Head>
      <div>
        <SearchBar></SearchBar>
        <h2>Search results</h2>
        <div className="wrapper">
          {data &&
            data.map((result: SearchResultType, index: number) => (
              <SearchItem
                key={index}
                searchResults={result}
                // showDetails={showDetails}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

// export async function getServerSideProps1() {
//   const query = useAppSelector((state: RootState) => state.search.query);
//   const data = await APISearch(query, 10, 1);

//   return {
//     props: {
//       data: data.docs,
//     },
//   };
// }
export default ReviewsPage;


export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const query = store.getState().search.query;
    const data = await APISearch(query, 10, 1);

    return {
      props: {
        data: data.docs,
      },
    };
  }
);
