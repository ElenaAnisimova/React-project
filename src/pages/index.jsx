import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
// import APISearch from './api/api'



const Home = ({ reviews }) => {
  return (
    <div>
      <Head>
       <title>Жирные бургеры | Главная</title>
         <meta name="title" content="Жирные бургеры" />
       </Head>
      <div className={styles.container}>
       <div>
          <h1>Отзывы клиентов</h1>
          <div className="reviews">
             {!!reviews.length &&
              reviews.map((res) => {
                return (
                  <div key={res.id} className="review">
                    {res.id} {`${res.body.slice(0, 90)}...`}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await response.json();

  return {
    props: {
      reviews: data
    },
  };
}
export default Home;

const API_KEY = "_09GhfKA2Ge1Fv9vJdM1";

// export async function APISearch(
//   searchStr: string,
//   limit: number,
//   page: number
// ) {
//   const headers = { Authorization: `Bearer ${API_KEY}` };
//   const response: Response = await fetch(
//     `https://the-one-api.dev/v2/character?name=/${searchStr.trim()}/i&limit=${limit}&page=${page}`,
//     {
//       headers,
//     }
//   );
//   return response.json();
// }