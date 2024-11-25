import ProductInfo from "../../components/ProductInfo";

const ProductDescription = ({ id, img, title, price, status, description, addToCart }) => {
  return (
    <section className="pt-5">
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-10">
        {/* ------Product Images------ */}
        <div className="lg:col-span-4">
          <img src={img} alt="product" className="w-full" />
        </div>
        {/* ------Product Info------ */}
        <div className="lg:col-span-3 self-center">
          <ProductInfo
            id={id}
            title={title}
            price={price}
            status={status}
            description={description}
            addToCart={addToCart}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductDescription;
