import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import Quantity from "./Quantity";

const ProductDetail = () => {
  const {
    data,
    addToCart,
    cartItem,
    handleCartClick,
    setCartItem,
    quantity,
    setQuantity,
  } = useOutletContext();
  const { id } = useParams();
  const navigate = useNavigate();
  const product = data.find((prod) => prod.id === parseInt(id));

  const handleAddToCart = (product, cartItem, quantity) => {
    const existingItem = cartItem.find((item) => item.id === product.id);
    const productQuantity = quantity.find((qty) => qty.id === product.id);
    if (existingItem) {
      setCartItem((prevItems) =>
        prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + productQuantity.qty }
            : item,
        ),
      );
    } else {
      const item = {
        id: product.id,
        title: product.title,
        image: product.image,
        price: product.price,
        quantity: productQuantity.qty,
      };
      addToCart(item);
    }
  };
  if (!product) return null;

  const capitalizeWords = (str) => {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
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
        <div className="rounded-xl bg-[#fff] border-black/20 border-2 border-solid p-4 w-1/2 custom-md:w-full flex justify-center items-center">
          <img src={product.image} alt={"profile"} className="w-72 h-72" />
        </div>
        <div className="flex flex-col gap-4 w-1/2 py-10 custom-md:w-full">
          <div>
            <h2 className="text-3xl font-semibold text-red">{product.title}</h2>
            <p className="text-2xl font-semibold">${product.price}</p>
          </div>
          <div className="flex flex-col gap-2">
            <p>{product.description}</p>
            <div className="bg-black/10 px-3 py-1 w-fit rounded-md">
              <span className="text-[12px] text-black/80 font-medium">
                {capitalizeWords(product.category)}
              </span>
            </div>
          </div>
          <div>
            <div>
              <h3 className="text-lg font-semibold">Quantity:</h3>
            </div>
            <Quantity
              id={product.id}
              setCartItem={setCartItem}
              cartItem={cartItem}
              quantity={quantity}
              setQuantity={setQuantity}
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
              onClick={() => {
                handleCartClick();
              }}
              className="bg-white text-red border-red border-2 border-solid hover:bg-red px-3 py-2 hover:text-white font-medium rounded-full w-[200px] uppercase"
            >
              View Cart
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
