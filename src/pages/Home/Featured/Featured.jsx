import SectionTitle from '../../../components/SectionTitle/SectionTitle';

import featuredImage from '../../../assets/home/featured.jpg';

import './Featured.css';

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-10 my-20">
      <SectionTitle
        subHeading={'Check it Out'}
        heading={'Featured Item'}
      ></SectionTitle>
      <div className="md:flex pb-20 pt-12 px-36 justify-center items-center">
        <div>
          <img src={featuredImage} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Auq 20, 2019</p>
          <p className="uppercase">Where can i get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            optio sapiente dolore, molestias, tempora cum enim beatae nulla
            ipsum sequi possimus nostrum nihil quam, magni earum. Rerum ut,
            debitis sed dolorum, deserunt voluptate quibusdam, et veniam
            recusandae enim quae officiis similique? Nisi saepe neque quam
            aliquam assumenda voluptates dolorum facere!
          </p>
          <button className="border-b-2 hover:text-red-600 mt-6">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
