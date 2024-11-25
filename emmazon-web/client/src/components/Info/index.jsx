import { Link } from "react-router-dom";
import { TfiTruck } from "react-icons/tfi";
import { RiUserVoiceLine } from "react-icons/ri";
import { BsInfoSquare } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import Container from "../Container";

const infoList = [
  {
    id: 1,
    link: "/",
    icon: <TfiTruck />,
    name: "free shipping",
    detail: "When you spend $250+",
  },
  {
    id: 2,
    link: "/",
    icon: <RiUserVoiceLine />,
    name: "need help?",
    detail: "Contact our support team today",
  },
  {
    id: 3,
    link: "/",
    icon: <BsInfoSquare />,
    name: "warranty info",
    detail: "Offering a range of policies",
  },
  {
    id: 4,
    link: "/",
    icon: <IoLocationOutline />,
    name: "find a retailer",
    detail: "Locate the right inventory",
  },
];
const Info = () => {
  return (
    <section className="bg-grayD py-10 mt-16">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-5 md:px-10">
          {infoList.map((item) => (
            <Link to={item.link} key={item.id}>
              <div className="text-center">
                <div className="flex justify-center">
                  <span className="text-4xl text-yellowD">{item.icon}</span>
                </div>
                <h1 className="mt-3 font-bold uppercase">{item.name}</h1>
                <p className="text-sm mt-1">{item.detail}</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Info;
