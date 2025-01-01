import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../../shared/MenuItem/MenuItem';
import UseMenu from '../../../hooks/UseMenu';

const PopulerMenu = () => {
  const [menu] = UseMenu();
  const popular = menu.filter(item => item.category === 'popular');

  return (
    <section className="mb-12">
      <SectionTitle
        heading={'Form Our Menu'}
        subHeading={'Populer Items'}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10">
        {popular.map(item => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <button className="border-b-2 hover:text-red-600 my-10">
        View Full Menu
      </button>
    </section>
  );
};

export default PopulerMenu;
