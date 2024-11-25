import User from "../models/user.js";

// @desc: Login user
// @route: POST /user/login
// @access: Public

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body; // Extracting email and password from the request body
    const user = await User.findOne({ email }); // Finding a user in the database with the provided email

    // Check if user exists and if the provided password matches the stored hashed password
    if (user && (await user.matchPassword(password))) {
      res.json({
        uId: user._id, // Return the user ID
        name: user.firstName, // Return the user's first name
        email: user.email, // Return the user's email
      });
    } else {
      res.json({ message: "Invalid email or password" }); // Return error message if credentials are incorrect
    }
  } catch (error) {
    res.status(404).json({ error }); // Return a 404 error if something goes wrong during the login process
  }
};

// @desc: Register a new user
// @route: POST /user/register
// @access: Public

const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body; // Extracting user details from the request body

    const userExists = await User.findOne({ email }); // Check if a user with the given email already exists

    if (userExists) {
      return res.status(200).json({ message: "User already exists." }); // Return a message if the user already exists
    }

    // Create a new user in the database
    const user = await User.create({
      firstName,
      lastName,
      email,
      password, // Password will be hashed before being saved, as defined in the User model
    });

    // If user is successfully created, return the user details
    if (user) {
      res.status(201).json({
        uId: user._id, // Return the user ID
        name: user.firstName, // Return the user's first name
        email: user.email, // Return the user's email
      });
    }
  } catch (error) {
    res.status(400).json({ message: "All fields are required.", error }); // Return a 400 error if there is an issue with the request
  }
};

export { loginUser, registerUser };
