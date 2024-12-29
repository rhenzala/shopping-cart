import PropTypes from "prop-types";

const Quantity = ({ quantity, id, setCartItem, setQuantity, cartItem }) => {
  const updateQuantity = (qty, id) => {
    setQuantity(qty);
    if (cartItem) {
      setCartItem((prevItem) =>
        prevItem.map((item) =>
          item.id === id ? { ...item, quantity: qty } : item,
        ),
      );
    }
  };

  const addQuantity = () => updateQuantity(quantity + 1, id);
  const subtractQuantity = () => updateQuantity(Math.max(1, quantity - 1), id);
  const handleQuantityChange = (e) => {
    const qty = Math.max(1, parseInt(e.target.value, 10) || 1);
    updateQuantity(qty, id);
  };
  return (
    <div>
      <button
        onClick={subtractQuantity}
        className="bg-black/20 hover:bg-black/30 focus-within:bg-black/30 p-1 w-6"
      >
        -
      </button>
      <input
        type="text"
        className="w-10 p-1 outline-none"
        value={quantity}
        onChange={handleQuantityChange}
        min={1}
      />
      <button
        onClick={addQuantity}
        className="bg-black/20 hover:bg-black/30 focus-within:bg-black/30 p-1 w-6"
      >
        +
      </button>
    </div>
  );
};

Quantity.propTypes = {
  quantity: PropTypes.number,
  id: PropTypes.number,
  setCartItem: PropTypes.element,
  setQuantity: PropTypes.element,
  cartItem: PropTypes.array,
};

export default Quantity;
