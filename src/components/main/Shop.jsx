import { useEffect, useState } from 'react';

const CreateCard = ({product}) => {
    return (
        <div className='p-8 border-black border-2 border-solid rounded-md'>
            <div>
                <img src={product.image} alt={"profile"} className='w-20 h-20'/>
                <h3>{product.title}</h3>
                <p>${product.price}</p>
            </div>
            <div>
                <button>Add to Cart</button>
            </div>
        </div>
    )
}
const ProductCard = ({product, selectedCategory}) => {
    return (
        (selectedCategory === 'all' ? 
        <CreateCard product={product} />
        : product.category === selectedCategory && <CreateCard product={product} />
        )
    );
}

const ShopPage = ({data, handleData}) => {
    const [selectedCaterory, setSelectedCategory] = useState('all')

    const handleCategory = (e) => {
        setSelectedCategory(e.target.value)
    }
    useEffect(() => {
        let isMounted = true;
        function fetchProduct() {
            fetch(`https://fakestoreapi.com/products/`, { mode: "cors" })
              .then((response) => response.json())
              .then((response) => { 
                if (isMounted) {
                    handleData(response.slice(0,20))
                }
            })
              .catch((error) => console.error(error));
          }
        fetchProduct()
        return () => {
            isMounted = false
        }
    }, []);
    console.log(data)
    return(
        <div className='mt-16 flex flex-col gap-8 p-8'>
            <div>
                <label htmlFor="categories"><span>Categories: </span>
                    <select 
                    name='categories'
                    id='categories'
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
            <div className='grid gap-4 grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))]'>
                {data.map(product => 
                    <ProductCard
                    key={product.id}
                    product={product}
                    selectedCategory={selectedCaterory}
                    />
                )}
            </div>
        </div>
    )
    
}

export default ShopPage