import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { Tag } from "lucide-react";
import PropTypes from "prop-types";

const CreateCard = ({ product, onClick }) => {
  const capitalizeWords = (str) => {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };
  return (
    <div
      className="py-8 px-5 bg-cardbg rounded-lg border-black/20 border-2 border-solid hover:cursor-pointer hover:border-red focus-within:border-red transition-all delay-150 duration-150 ease-in flex flex-col gap-3"
      onClick={onClick}
    >
      <div className="bg-[#fff] rounded-t-md flex justify-center items-center p-3 border-b-black/40 border-b border-b-solid">
        <img src={product.image} alt={product.title} className="w-24 h-24" />
      </div>
      <div>
        <p className="text-sm font-semibold leading-none truncate">
          {product.title}
        </p>
        <p className="flex gap-1 items-center">
          <Tag size={16} /> <span>${product.price}</span>
        </p>
        <p className="text-[12px] text-black/80">
          In: {capitalizeWords(product.category)}
        </p>
      </div>
    </div>
  );
};
const ProductCard = ({ product, selectedCategory, onClick }) => {
  return selectedCategory === "all" ? (
    <CreateCard product={product} onClick={onClick} />
  ) : (
    product.category === selectedCategory && (
      <CreateCard product={product} onClick={onClick} />
    )
  );
};

const DisplayProduct = ({ data, handleCardClick }) => {
  const [selectedCaterory, setSelectedCategory] = useState("all");

  const handleCategory = (e) => {
    setSelectedCategory(e.target.value);
  };
  return (
    <div>
      <div className="mb-8">
        <label
          htmlFor="categories"
          className="border-black/40 border-2 border-solid rounded-md px-2 py-1"
        >
          <span>Categories: </span>
          <select
            name="categories"
            id="categories"
            className="outline-none bg-white"
            value={selectedCaterory}
            onChange={handleCategory}
          >
            <option value="all">All</option>
            <option value="men's clothing">Men&apos;s Clothing</option>
            <option value="women's clothing">Women&apos;s Clothing</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelry</option>
          </select>
        </label>
      </div>
      <div className="grid gap-4 grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))]">
        {data.map((product) => (
          <ProductCard
            key={product.id}
            onClick={() => handleCardClick(product.id)}
            product={product}
            selectedCategory={selectedCaterory}
          />
        ))}
      </div>
    </div>
  );
};

const ShopPage = () => {
  const { data, handleCardClick } = useOutletContext();
  const navigate = useNavigate();

  console.log(data);
  return (
    <div className="mt-16 min-h-[calc(100vh-4rem)] w-full px-[10%] py-10">
      <div className="mb-10">
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-red/90 text-white font-medium rounded-md hover:bg-red"
          aria-label="Back to previous page"
        >
          Back
        </button>
      </div>
      <DisplayProduct data={data} handleCardClick={handleCardClick} />
    </div>
  );
};

CreateCard.propTypes = {
  product: PropTypes.object,
  onClick: PropTypes.func,
};
ProductCard.propTypes = {
  product: PropTypes.object,
  selectedCategory: PropTypes.string,
  onClick: PropTypes.func,
};
DisplayProduct.propTypes = {
  data: PropTypes.array,
  handleCardClick: PropTypes.func,
};
export default ShopPage;
