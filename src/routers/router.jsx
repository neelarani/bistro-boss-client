import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home/Home/Home';
import Menu from '../pages/Menu/Menu';
import Order from '../pages/Order/Order';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';
import Secret from '../shared/Secret/Secret';
import PrivetRoute from './PrivetRoute';
import Dashboard from '../layouts/Dashboard/Dashboard';
import Cart from '../pages/Dashboard/Cart/Cart';
import AllUsers from '../layouts/Dashboard/AllUsers/AllUsers';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'menu',
        element: <Menu></Menu>,
      },
      {
        path: 'order/:category',
        element: <Order></Order>,
      },
      {
        path: 'login',
        element: <Login></Login>,
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>,
      },
      {
        path: 'secret',
        element: (
          <PrivetRoute>
            <Secret></Secret>,
          </PrivetRoute>
        ),
      },
    ],
  },
  {
    path: 'dashboard',
    element: (
      <PrivetRoute>
        <Dashboard></Dashboard>
      </PrivetRoute>
    ),
    children: [
      {
        path: 'cart',
        element: <Cart></Cart>,
      },
      // admin routes
      {
        path: 'users',
        element: <AllUsers></AllUsers>,
      },
    ],
  },
]);
export default router;
