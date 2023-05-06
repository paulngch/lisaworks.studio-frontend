import CableCards from "../components/home/CableCards.js";
import FeaturedMsg from "../components/home/FeaturedMsg.js";
import Hero from "../components/home/Hero.js";

const Home = () => {
  return (
    <>
      <div>
        <Hero />
      </div>
      <div className="">
        <CableCards />
      </div>
      <div className=" pb-14">
        <FeaturedMsg />
      </div>
    </>
  );
};

export default Home;
