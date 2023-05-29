import { Link as NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col pt-4 mt-10 mb-40">
        <div className="flex justify-center">
          <hr className=" w-[80%] h-0.5 my-8 bg-gray-300 border-0 rounded dark:bg-gray-700" />
        </div>

        <div className="footerContainer flex items-start justify-evenly">
          <div className="footerLeft flex flex-col p-2 ">
            <div className="flex text-xl font-semibold">Lisa Works</div>
            <div className="hidden sm:block">Our Social Media:</div>
            <div className="socialIcons flex">
              <a href="https://www.instagram.com/lisaworks.studio/">
                <img className="max-h-11 p-2" src="/Instagram.png" />
              </a>
            </div>
          </div>
          {/* <div></div> */}
          <div className="footerCenter pl-32 hidden lg:block ">
            <div className=" text-xl font-semibold pt-2">Useful Links</div>
            <div>
              <button className="text-gray-700 w-1/2 text-left py-2">
                <NavLink to="/">Home</NavLink>
              </button>
              <button className="text-gray-700 w-1/2 text-left py-2">
                <NavLink to="/pages/album">Album</NavLink>
              </button>
              <button className="text-gray-700 w-1/2 text-left py-2">
                <NavLink to="/pages/contact">Request</NavLink>
              </button>
              <button className="text-gray-700 w-1/2 text-left py-2">
                <NavLink to="/pages/configurator">Configurator</NavLink>
              </button>
              <button className="text-gray-700 w-1/2 text-left py-2">
                <NavLink to="/pages/charity">News</NavLink>
              </button>
            </div>
          </div>
          {}
          <div className="footerRight p-2 mt-4 ">
            Copyright © 2023. LisaWorks
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
