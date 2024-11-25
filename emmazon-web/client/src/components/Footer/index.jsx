import { useState } from "react";
import { IoIosMail, IoLogoInstagram } from "react-icons/io";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import Container from "../Container";
import { Link } from "react-router-dom";

// List of footer sections and their respective links
const footerList = [
  {
    id: 1,
    name: "PRODUCTS",
    list: [
      { name: "By Category", link: "/" },
      { name: "By Industry", link: "/" },
      { name: "Accessories", link: "/" },
      { name: "Sale", link: "/" },
    ],
  },
  {
    id: 2,
    name: "SUPPORT & SERVICES",
    list: [
      { name: "Contact Us", link: "/" },
      { name: "Services", link: "/" },
      { name: "Shipping & Returns", link: "/" },
      { name: "Warranty", link: "/" },
    ],
  },
  {
    id: 3,
    img: "/assets/images/tool19.jpg",
    name: "COMPANY",
    list: [
      { name: "About Us", link: "/" },
      { name: "Careers", link: "/" },
    ],
  },
];

const Footer = () => {
  const [email, setEmail] = useState(""); // State to manage the email input value

  // Function to handle the email form submission
  const submitHandler = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log(email); // Log the email value to the console
  };

  return (
    <footer className="bg-blackD text-white pt-16 pb-12 mt-10"> {/* Footer container with styling */}
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* ---------Social Icons--------- */}
          <div>
            <h1 className="uppercase font-bold mb-4">Follow Us</h1> {/* Section title for social media links */}
            <div className="flex items-center gap-2">
              <a
                href="#"
                className="bg-white/20 rounded-full p-1 hover:scale-105" // Styling for social media icon button
              >
                <IoIosMail className="text-xl" /> {/* Email icon */}
              </a>
              <a
                href="#"
                className="bg-white/20 rounded-full p-1 hover:scale-105" // Styling for social media icon button
              >
                <FaFacebook className="text-xl" /> {/* Facebook icon */}
              </a>
              <a
                href="#"
                className="bg-white/20 rounded-full p-1 hover:scale-105" // Styling for social media icon button
              >
                <IoLogoInstagram className="text-xl" /> {/* Instagram icon */}
              </a>
              <a
                href="#"
                className="bg-white/20 rounded-full p-1 hover:scale-105" // Styling for social media icon button
              >
                <FaLinkedinIn className="text-xl" /> {/* LinkedIn icon */}
              </a>
            </div>
          </div>

          {/* ---------Links--------- */}
          {footerList.map((item) => (
            <div key={item.id}> {/* Map through footerList to create sections with links */}
              <h1 className="uppercase font-bold mb-4">{item.name}</h1> {/* Section title */}
              {item.list.map((i) => (
                <Link key={i.name} href={i.link}> {/* Link to the respective pages */}
                  <p className="mt-2 text-sm">{i.name}</p> {/* Link name */}
                </Link>
              ))}
            </div>
          ))}

          {/* ---------Newsletter--------- */}
          <div className="col-span-2"> {/* Newsletter signup section */}
            <h1 className="uppercase font-bold mb-4">EMAIL SIGNUP</h1> {/* Section title for email signup */}
            <p className="text-xs mt-2">
              Join our newsletter and receive updates.
            </p> {/* Description for email signup */}
            <form onSubmit={submitHandler} className="flex gap-3 mt-5"> {/* Form for submitting email */}
              <input
                type="email"
                placeholder="Email address" // Placeholder for email input
                onChange={(e) => setEmail(e.target.value)} // Update email state on change
                className="text-black px-3 py-2 rounded-sm w-[200px] sm:w-auto lg:w-[190px] xl:w-auto focus:outline-yellowD" // Styling for email input
                required
              />
              <button
                type="submit"
                className="px-5 py-3 bg-yellowD text-sm font-bold text-black capitalize rounded-sm hover:bg-opacity-85 active:scale-95" // Styling for submit button
              >
                Sign up
              </button>
            </form>
          </div>
        </div>

        {/* ---------Copyright--------- */}
        <div className="sm:flex items-start justify-between mt-16 lg:mt-28">
          <div>
            <div className="flex items-center justify-center sm:justify-start gap-2 text-sm lg:text-xs">
              <Link to="/">Account</Link> {/* Link to account page */}
              <span>|</span>
              <Link to="/">Privacy Policy</Link> {/* Link to privacy policy */}
              <span>|</span>
              <Link to="/">Contact</Link> {/* Link to contact page */}
            </div>
            <p className="text-xs text-center sm:text-left mt-2">
              Copyright &copy; {new Date().getFullYear()} Emmazon. {/* Dynamic year for copyright notice */}
            </p>
          </div>
          <div className="flex items-center justify-center sm:justify-start gap-3 mt-3 sm:mt-0">
            <img src="/assets/images/visa.png" alt="visa card" className="w-10" /> {/* Visa card logo */}
            <img src="/assets/images/master.png" alt="master card" className="w-10" /> {/* MasterCard logo */}
            <img src="/assets/images/paypal.png" alt="paypal card" className="w-10" /> {/* PayPal logo */}
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

