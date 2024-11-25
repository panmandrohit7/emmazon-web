import Container from "../../components/Container";
import Title from "../../components/Title";
import ProductCard from "../../components/ProductCard";

const TechItems = ({ addToCart, products }) => {
  return (
    <section className="pt-16">
      <Container>
        <Title>Best Selling Tech Items</Title>

        <div className="flex overflow-x-auto lg:grid lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-10">
          {products.map((item) => (
            <ProductCard
              {...item}
              key={item.id}
              cardWidth="w-[250px] lg:w-auto"
              addToCart={() => addToCart(item)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TechItems;
