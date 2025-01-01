import { Link } from 'react-router-dom';
import Cover from '../../../shared/Cover/Cover';
import MenuItem from '../../../shared/MenuItem/MenuItem';

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="my-24">
      {title && <Cover img={img} title={'Our Menu'}></Cover>}
      <div className="grid md:grid-cols-2 gap-10 mt-16">
        {items.map(item => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className="border-b-2 hover:text-red-600  mt-4">
          Order Now
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
