import { useEffect, useState } from 'react';


const ProductCard = ({num}) => {
    const [imageURL, setImageURL] = useState(null);
    const [descText, setDescText] = useState(null);
    const [productName, setProductName] = useState(null);
  
    useEffect(() => {
        let isMounted = true;
        function searchProduct(num) {
            fetch(`https://fakestoreapi.com/products/${num}`, { mode: "cors" })
              .then((response) => response.json())
              .then((response) => { 
                if (isMounted) {
                    setImageURL(response.image) 
                    setDescText(response.description)
                    setProductName(response.title)
                }
            })
              .catch((error) => console.error(error));
          }
        searchProduct(num)
        return () => {
            isMounted = false
        }
    }, []);
  
    return (
      (imageURL && (
        <div className='p-8 border-black border-2 border-solid rounded-md'>
            <div>
                <img src={imageURL} alt={"profile"} className='w-20 h-20'/>
                <h3>{productName}</h3>
                <p>1200</p>
            </div>
            <div>
                <button>Add to Cart</button>
            </div>
        </div>
      )) 
    );
}

const ShopPage = () => {
    const numArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    return(
        <div className='mt-16 grid gap-4 grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))]'>
            {numArray.map((item, index) => (
                <ProductCard
                key={index} 
                num={item} />
            ))} 
        </div>
    )
    
}

export default ShopPage