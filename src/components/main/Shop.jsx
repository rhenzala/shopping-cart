import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

const CreateCard = ({ product, onClick }) => {
  return (
    <div
      className="p-8 border-black border-2 border-solid rounded-md"
      onClick={onClick}
    >
      <div>
        <img src={product.image} alt={product.title} className="w-20 h-20" />
      </div>
      <div>
        <h3>{product.title}</h3>
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
      <div>
        <label htmlFor="categories">
          <span>Categories: </span>
          <select
            name="categories"
            id="categories"
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
    <div className="mt-16 flex flex-col gap-8 p-8">
      <DisplayProduct data={data} handleCardClick={handleCardClick} />
    </div>
  );
};

export default ShopPage;
