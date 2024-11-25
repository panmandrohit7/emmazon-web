import { Link } from "react-router-dom";

const YellowButton = ({ children, link, classes }) => {
  return (
    <Link
      to={link}
      className={`${classes} px-3 md:px-5 py-3 bg-yellowD text-black text-sm md:text-base capitalize rounded hover:bg-opacity-90 active:scale-95`}
    >
      {children}
    </Link>
  );
};

export default YellowButton;
