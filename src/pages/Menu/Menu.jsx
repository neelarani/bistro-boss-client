import { Helmet } from 'react-helmet-async';
import Cover from '../../shared/Cover/Cover';
import menuImg from '../../assets/menu/banner3.jpg';
import pizzaImg from '../../assets/menu/pizza-bg.jpg';
import dessertImg from '../../assets/menu/dessert-bg.jpeg';
import saladImg from '../../assets/menu/salad-bg.jpg';
import soupImg from '../../assets/menu/soup-bg.jpg';
import UseMenu from '../../hooks/UseMenu';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';

const Menu = () => {
  const [menu] = UseMenu();
  const desserts = menu.filter(item => item.category === 'dessert');
  const pizza = menu.filter(item => item.category === 'pizza');
  const soup = menu.filter(item => item.category === 'soup');
  const salad = menu.filter(item => item.category === 'salad');
  const offered = menu.filter(item => item.category === 'offered');

  return (
    <div>
      <Helmet>
        <title> Bistro Boss | Menu</title>
      </Helmet>

      <Cover img={menuImg} title={'Our Menu'}></Cover>
      {/* main cover */}
      <SectionTitle
        subHeading={"Don't miss"}
        heading={"Today's Offer"}
      ></SectionTitle>
      {/* offered  menu items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* Dessert menu items */}
      <MenuCategory
        items={desserts}
        title={'dessert'}
        img={dessertImg}
      ></MenuCategory>

      {/* pizza menu items */}
      <MenuCategory items={pizza} title={'pizza'} img={pizzaImg}></MenuCategory>

      {/* salad menu items */}
      <MenuCategory items={salad} title={'salad'} img={saladImg}></MenuCategory>
      {/* soup menu items */}
      <MenuCategory items={soup} title={'soup'} img={soupImg}></MenuCategory>
    </div>
  );
};

export default Menu;
