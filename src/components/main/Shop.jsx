import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

const CreateCard = ({ product, onClick }) => {
  return (
    <div
      className="py-8 px-5 border-black/20 border-2 border-solid flex flex-col gap-3"
      onClick={onClick}
    >
      <div className="flex justify-center items-center p-3 border-b-black/40 border-b border-b-solid">
        <img src={product.image} alt={product.title} className="w-24 h-24" />
      </div>
      <div>
        <p className="text-sm font-semibold leading-none">{product.title}</p>
        <p>${product.price}</p>
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
        className="border-black border-2 border-solid px-2 py-1"
        >
          <span>Categories: </span>
          <select
            name="categories"
            id="categories"
            className="outline-none"
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

export default ShopPage;
