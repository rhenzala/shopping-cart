import { useNavigate, useOutletContext, useParams } from "react-router-dom"

const ProductDetail = () => {
    const {data, addToCart} = useOutletContext()
    console.log(data)
    const { id } = useParams()
    const navigate  = useNavigate()
    const product = data.find(prod => prod.id === parseInt(id))
    console.log(product)
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
                <button onClick={() => addToCart(product)}>
                    Add to Cart
                </button>
            </section>
        </div>
    )
}

export default ProductDetail