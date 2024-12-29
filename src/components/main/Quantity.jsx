import { useState } from "react";

const Quantity = ({updateQuantity, quantity}) => {
  

    const addQuantity = () => {
        const newQuantity = quantity + 1
        updateQuantity(newQuantity)
      };
      const subtractQuantity = () => {
        const newQuantity = quantity > 1 ? quantity - 1 : 1
        updateQuantity(newQuantity)
      };
      const handleQuantityChange = (e) => {
        const qty = e.target.value > 1 ? parseInt(e.target.value, 10) : 1;
        updateQuantity(qty)
      };
    return(
        <div>
                    <button 
                    onClick={() => subtractQuantity()}
                    className="bg-black/20 hover:bg-black/30 focus-within:bg-black/30 p-1 w-6"
                    >
                        -
                    </button>
                    <input
                        type="text"
                        className="w-10 p-1 outline-none"
                        value={quantity}
                        onChange={handleQuantityChange}
                        min={1}
                    />
                    <button 
                    onClick={() => addQuantity()}
                    className="bg-black/20 hover:bg-black/30 focus-within:bg-black/30 p-1 w-6"
                    >
                        +
                    </button>
                </div>
    )
}

export default Quantity