import "../App.css";
import { Outlet, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import FooterContent from "./footer/Footer";
import Header from "./Header";

const App = () => {
  const [data, setData] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  const navigate = useNavigate();

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "About", href: "/about" },
  ];
  const handleCardClick = (id) => {
    navigate(`/shop/${id}`);
  };
  const addToCart = (item) => {
    setCartItem((prevItem) => [...prevItem, item]);
  };

  const deleteCartItem = (id) => {
    setCartItem((prevItem) => prevItem.filter((item) => item.id !== id));
  };

  useEffect(() => {
    let isMounted = true;
    function fetchProduct() {
      fetch(`https://fakestoreapi.com/products/`, { mode: "cors" })
        .then((response) => response.json())
        .then((response) => {
          if (isMounted) {
            setData(response.slice(0, 20));
          }
        })
        .catch((error) => console.error(error));
    }
    fetchProduct();
    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <div className="grid">
      <Header
        data={data}
        menuItems={menuItems}
        handleCardClick={handleCardClick}
        cartItem={cartItem}
      />
      <main>
        <Outlet
          context={{
            data,
            cartItem,
            addToCart,
            deleteCartItem,
            handleCardClick,
          }}
        />
      </main>
      <FooterContent />
    </div>
  );
};

export default App;
