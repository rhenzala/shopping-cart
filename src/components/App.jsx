import "../App.css";
import { Outlet, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import FooterContent from "./footer/Footer";
import Header from "./Header";

const App = () => {
  const [data, setData] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "About", href: "/about" },
  ];
  const updateQuantity = (qty) => {
   setQuantity(qty)
  }
  const handleCartClick = () => {
    navigate("cart");
  };
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
      fetch(`https://fakestoreapi.com/products/`, { mode: "cors" })
        .then((response) => {
            if (response.status >= 400) {
                throw new Error("server error");
              }
            return response.json()
        })
        .then((response) => 
            setData(response.slice(0, 20))
        )
        .catch((error) => setError(error))
        .finally(() => setLoading(false))
  }, []);
  if (loading) return <div className="flex justify-center items-center"><p className="text-6xl font-bold">Loading...</p></div>;
  if (error) return <div className="flex justify-center items-center"><p className="text-4xl font-bold">A network error was encountered</p></div>;
  return (
    <div className="grid">
      <Header
        data={data}
        menuItems={menuItems}
        handleCardClick={handleCardClick}
        cartItem={cartItem}
        handleCartClick={handleCartClick}
      />
      <main>
        <Outlet
          context={{
            data,
            cartItem,
            addToCart,
            deleteCartItem,
            handleCardClick,
            handleCartClick,
            updateQuantity,
            quantity
          }}
        />
      </main>
      <FooterContent />
    </div>
  );
};

export default App;
