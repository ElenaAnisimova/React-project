import App from '../App';
import { createBrowserRouter } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import ReactHookForm from '../pages/ReactHookForm';
import UncontrolledForm from '../pages/UncontrolledForm';

const routes = [
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: 'react-hook-form',
        element: <ReactHookForm />,
      },
      {
        path: '/uncontrolled-form',
        element: <UncontrolledForm />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
