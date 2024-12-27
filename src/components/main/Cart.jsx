import { useOutletContext } from "react-router-dom"

const Cart = () => {
    const {cartItem} = useOutletContext()
    return(
        <div className="mt-16">
            <h1>this is cart</h1>
        </div>
    )
}

export default Cart