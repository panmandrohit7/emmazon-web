import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { baseUrl } from "../../config";
import axios from "axios";
import Alert from "../../components/Alert";
import LoadingSpinner from "../../components/LoadingSpinner";

const Login = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically
  const [email, setEmail] = useState(""); // State to hold email input value
  const [password, setPassword] = useState(""); // State to hold password input value
  const [loading, setLoading] = useState(false); // State to manage loading state
  const [alertMsg, setAlertMsg] = useState(""); // State to hold alert messages

  /**
   * Handles the form submission event (Signing in functionality).
   * Sends user credentials to the backend for authentication.
   */
  const onSubmitHandler = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      setLoading(true); // Set loading state to true when form is submitted
      const { data } = await axios.post(`${baseUrl}/user/login`, {
        email,
        password,
      }); // Sending email and password to the login API endpoint

      if (data?.message) setAlertMsg(data.message); // Set alert message if the server returns a message
      if (data?.email) {
        localStorage.setItem("userInfo", JSON.stringify(data)); // Store user information in local storage if login is successful
        window.dispatchEvent(new Event("userInfoChanged")); // Dispatch custom event to notify other components of user login
        navigate("/"); // Redirect user to the homepage after successful login
      }
    } catch (error) {
      console.log("Login failed: ", error.message); // Log error message if login fails
    } finally {
      setLoading(false); // Set loading state to false when the request completes
    }
  };

  return (
    <div className="flex min-h-screen p-5"> {/* Main container for the login page */}
      <div className="mx-auto w-full max-w-sm lg:w-96 mt-32"> {/* Centered container with max width for the form */}
        <div>
          <h2 className="mt-6 text-2xl font-bold leading-9 tracking-tight text-blackLight">
            Sign in to your account {/* Page heading */}
          </h2>
          <p className="mt-2 text-sm leading-6 text-gray-500">
            Don&apos;t have an account? {/* Prompt for users who don't have an account */}
            <Link
              to="/register"
              className="font-semibold text-indigo-600 hover:text-indigo-500 !underline"
            >
              Sign Up {/* Link to the registration page */}
            </Link>
          </p>
        </div>

        {/* ------Alert to show errors------ */}
        {alertMsg && (
          <div className="mt-6">
            <Alert alertMsg={alertMsg} /> {/* Display alert message if there is one */}
          </div>
        )}

        <form
          onSubmit={onSubmitHandler} // Form submission handler
          className={`space-y-6 ${alertMsg ? "mt-5" : "mt-8"}`} // Dynamic spacing depending on whether an alert message is displayed
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address {/* Label for email input */}
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                value={email} // Bind email input value to state
                onChange={(e) => setEmail(e.target.value)} // Update state on email input change
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 px-2 py-1.5 shadow-sm focus:ring-2 focus:ring-blackLight ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" // Styling for email input
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password {/* Label for password input */}
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                value={password} // Bind password input value to state
                onChange={(e) => setPassword(e.target.value)} // Update state on password input change
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 px-2 py-1.5 shadow-sm focus:ring-2 focus:ring-blackLight ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" // Styling for password input
              />
            </div>
          </div>

          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-yellowD px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-opacity-85"
          >
            {loading ? <LoadingSpinner /> : " Sign in"} {/* Display loading spinner or sign-in text based on loading state */}
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;
