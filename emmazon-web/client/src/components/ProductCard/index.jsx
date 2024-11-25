import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({
  id, // Product ID used for navigation and identification
  img, // Image URL for the product
  title, // Title or name of the product
  price, // Price of the product
  status, // Status of the product (e.g., in stock, sold out)
  review, // Number of reviews for the product
  cardWidth, // CSS class to control the width of the product card
  addToCart, // Function to handle adding the product to the cart
}) => {
  return (
    <div className="lg:flex items-start"> {/* Container to align items at larger screen sizes */}
      <div
        className={`p-4 border border-gray-300 rounded-sm group h-full ${cardWidth}`} // Container for product card with padding, border, rounded corners, and dynamic width
      >
        <Link to={`/product-details/${id}`}> {/* Link to navigate to the product details page */}
          <div className="relative mt-2"> {/* Container for product image with relative positioning */}
            <img src={img} alt="product" className="mx-auto rounded" /> {/* Product image with centered alignment and rounded corners */}
            {status === 3 && ( // If product status is "sold out", display the "Sold out" label
              <p className="p-1 absolute bottom-1 font-bold bg-black text-white text-xs">
                Sold out
              </p>
            )}
          </div>
          <h1 className="text-sm font-medium mt-5 capitalize">{title}</h1> {/* Product title with small text size, medium font weight, and capitalized formatting */}
        </Link>

        <p className="mt-2 text-sm">${price.toFixed(2)}</p> {/* Display product price formatted to two decimal places */}

        {status === 0 ? ( // Conditional rendering for product availability status
          <p className="mt-1 text-sm text-green-600">Coming soon</p> // Product coming soon status
        ) : status === 1 ? (
          <p className="mt-1 text-sm text-red-700">Low stock</p> // Product low stock status
        ) : status === 2 ? (
          <p className="mt-1 text-sm text-green-600">In stock</p> // Product in stock status
        ) : (
          <p className="mt-1 text-sm">Out of stock</p> // Product out of stock status
        )}

        <div className="flex items-center gap-1 mt-3"> {/* Container for product rating with stars and review count */}
          {/* Displaying five star icons for product rating */}
          <FaStar className="text-black text-xs" />
          <FaStar className="text-black text-xs" />
          <FaStar className="text-black text-xs" />
          <FaStar className="text-black text-xs" />
          <FaStar className="text-black text-xs" />
          <p className="text-xs ml-2">{review} Reviews</p> {/* Display the number of reviews */}
        </div>

        <div className="flex items-center gap-2 mt-5 lg:h-0 lg:group-hover:h-14 transition-all ease-linear duration-300"> {/* Container for "Add to cart" button with hover effect */}
          <button
            className={`${
              status === 3 ? "bg-gray-500" : "bg-yellowD hover:bg-opacity-90" // Button styling based on product status
            } text-xs text-black py-3 px-2 w-full rounded lg:hidden lg:group-hover:block`} // Button hidden by default on larger screens, appears on hover
            disabled={status === 3} // Disable button if the product is sold out
            onClick={addToCart} // Function to add the product to the cart
          >
            {status === 3 ? "Sold out" : "Add to cart"} {/* Button text changes based on product status */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; // Exporting the ProductCard component as default
