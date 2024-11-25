import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { baseUrl } from "../../config";
import LoadingSpinner from "../../components/LoadingSpinner";
import Alert from "../../components/Alert";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically
  const [firstName, setFirstName] = useState(""); // State to hold first name input value
  const [lastName, setLastName] = useState(""); // State to hold last name input value
  const [email, setEmail] = useState(""); // State to hold email input value
  const [password, setPassword] = useState(""); // State to hold password input value
  const [confirmPassword, setConfirmPassword] = useState(""); // State to hold confirm password input value
  const [alertMsg, setAlertMsg] = useState(""); // State to hold alert messages
  const [loading, setLoading] = useState(false); // State to manage loading state

  /**
   * Handles the form submission event (Signing up functionality).
   * Sends user data to the backend for registration.
   */
  const onSubmitHandler = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const userData = {
      firstName,
      lastName,
      email,
      password,
    }; // Collect user data from state

    try {
      setLoading(true); // Set loading state to true when form is submitted

      if (!(password === confirmPassword))
        // Check if passwords match
        return setAlertMsg("Passwords doesn't match"); // Set alert message if passwords do not match

      const { data } = await axios.post(`${baseUrl}/user/register`, userData); // Sending user data to the registration API endpoint

      if (data.message) setAlertMsg(data.message); // Set alert message if the server returns a message
      if (data?.email) {
        localStorage.setItem("userInfo", JSON.stringify(data)); // Store user information in local storage if registration is successful
        window.dispatchEvent(new Event("userInfoChanged")); // Dispatch custom event to notify other components of user registration
        navigate("/"); // Redirect user to the homepage after successful registration
      }
    } catch (error) {
      console.log("Failed to register the user: ", error.message); // Log error message if registration fails
    } finally {
      setLoading(false); // Set loading state to false when the request completes
    }
  };

  return (
    <div className="flex min-h-screen p-5">
      <div className="mx-auto w-full max-w-sm lg:w-96 pt-16">
        <div>
          <h2 className="mt-6 text-2xl font-bold leading-9 tracking-tight text-blackLight">
            Create your account
          </h2>
          <p className="mt-2 text-sm leading-6 text-gray-500">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-indigo-600 hover:text-indigo-500 !underline"
            >
              Sign In
            </Link>
          </p>
        </div>

        {/* ------Alert to show errors------ */}
        {alertMsg && (
          <div className="mt-6">
            <Alert alertMsg={alertMsg} />
          </div>
        )}

        <form
          onSubmit={onSubmitHandler}
          className={`space-y-6 ${alertMsg ? "mt-5" : "mt-8"}`}
        >
          {/* -------First and Last Name-------- */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label
                htmlFor="fname"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First Name
              </label>
              <div className="mt-2">
                <input
                  id="fname"
                  name="first name"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 px-2 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blackLight placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="lname"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last Name
              </label>
              <div className="mt-2">
                <input
                  id="lname"
                  name="last name"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 px-2 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blackLight placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          {/*  -----------Email Address---------- */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email Address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 px-2 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-blackLight sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          {/*  -----------Password---------- */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 px-2 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blackLight placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          {/*  -----------Confirm Password---------- */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Confirm Password
            </label>
            <div className="mt-2">
              <input
                id="confirmPassword"
                name="confirm Password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="block w-full rounded-md border-0 px-2 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-blackLight placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          {/*  -----------Submit Button---------- */}
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-yellowD px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-opacity-85"
          >
            {loading ? <LoadingSpinner /> : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};
export default Register;
