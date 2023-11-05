import './App.css';

import {
  // createBrowserRouter,
  // createRoutesFromElements,
  // Outlet,
  Route,
  // Router,
  Routes,
  BrowserRouter,

  // // Link,
  // RouterProvider,
  // useSearchParams,
} from 'react-router-dom';
import SearchPage from './pages/SearchPage';
// import SearchResults from './components/SearchResults/SearchResults';
// import SearchBar from './components/SearchBar/SearchInput';

export function App() {
  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path="/search" element={<Root />}>
  //       <Route index element={<Search />} />
  //     </Route>
  //   )
  // );
  return (
    // <div>
    //   <RouterProvider router={router}></RouterProvider>
    // </div>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/search-lor" element={<Search />}></Route>
    //   </Routes>
    // </BrowserRouter>
    // <Search />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/results/:page" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}
// const Root = () => {
//   return (
//     <>
//       <Outlet />
//     </>
//   );
// };
export default App;
