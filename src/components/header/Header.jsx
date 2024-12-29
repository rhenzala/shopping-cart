import renshop from "../../assets/logo/renshop.png";
import HamburgerMenu from "./HamburgerMenu";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import PropTypes from "prop-types";

const Header = ({
  data,
  menuItems,
  handleCardClick,
  cartItem,
  handleCartClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <header
      className={`bg-red w-full fixed top-0 z-50 transition-transform duration-300 delay-150 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="w-full px-8 custom-md:px-6">
        <div className="flex items-center justify-between">
          <div className="logo">
            <img src={renshop} className="h-16" alt="Renshop logo" />
          </div>
          <div className="flex gap-4 items-center">
            <div className="hidden sm:hidden md:flex space-x-8 ml-auto">
              <nav>
                {menuItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="text-white hover:underline-offset-8 px-3 py-2"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="flex gap-4">
              <div className="md:flex gap-1 hidden sm:hidden">
                <SearchBar data={data} handleCardClick={handleCardClick} />
              </div>
              <div>
                <button onClick={() => handleCartClick()} className="relative">
                  <span className="bg-black text-white text-[10px] font-bold absolute top-0 w-4 rounded-sm">
                    {cartItem.length === 0 ? "" : cartItem.length}
                  </span>
                  <ShoppingCart color="#f8fafc" size={24} />
                </button>
              </div>
            </div>
            <HamburgerMenu handleMenuClick={handleMenuClick} isOpen={isOpen} />
          </div>
        </div>
        <div
          className={`bg-red md:hidden absolute top-16 left-0 right-0 bg-gray-800 transform transition-all duration-300 delay-150 ease-in-out origin-top ${
            isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
          }`}
        >
          <nav className="px-2 pt-2 pb-3 space-y-1 flex flex-col">
            <div className="px-3 py-2">
              <SearchBar data={data} handleCardClick={handleCardClick} />
            </div>
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="block text-white px-3 py-2 rounded-md"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  data: PropTypes.array,
  menuItems: PropTypes.array,
  handleCardClick: PropTypes.func,
  cartItem: PropTypes.array,
  handleCartClick: PropTypes.func
}
export default Header;
