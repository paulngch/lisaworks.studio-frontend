import BlackParacord from "./BlackParacord.tsx";
import NavyParacord from "./NavyParacord.tsx";
import OliveParacord from "./OliveParacord.tsx";
import PurpleParacord from "./PurpleParacord.tsx";

const FullParacord = () => {
  return (
    <>
      <div className="grid">
        <div className="col-start-1 row-start-1">
          <BlackParacord fill="#FDE68A" />
        </div>
        <div className="col-start-1 row-start-1">
          <PurpleParacord fill="#15803D" />
        </div>
        <div className="col-start-1 row-start-1">
          <OliveParacord fill="#38BDF8" />
        </div>
        <div className="col-start-1 row-start-1">
          <NavyParacord fill="#DB2777" />
        </div>
      </div>
    </>
  );
};

export default FullParacord;
