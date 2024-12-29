import { useNavigate, useOutletContext } from "react-router-dom";
import { Trash2Icon } from "lucide-react";
import Quantity from "./Quantity";
import { useState } from "react";

const DisplayCartItems = ({
  item,
  deleteCartItem,
  handleCardClick,
  setCartItem,
  cartItem,
}) => {
  const [quantity, setQuantity] = useState(item.quantity);
  return (
    <section className="flex gap-4">
      <div className="flex gap-3 custom-md:flex-col w-2/3">
        <div
          onClick={() => handleCardClick(item.id)}
          className="flex-shrink-0 hover:cursor-pointer hover:border-red p-2 border-black/20 border-2 border-solid flex justify-center items-center transition-all duration-150 delay-150 ease-in"
        >
          <img src={item.image} alt={item.title} className="w-20 h-20" />
        </div>
        <div className="col-span-2 text-sm">
          <h1 className="font-medium">{item.title}</h1>
          <p>
            <span className="font-medium">Price: </span>${item.price}
          </p>
          <p>
            <span className="font-medium">Quantity: </span>
            <Quantity
              quantity={quantity}
              id={item.id}
              setCartItem={setCartItem}
              cartItem={cartItem}
              setQuantity={setQuantity}
            />
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-3 items-end w-1/3">
        <div className="flex gap-2">
          <p className="font-semibold">Total:</p>
          <p>${(item.quantity * item.price).toFixed(2)}</p>
        </div>
        <button onClick={() => deleteCartItem(item.id)}>
          <Trash2Icon color="#dc2626" size={16} />
        </button>
      </div>
    </section>
  );
};
const Cart = () => {
  const navigate = useNavigate();
  const { cartItem, deleteCartItem, handleCardClick, setCartItem } =
    useOutletContext();
  const calculateTotal = (items) => {
    return items.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };
  const handleCheckout = () => {
    alert("Thank you for buying!");
  };
  return (
    <div className="min-h-[calc(100vh-4rem)] mt-16 py-10 px-[10%]">
      <div className="w-[700px] custom-md:w-full mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-red/90 text-white font-medium rounded-md hover:bg-red"
          aria-label="Back to previous page"
        >
          Back
        </button>
      </div>
      <div className="bg-white/10 shadow-lg rounded-lg w-[700px] custom-md:w-full p-8 custom-md:px-4 custom-md:py-8 mx-auto my-10">
        <h1 className="text-4xl font-bold text-center mb-4">Your Cart</h1>
        <div className="flex flex-col gap-4 border-b-black/50 border-b-2 border-b-solid py-4">
          {cartItem.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cartItem.map((item) => (
              <DisplayCartItems
                key={item.id}
                item={item}
                deleteCartItem={deleteCartItem}
                handleCardClick={handleCardClick}
                cartItem={cartItem}
                setCartItem={setCartItem}
              />
            ))
          )}
        </div>
        <div className="flex flex-col gap-4 items-end mt-2">
          <div className="flex gap-2 text-xl">
            <h1 className="font-semibold">Total Cost:</h1>
            <p>
              {cartItem.length === 0
                ? ""
                : "$" + calculateTotal(cartItem).toFixed(2)}
            </p>
          </div>
          <div>
            <button
              className="px-3 py-2 bg-white text-blue border-blue border-2 border-solid hover:text-white hover:bg-blue font-semibold rounded-md uppercase"
              onClick={() => handleCheckout()}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
