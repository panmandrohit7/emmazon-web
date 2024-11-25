import Container from "../../components/Container";
import Title from "../../components/Title";
import ProductCard from "../../components/ProductCard";

const WomenItems = ({ addToCart, products }) => {
  return (
    <section className="pt-16">
      <Container> {/* Container component to provide consistent styling and layout */}
        <Title>Best Selling Women Items</Title> {/* Title component to display section heading */}

        <div className="flex overflow-x-auto lg:grid lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-10"> {/* Flex container for scrolling on smaller screens and grid layout on larger screens */}
          {products.map((item) => (
            <ProductCard
              {...item} // Spreading product properties to pass them to the ProductCard component
              key={item.id} // Unique key for each product, using the product ID
              cardWidth="w-[250px] lg:w-auto" // Setting the card width for different screen sizes
              addToCart={() => addToCart(item)} // Passing addToCart function to ProductCard with the specific product
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WomenItems;
