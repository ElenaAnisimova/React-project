import './App.css';
// import {
//   // createBrowserRouter,
//   // createRoutesFromElements,
//   // Outlet,
//   // Route,
//   // // Link,
//   // RouterProvider,
//   // useSearchParams,
// } from 'react-router-dom';
import Search from './pages/Search';
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
    <Search />
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
