import { useState } from "react"
import { useNavigate, useOutletContext, useParams } from "react-router-dom"

const ProductDetail = () => {
    const [quantity, setQuantity] = useState(1)
    const {data, addToCart} = useOutletContext()
    console.log(data)
    const { id } = useParams()
    const navigate  = useNavigate()
    const product = data.find(prod => prod.id === parseInt(id))
    console.log(product)
    const addQuantity = () => {
        setQuantity(quantity => quantity += 1)
    }
    const subtractQuantity = () => {
        setQuantity(quantity => quantity > 0 ? quantity -= 1 : 0)
    }
    const handleQuantity = (e) => {
        const qty = e.target.value === '' ? 0: parseInt(e.target.value, 10)
        setQuantity(qty)
    }
    return(
        <div className="mt-16">
            <button
             onClick={() => navigate(-1)}
            className="mb-4 px-4 py-2 bg-red/90 text-white rounded hover:bg-red"
            >
                Back
            </button>
            <section>
                <div>
                    <img src={product.image} alt={"profile"} className='w-20 h-20'/>
                    <h3>{product.title}</h3>
                    <p>${product.price}</p>
                </div>
                <div>
                    <p>{product.description}</p>
                </div>
                <div>
                    <button onClick={() => subtractQuantity()}>-</button>
                    <input type="number" value={quantity} onChange={handleQuantity} min={0}/>
                    <button onClick={() => addQuantity()}>+</button>
                </div>
                <button onClick={() => addToCart(product)}>
                    Add to Cart
                </button>
            </section>
        </div>
    )
}

export default ProductDetail