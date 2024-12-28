import { useState } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);
  const { data, addToCart, cartItem, handleCartClick } = useOutletContext();
  console.log(data);
  const { id } = useParams();
  const navigate = useNavigate();
  const product = data.find((prod) => prod.id === parseInt(id));
  console.log(product);

  const handleAddToCart = (product, qty, cartItem) => {
    const existingItem = cartItem.find((item) => item.id === product.id);
    if (!existingItem) {
      const item = {
        id: product.id,
        title: product.title,
        image: product.image,
        price: product.price,
        quantity: qty,
      };
      addToCart(item);
    }
  };
  const addQuantity = () => {
    setQuantity((quantity) => (quantity += 1));
  };
  const subtractQuantity = () => {
    setQuantity((quantity) => (quantity > 1 ? (quantity -= 1) : 1));
  };
  const handleQuantityChange = (e) => {
    const qty = e.target.value > 1 ? parseInt(e.target.value, 10) : 1;
    setQuantity(qty);
  };
  return (
    <div className="mt-16 min-h-[calc(100vh-4rem)] w-full px-[10%] py-10">
      <div>
        <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-red/90 text-white font-medium rounded-md hover:bg-red"
            aria-label="Back to previous page"
        >
            Back
        </button>
      </div>
      <section className="my-10 flex gap-8 custom-md:flex-col min-h-[200px]">
        <div className="border-black/20 border-2 border-solid p-4 w-1/2 custom-md:w-full flex justify-center items-center">
          <img src={product.image} alt={"profile"} className="w-72 h-72" />
        </div>
        <div className="flex flex-col gap-4 w-1/2 py-10 custom-md:w-full">
            <div>
                <h2 className="text-3xl font-semibold text-red">{product.title}</h2>
                <p className="text-2xl font-semibold">${product.price}</p>
            </div>
            <div>
                <p>{product.description}</p>
            </div>
            <div>
                <div>
                    <h3 className="text-lg font-semibold">Quantity:</h3>
                </div>
                <div>
                    <button 
                    onClick={() => subtractQuantity()}
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
                    onClick={() => addQuantity()}
                    className="bg-black/20 hover:bg-black/30 focus-within:bg-black/30 p-1 w-6"
                    >
                        +
                    </button>
                </div>
            </div>
            <div className="flex flex-col gap-3 items-end">
                <button 
                onClick={() => handleAddToCart(product, quantity, cartItem)}
                className="bg-white text-blue border-blue border-2 border-solid hover:text-white hover:bg-blue px-3 py-2  font-medium rounded-full w-[200px] uppercase"
                >
                Add to Cart
                </button>
                <button 
                onClick={() => handleCartClick()}
                className="bg-white text-red border-red border-2 border-solid hover:bg-red px-3 py-2 hover:text-white font-medium rounded-full w-[200px] uppercase"
                >
                    Buy Now
                </button>
            </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
