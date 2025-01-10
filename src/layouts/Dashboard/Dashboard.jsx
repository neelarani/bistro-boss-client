import { TiShoppingCart } from 'react-icons/ti';
import { NavLink, Outlet } from 'react-router-dom';
import {
  FaAd,
  FaBook,
  FaEnvelope,
  FaHome,
  FaList,
  FaUsers,
  FaUtensils,
} from 'react-icons/fa';
import { SlCalender } from 'react-icons/sl';
import { FcRating } from 'react-icons/fc';
import { RiFileList3Fill } from 'react-icons/ri';
import { IoMenu } from 'react-icons/io5';
import useCart from '../../hooks/useCart';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
  const [cart] = useCart();

  // TODO : get isAdmin value from the database
  const [isAdmin] = useAdmin();

  return (
    <div className="flex">
      {/* Dashboard side bar */}
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu p-4 text-xl font-semibold">
          {isAdmin ? (
            <>
              {' '}
              <li>
                <NavLink to={'dashboard/adminHome'}>
                  <FaHome />
                  <span>Admin Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink to={'dashboard/addItems'}>
                  <FaUtensils></FaUtensils>
                  <span>Add Items</span>
                </NavLink>
              </li>
              <li>
                <NavLink to={'dashboard/cart'}>
                  <FaList></FaList>
                  <span> Manage Items</span>
                </NavLink>
              </li>
              <li>
                <NavLink to={'dashboard/bookings'}>
                  <FaBook></FaBook>
                  <span>Manage Bookings</span>
                </NavLink>
              </li>
              <li>
                <NavLink to={'users'}>
                  <FaUsers></FaUsers>
                  <span>All Users</span>
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to={'dashboard/userHome'}>
                  <FaHome />
                  <span>User Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink to={'dashboard/reservation'}>
                  <SlCalender />
                  <span>Reservation</span>
                </NavLink>
              </li>
              <li>
                <NavLink to={'dashboard/cart'}>
                  <TiShoppingCart />
                  <span> My Cart ({cart.length})</span>
                </NavLink>
              </li>
              <li>
                <NavLink to={'dashboard/review'}>
                  <FcRating />
                  <span>Add Review</span>
                </NavLink>
              </li>
              <li>
                <NavLink to={'dashboard/bookings'}>
                  <RiFileList3Fill />
                  <span>My Bookings</span>
                </NavLink>
              </li>
            </>
          )}
          {/* shared nav links */}
          <div className="divider"></div>
          <li>
            <NavLink to={'/'}>
              <FaHome />
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={'/order/salad'}>
              <IoMenu />
              <span>Menu</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={'/order/contact'}>
              <FaEnvelope></FaEnvelope>
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>
      {/* Dashboard  Content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
