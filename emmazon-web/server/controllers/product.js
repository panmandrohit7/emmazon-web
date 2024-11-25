import Product from "../models/product.js";

// @desc: Fetch all products
// @route: GET /products
// @access: Public

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({}); // Fetching all products from the database
    const updatedProducts = products.map((product) => {
      return {
        ...product.toObject(), // Convert the Mongoose document to a plain JavaScript object
        id: product._id, // Assign _id to id to make it more frontend-friendly
      };
    });
    res.json(updatedProducts); // Return the modified list of products as a response
  } catch (error) {
    res.status(400).json({ message: error.message }); // Return a 400 error if there is an issue with fetching products
  }
};

// @desc: Fetch product by Id
// @route: GET /products/:id
// @access: Public

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id); // Fetching a product by its ID from the database
    if (!product) {
      // If product is not found, return a 404 error
      return res.status(404).json({ message: "Product not found" });
    }
    const updatedProduct = {
      ...product.toObject(), // Convert the Mongoose document to a plain JavaScript object
      id: product._id, // Assign _id to id to make it more frontend-friendly
    };
    res.json(updatedProduct); // Return the modified product as a response
  } catch (error) {
    res.status(404).json({ message: "Product not found", error }); // Return a 404 error if there is an issue with fetching the product
  }
};

export { getProducts, getProductById };
