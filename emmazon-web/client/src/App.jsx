import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { baseUrl } from "./config";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Loading from "./components/Loader";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import axios from "axios";

function App() {
  // State to hold cart items
  const [cartItems, setCartItems] = useState([]);
  // State to manage loading state
  const [isLoading, setIsLoading] = useState(true);
  // State to hold products in the women's category
  const [womenItems, setWomenItems] = useState([]);
  // State to hold products in the tech category
  const [techItems, setTechItems] = useState([]);
  // State to hold products in the hardware tools category
  const [hardwareTools, setHardwareTools] = useState([]);

  /**
   * Fetching all products using useEffect
   * This effect runs once when the component mounts to fetch product data from the API
   */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${baseUrl}/products`); // Fetching products from the API
        if (data) {
          // Filtering products into categories
          setWomenItems(data.filter((product) => product.category === "cloth"));
          setTechItems(data.filter((product) => product.category === "tech"));
          setHardwareTools(
            data.filter((product) => product.category === "hardware")
          );
        }
      } catch (error) {
        console.log("Failed to fetch the products: ", error.message); // Logging error if fetching fails
      } finally {
        setIsLoading(false); // Setting loading state to false after fetching is complete
      }
    };
    fetchData();
  }, []);

  // Function to add items to the cart
  const addToCart = (item) => {
    setCartItems((prevCartItems) => {
      // Check if the item already exists in the cart by comparing item IDs
      const itemExists = prevCartItems.find(
        (cartItem) => cartItem.id === item.id
      );
      if (itemExists) {
        // If the item exists in the cart, update its quantity
        return prevCartItems.map(
          (cartItem) =>
            cartItem.id === item.id
              ? {
                  ...cartItem, // Spread the existing properties of the cart item
                  quantity: item.quantity
                    ? item.quantity + cartItem.quantity // If a specific quantity is provided, add it to the current quantity
                    : cartItem.quantity + 1, // Otherwise, increment the quantity by 1
                }
              : cartItem // If the item does not match, return it unchanged
        );
      } else {
        // If the item does not exist in the cart, add it with an initial quantity of 1 or the provided quantity
        return [...prevCartItems, { ...item, quantity: item.quantity || 1 }];
      }
    });
  };

  // Function to remove items from the cart
  const removeFromCart = (itemId) => {
    setCartItems(
      (prevCartItems) =>
        prevCartItems.filter((cartItem) => cartItem.id !== itemId) // Remove item from cart by filtering out the item with the specified id
    );
  };

  return (
    <>
      {isLoading ? (
        <Loading /> // Display Loading component while data is being fetched
      ) : (
        <>
          <Navbar cartItems={cartItems} removeFromCart={removeFromCart} />{" "}
          {/* Navbar component with cart items and remove function */}
          <Routes>
            {/* Defining routes for the application */}
            <Route
              path="/"
              element={
                <Home
                  addToCart={addToCart} // Passing addToCart function to Home component
                  womenItems={womenItems} // Passing women's products to Home component
                  techItems={techItems} // Passing tech products to Home component
                  hardwareTools={hardwareTools} // Passing hardware tools to Home component
                />
              }
            />
            <Route path="/login" element={<Login />} /> {/* Login page route */}
            <Route path="/register" element={<Register />} /> {/* Register page route */}
            <Route
              path="/product-details/:id"
              element={<ProductDetails addToCart={addToCart} />} // Product details page route with addToCart function
            />
          </Routes>
          <Footer /> {/* Footer component */}
        </>
      )}
    </>
  );
}

export default App;
