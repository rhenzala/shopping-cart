import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import Quantity from "./Quantity";
import { useState } from "react";


const ProductDetail = () => {
  const { data, addToCart, cartItem, handleCartClick, setCartItem } = useOutletContext();
  const [quantity, setQuantity] = useState(1)
  const { id } = useParams();
  const navigate = useNavigate();
  const product = data.find((prod) => prod.id === parseInt(id));
  
  
  const handleAddToCart = (product, cartItem, qty) => {
    const existingItem = cartItem.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItem(prevItems => 
        prevItems.map(item => 
          item.id === product.id ?
          {...item, quantity: item.quantity + qty}
          : item
        )
      )
    } else {
      const item = {
        id: product.id,
        title: product.title,
        image: product.image,
        price: product.price,
        quantity: qty
      };
      addToCart(item);
    }
  };
  if (!product) return null
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
                <Quantity 
                quantity={quantity} 
                id={product.id} 
                setCartItem={setCartItem}
                setQuantity={setQuantity}
                cartItem={cartItem}
                />
            </div>
            <div className="flex flex-col gap-3 items-end">
                <button 
                onClick={() => handleAddToCart(product, cartItem, quantity)}
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
