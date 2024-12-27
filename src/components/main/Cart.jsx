import { useOutletContext } from "react-router-dom"

const DisplayCartItems = ({item}) => {
    return(
        <section>
            <div>
                <img 
                src={item.image} 
                alt={item.title} 
                />
            </div>
            <div>
                <h1>{item.title}</h1>
            </div>
        </section>
    )
}
const Cart = () => {
    const {cartItem} = useOutletContext()
    return(
        <div className="h-[calc(100vh-4rem)] mt-16">
            {cartItem.length === 0 ? 
            (<p>Your cart is empty</p>) 
            : (cartItem.map(item => 
                <DisplayCartItems
                key={item.id} 
                item={item}
                />
            ))}
        </div>
    )
}

export default Cart