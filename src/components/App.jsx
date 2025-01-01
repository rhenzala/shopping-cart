import "../App.css";
import { Outlet, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import FooterContent from "./footer/Footer";
import Header from "./header/Header";
import { LoaderCircle } from "lucide-react";

const App = () => {
  const [data, setData] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState([
    { id: 1, qty: 1 },
    { id: 2, qty: 1 },
    { id: 3, qty: 1 },
    { id: 4, qty: 1 },
    { id: 5, qty: 1 },
    { id: 6, qty: 1 },
    { id: 7, qty: 1 },
    { id: 8, qty: 1 },
    { id: 9, qty: 1 },
    { id: 10, qty: 1 },
    { id: 11, qty: 1 },
    { id: 12, qty: 1 },
    { id: 13, qty: 1 },
    { id: 14, qty: 1 },
    { id: 15, qty: 1 },
    { id: 16, qty: 1 },
    { id: 17, qty: 1 },
    { id: 18, qty: 1 },
    { id: 19, qty: 1 },
    { id: 20, qty: 1 },
  ]);
  const navigate = useNavigate();

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "About", href: "/about" },
  ];

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
        return response.json();
      })
      .then((response) => setData(response.slice(0, 20)))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);
  if (loading)
    return (
      <div className="flex justify-center items-center h-screen w-full">
        <LoaderCircle size={48} className="animate-spin text-red" />
      </div>
    );
  if (error)
    return (
      <div className="flex justify-center  p-10 h-screen w-full">
        <p className="text-4xl font-bold">A network error was encountered</p>
      </div>
    );
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
            setCartItem,
            quantity,
            setQuantity,
          }}
        />
      </main>
      <FooterContent />
    </div>
  );
};

export default App;
