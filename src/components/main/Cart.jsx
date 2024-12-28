import { useOutletContext } from "react-router-dom"
import { Trash2Icon } from "lucide-react"

const DisplayCartItems = ({item, deleteCartItem}) => {
    return(
        <section className="flex justify-between">
            <div>
                <img 
                src={item.image} 
                alt={item.title} 
                className="w-20 h-20"
                />
            </div>
            <div>
                <h1>{item.title}</h1>
                <p>${item.price}</p>
                <p>Quantity: {item.quantity}</p>
            </div>
            <div>
                <p>Total: ${item.quantity * item.price}</p>
                <button onClick={() => deleteCartItem(item.id)}>
                    <Trash2Icon size={16}/>
                </button>
            </div>
        </section>
    )
}
const Cart = () => {
    const {cartItem, deleteCartItem} = useOutletContext()
    return(
        <div className="h-[calc(100vh-4rem)] mt-16 py-10">
            <div className="bg-white/40 shadow-lg rounded-lg w-[700px] custom-md:w-[90%] p-10 mx-auto">
                <div className="flex flex-col gap-4 border-b-black/50 border-b-2 border-b-solid py-4">
                    {cartItem.length === 0 ? 
                    (<p>Your cart is empty</p>) 
                    : (cartItem.map(item => 
                        <DisplayCartItems
                        key={item.id} 
                        item={item}
                        deleteCartItem={deleteCartItem}
                        />
                    ))}
                </div>
                <div className="flex flex-col items-end">
                    <div className="flex gap-4">
                        <h1>Total Cost:</h1>
                        <p>{cartItem.length === 0 ?
                        '': '$100'}</p>
                    </div>
                    <button className="bg-blue px-3 py-1 text-white font-semibold rounded-md">Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default Cart