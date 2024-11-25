import { FaStar } from "react-icons/fa";

const reviewList = [
  {
    id: 1,
    title: "GREAT QUALITY",
    name: "Henry",
    date: "Dec 07, 2023",
    review:
      "Overall, this product is very well. I like the it very much, super fast delivery.",
  },
  {
    id: 2,
    title: "HIGHLY RECOMMEND",
    name: "Michael",
    date: "July 07, 2023",
    review: "I'm really happy with my purchase. Very good quality.",
  },
];

const CustomerReviews = () => {
  return (
    <section className="mt-20">
      <div className="border-2 border-gray-300 rounded p-8">
        <div className="border-b border-gray-300 pb-8">
          <h1 className="font-bold text-2xl">CUSTOMER REVIEWS</h1>
        </div>

        {/* ------------------Reviews-------------------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {reviewList.map((item) => (
            <div key={item.id} className="p-2">
              <div className="flex items-center gap-1 mt-5">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <h1 className="text-xl font-bold mt-4">{item.title}</h1>
              <p className="text-sm mt-2 text-gray-500">
                {item.name} on {item.date}
              </p>
              <p className="mt-3 text-sm">{item.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
