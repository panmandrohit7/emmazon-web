import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "../Container";
import { IoIosMail, IoLogoInstagram } from "react-icons/io";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { LuUser2 } from "react-icons/lu";
import { TbStars } from "react-icons/tb";
import { FiSearch } from "react-icons/fi";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

const Navbar = ({ cartItems, removeFromCart }) => {
  const [userInfo, setUserInfo] = useState(null); // State to store user information

  // Fetch user information from local storage when the component mounts
  useEffect(() => {
    const updateUserInfo = () => {
      const user = localStorage.getItem("userInfo"); // Get user information from local storage
      if (user) {
        setUserInfo(JSON.parse(user)); // Parse user info and set it in state
      } else {
        setUserInfo(null); // Set user info to null if no user is found
      }
    };

    // Set initial value
    updateUserInfo();

    // Listen for the custom event to update the state
    window.addEventListener("userInfoChanged", updateUserInfo);

    return () => {
      window.removeEventListener("userInfoChanged", updateUserInfo); // Cleanup event listener when component unmounts
    };
  }, []);

  // Calculate the total price of all items in the cart
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity, // Summing up price * quantity for each cart item
    0 // Initial total is set to 0
  );

  // Logout handler function to remove user information from local storage and reset user state
  const logoutHandler = () => {
    localStorage.removeItem("userInfo"); // Remove user info from local storage
    window.dispatchEvent(new Event("userInfoChanged")); // Dispatch custom event to update user info state
    setUserInfo(null); // Set user info to null after logout
  };

  return (
    <nav className="bg-blackD text-white">
      {/* ------------------Navbar Top------------------- */}
      <div className="border-b border-gray-500 hidden lg:block">
        <Container classes="flex items-center justify-between py-4">
          <div className="flex items-center gap-5 text-xs">
            <Link to="/" className="hover:text-yellow-500">
              Warranty
            </Link>
            <Link to="/" className="hover:text-yellow-500">
              Shipping
            </Link>
            <Link to="/" className="hover:text-yellow-500">
              Contact
            </Link>
          </div>
          <div className="flex items-center gap-3">
            {userInfo && <p>Welcome, {userInfo?.name}</p>}
            <IoIosMail className="text-2xl cursor-pointer hover:text-yellow-500" />
            <FaFacebook className="text-lg cursor-pointer hover:text-yellow-500" />
            <IoLogoInstagram className="text-2xl cursor-pointer hover:text-yellow-500" />
            <FaLinkedinIn className="text-xl cursor-pointer hover:text-yellow-500" />
          </div>
        </Container>
      </div>

      {/* ------------Main Navbar-------------- */}
      <Container classes="flex items-center justify-between gap-6 py-5">
        <div>
          <Link to="/">
            <h1 className="font-bold uppercase text-yellowD text-3xl md:text-4xl italic border-yellowD border-y-4">
              Emmazon
            </h1>
          </Link>
        </div>
        <div className="hidden md:flex text-black w-[700px] 2xl:w-[1000px]">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="text-sm px-5 py-4 w-full focus:outline-none rounded-l-sm"
          />
          <button type="submit" className="bg-yellowD rounded-r-sm px-4">
            <FiSearch className="text-2xl" />
          </button>
        </div>

        <div className="hidden lg:flex items-center gap-2 text-white">
          <TbStars className="text-3xl" />
          <div>
            <h1 className="text-[10px] font-bold">Certified Business</h1>
            <p className="text-xs">With over 10,000 orders</p>
          </div>
        </div>

        {/* ------------LOGIN/LOGOUT Buttons for desktop version-------------- */}
        {userInfo ? (
          <button
            onClick={logoutHandler}
            className="hidden lg:flex items-center gap-1 text-white uppercase font-bold text-sm hover:text-yellow-500"
          >
            <LuUser2 className="text-2xl" />
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button className="hidden lg:flex items-center gap-1 text-white uppercase font-bold text-sm hover:text-yellow-500">
              <LuUser2 className="text-2xl" />
              Login
            </button>
          </Link>
        )}

        <div className="flex items-center gap-6">
          {/* ---------------------CART------------------------ */}
          <div>
            <Popover className="relative">
              {({ open }) => (
                <>
                  <PopoverButton className="text-white relative">
                    <FiShoppingCart className="text-2xl" />
                    <div className="absolute -top-2 left-3 -right-2 text-[9px] bg-red-500 py-0.5 rounded-full">
                      {cartItems.length}
                    </div>
                  </PopoverButton>

                  <PopoverPanel className="absolute -right-14 sm:right-0 mt-5 w-[300px] sm:w-[500px] bg-white text-black rounded-lg shadow-xl p-4 z-50">
                    <div className="text-xl font-bold mb-4">Cart</div>
                    {cartItems.length === 0 ? (
                      <p className="text-gray-600">Your cart is empty.</p>
                    ) : (
                      <>
                        <ul>
                          {cartItems.map((item) => (
                            <li
                              key={item.id}
                              className="flex justify-between items-center mb-2 text-xs sm:text-base"
                            >
                              <div className="flex items-center gap-2">
                                <span>{item.title}</span>
                                <span className="font-bold">
                                  $ {(item.price * item.quantity).toFixed(2)}
                                </span>
                              </div>
                              <div className="flex items-center gap-4">
                                <span className="font-bold">
                                  x{item.quantity}
                                </span>
                                <button
                                  onClick={() => removeFromCart(item.id)}
                                  className="text-xs text-red-500 hover:underline"
                                >
                                  Remove
                                </button>
                              </div>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-5 font-bold text-lg text-right">
                          Total Price: ${totalPrice.toFixed(2)}
                        </div>
                      </>
                    )}
                  </PopoverPanel>
                </>
              )}
            </Popover>
          </div>

      {/* ------------LOGIN/LOGOUT Buttons for mobile version-------------- */}
          {userInfo ? (
            <button
              onClick={logoutHandler}
              className="flex lg:hidden items-center gap-1 text-white uppercase font-bold text-sm hover:text-yellow-500"
            >
              <LuUser2 className="text-2xl" />
              Logout
            </button>
          ) : (
            <Link to="/login">
              <button className="flex lg:hidden items-center gap-1 text-white uppercase font-bold text-sm hover:text-yellow-500">
                <LuUser2 className="text-2xl" />
                Login
              </button>
            </Link>
          )}
        </div>
      </Container>

      {/* ------------Mobile version Content for Navbar------------- */}

      <Container classes="md:hidden">
        <div className="flex text-black pb-3">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="text-sm px-5 py-3 rounded-l w-full focus:outline-none"
          />
          <button type="submit" className="bg-yellowD rounded-r px-4">
            <FiSearch className="text-2xl" />
          </button>
        </div>
        <div className="flex items-center justify-center gap-2 text-white pb-3">
          <TbStars className="text-xl" />
          <div>
            <h1 className="text-xs font-bold">
              Certified Business With over 10,000 orders
            </h1>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
