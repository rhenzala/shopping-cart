import { useEffect, useState } from 'react';


const ProductCard = ({product}) => {
  
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
    );
}

const ShopPage = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        let isMounted = true;
        function fetchProduct() {
            fetch(`https://fakestoreapi.com/products/`, { mode: "cors" })
              .then((response) => response.json())
              .then((response) => { 
                if (isMounted) {
                    setData(response.slice(0,20))
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
                    <select name='categories'> 
                        <option value="men">Men&apos;s Clothing</option>
                        <option value="women">Women&apos;s Clothing</option>
                        <option value="electronics">Electronics</option>
                        <option value="jewelry">Jewelry</option>
                    </select>
                </label>
            </div>
            <div className='grid gap-4 grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))]'>
            {data.map(product => 
                <ProductCard
                key={product.id}
                product={product}
                />
            )}
        </div>
        </div>
    )
    
}

export default ShopPage