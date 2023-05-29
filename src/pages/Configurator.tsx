import BlackParacord from "../components/configurator/BlackParacord.tsx";
import NavyParacord from "../components/configurator/NavyParacord.tsx";
import OliveParacord from "../components/configurator/OliveParacord.tsx";
import PurpleParacord from "../components/configurator/PurpleParacord.tsx";

const Configurator = () => {
  return (
    <>
      <div>Configurator</div>
      <div className=" relative w-[50%]">
        <div className="absolute">
          <BlackParacord fill="#FEF08A" />
        </div>
        <div className="absolute">
          <PurpleParacord fill="#E11D48" />
        </div>
        <div className="absolute">
          <OliveParacord fill="#3B82F6" />
        </div>
        <div className="absolute">
          <NavyParacord fill="#27272A" />
        </div>
        {/* <img className="h-8 w-auto" src="/LisaWorksLogoFilledIn.png" alt="" /> */}
      </div>
    </>
  );
};

export default Configurator;
