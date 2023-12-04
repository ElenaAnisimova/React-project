import App from '../App';
import { createBrowserRouter } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import ReactHookFormPage from '../pages/ReactHookFormPage';
import UncontrolledForm from '../pages/UncontrolledFormPage';

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
        element: <ReactHookFormPage />,
      },
      {
        path: '/uncontrolled-form',
        element: <UncontrolledForm />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
