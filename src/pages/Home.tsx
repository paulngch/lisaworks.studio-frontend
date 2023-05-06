import CableCards from "../components/home/CableCards";
import FeaturedMsg from "../components/home/FeaturedMsg";
import Hero from "../components/home/Hero";

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
