import { FaPhoneAlt } from "react-icons/fa";

const Topheader = () => {
  return (
    <header className="flex justify-around bg-primary text-sm uppercase text-white py-3 items-center font-light">
      <span className="flex items-center gap-2">
        <FaPhoneAlt /> +92-330-0266229
      </span>
      Free Shipping above 15,000 Rs
    </header>
  );
};

export default Topheader;
