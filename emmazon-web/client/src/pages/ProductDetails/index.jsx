import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseUrl } from "../../config";
import axios from "axios";
import Container from "../../components/Container";
import CustomerReviews from "../../sections/ProductDetails/CustomerReviews";
import ProductDescription from "../../sections/ProductDetails/ProductDescritption";
import Info from "../../components/Info";
import Loading from "../../components/Loader";

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams(); // Extracting product ID from the URL parameters
  const [isLoading, setIsLoading] = useState(true); // State to manage loading state for the product details
  const [product, setProduct] = useState({}); // State to store the product details

  // useEffect hook to fetch product data when the component mounts or when the product ID changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${baseUrl}/products/${id}`); // Fetch product details by ID from the API
        if (data) setProduct(data); // Set product data if available
      } catch (error) {
        console.log("Failed to fetch the product: ", error.message); // Log error if product fetching fails
      } finally {
        setIsLoading(false); // Set loading state to false after the request completes
      }
    };
    fetchData(); // Call the fetchData function
  }, [id]); // Re-run the effect if the product ID changes

  return (
    <main className="pt-8"> {/* Main container for the product details page */}
      {isLoading ? (
        <Loading /> // Display loading indicator while product data is being fetched
      ) : (
        <>
          <Container>
            <ProductDescription
              id={product.id} // Product ID
              img={product.img} // Product image
              title={product.title} // Product title
              price={product.price} // Product price
              status={product.status} // Product availability status
              description={product.description} // Product description
              addToCart={addToCart} // Function to add product to cart
            />
            <CustomerReviews /> {/* Display customer reviews for the product */}
          </Container>
          <Info /> {/* Display additional information (e.g., related products, FAQs) */}
        </>
      )}
    </main>
  );
};

export default ProductDetails;
