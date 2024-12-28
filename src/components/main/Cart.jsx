import { useOutletContext } from "react-router-dom";
import { Trash2Icon } from "lucide-react";

const DisplayCartItems = ({ item, deleteCartItem }) => {
  return (
    <section className="grid grid-cols-4 gap-3">
      <div>
        <img src={item.image} alt={item.title} className="w-20 h-20" />
      </div>
      <div className="col-span-2 text-sm">
        <h1 className="font-medium">{item.title}</h1>
        <p><span className="font-medium">Price: </span> ${item.price}</p>
        <p><span className="font-medium">Quantity: </span>{item.quantity}</p>
      </div>
      <div className="flex flex-col gap-3 items-end">
        <div className="flex gap-2">
          <p className="font-semibold">Total:</p>
          <p>${item.quantity * item.price}</p>
        </div>
        <button onClick={() => deleteCartItem(item.id)}>
          <Trash2Icon size={16} />
        </button>
      </div>
    </section>
  );
};
const Cart = () => {
  const { cartItem, deleteCartItem } = useOutletContext();
  function calculateTotal(items) {
    return items.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  }
  return (
    <div className="min-h-[calc(100vh-4rem)] mt-16 py-10">
      <div className="bg-white/40 shadow-lg rounded-lg w-[700px] custom-md:w-[90%] p-10 mx-auto">
        <div className="flex flex-col gap-4 border-b-black/50 border-b-2 border-b-solid py-4">
          {cartItem.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cartItem.map((item) => (
              <DisplayCartItems
                key={item.id}
                item={item}
                deleteCartItem={deleteCartItem}
              />
            ))
          )}
        </div>
        <div className="flex flex-col gap-4 items-end mt-2">
          <div className="flex gap-2 text-xl">
            <h1 className="font-semibold">Total Cost:</h1>
            <p>{cartItem.length === 0 ? "" : "$" + calculateTotal(cartItem)}</p>
          </div>
          <div>
            <button className="bg-blue px-3 py-1 text-white font-semibold rounded-md">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
