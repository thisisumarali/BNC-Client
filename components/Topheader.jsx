import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook, FaInstagram } from "react-icons/fa6";

const Topheader = () => {
  return (
    <header className="flex justify-around bg-primary text-sm uppercase text-white py-3 items-center font-light">
      <span className="flex items-center gap-2">
        <FaPhoneAlt /> +92-330-0266229
      </span>
      <span>Free Shipping above 15,000 Rs</span>
      <span className="flex items-center gap-2">
        follow us <FaInstagram /> <FaFacebook />
      </span>
    </header>
  );
};

export default Topheader;
