import { useEffect, useState } from "react";

const ProductInfo = ({ id, title, price, status, description, addToCart }) => {
  const [quantity, setQuantity] = useState(1); // State to track the quantity of the product to be added to the cart, default value is 1

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []); // Empty dependency array means this effect runs only once when the component mounts

  /**
   * Increases the quantity by 1
   */
  const increaseQuantity = () => {
    setQuantity(quantity + 1); // Increase the quantity state by 1
  };

  /**
   * Decreases the quantity by 1
   */
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1); // Decrease the quantity state by 1, ensuring it doesn't go below 1
    }
  };

  /**
   * Handles adding the product to the cart
   */
  const addCartBtnHandler = () => {
    addToCart({ title, quantity, price, id }); // Call addToCart function with product details
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">{title}</h1> {/* Display product title */}

      <p className="text-xl font-semibold">${price.toFixed(2)}</p> {/* Display product price, formatted to 2 decimal places */}
      {description && <p className="text-sm mt-5">{description}</p>} {/* Display product description if available */}
      <h1 className="font-medium text-sm mt-10 text-center sm:text-start">
        Quantity {/* Quantity label */}
      </h1>
      <div className="sm:flex gap-3 mt-2">
        <div>
          <div className="flex items-center justify-center sm:justify-start">
            <button
              onClick={decreaseQuantity} // Decrease quantity handler
              className="text-3xl text-gray-500 py-1 px-4 border border-gray-200 rounded-l active:scale-95"
              disabled={quantity === 1} // Disable button if quantity is 1 to prevent it from going below 1
            >
              -
            </button>
            <div className="w-[80px] border-y border-gray-200 text-center py-2">
              <span className="text-xl text-gray-600">{quantity}</span> {/* Display current quantity */}
            </div>
            <button
              onClick={increaseQuantity} // Increase quantity handler
              className="text-3xl text-gray-500 py-1 px-4 border border-gray-200 rounded-r active:scale-95"
            >
              +
            </button>
          </div>
        </div>
        <button
          className={`mt-3 sm:mt-0 text-white ${
            status === 3
              ? "bg-gray-500" // If product is sold out, button is gray
              : "bg-black hover:bg-black/85 active:scale-95" // Otherwise, button is black and interactive
          } w-full py-2 px-5 rounded`}
          onClick={addCartBtnHandler} // Add to cart handler
          disabled={status === 3} // Disable button if product is sold out
        >
          {status === 3 ? "Sold out" : "Add to cart"} {/* Display button text based on product status */}
        </button>
      </div>

      <div className="p-4 bg-grayD mt-5 rounded"> {/* Shipping information section */}
        <div>
          <h1 className="font-semibold text-sm">Standard Shipping</h1> {/* Shipping type label */}
          <p className="text-sm mt-1">Estimated delivery time: 7-10 days</p> {/* Estimated delivery time */}
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
