import YellowButton from "../../components/YellowButton";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 5000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};

const HomeSlider = () => {
  return (
    <Carousel
      swipeable={true}
      draggable={true}
      responsive={responsive}
      infinite={true}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      containerClass="carousel-container"
      itemClass="carousel-item-padding-40-px"
      autoPlay={true}
      autoPlaySpeed={3000}
    >
      <div className="relative h-[300px] md:h-[550px]">
        <img
          src="/assets/images/women.jpg"
          alt="tools"
          className="object-cover h-full w-full"
        />
        <div className="bg-black/40 absolute inset-0"></div>
        <div className="absolute top-[50%] sm:left-[50%] sm:translate-x-[-50%] translate-y-[-50%] z-10 p-5 text-center">
          <h1 className="animate-fade uppercase font-bold text-white text-2xl md:text-4xl">
            Discover Your Perfect Style!
          </h1>
          <p className="animate-fade text-white font-medium mt-3">
            Unmatched Comfort, Timeless Fashion.
          </p>

          <div className="flex items-center justify-center gap-4 mt-8">
            <YellowButton link="/" classes="">
              Shop Now
            </YellowButton>
          </div>
        </div>
      </div>

      <div className="relative h-[300px] md:h-[550px]">
        <img
          src="/assets/images/accessories.jpg"
          alt="tools"
          className="object-cover h-full w-full"
        />
        <div className="bg-black/50 absolute inset-0"></div>
        <div className="absolute top-[50%] sm:left-[50%] sm:translate-x-[-50%] translate-y-[-50%] z-10 p-5 text-center">
          <h1 className="animate-fade uppercase font-bold text-white text-2xl md:text-4xl">
            Power Up Your Tech!
          </h1>
          <p className="animate-fade text-white font-medium mt-3">
            Sleek, Smart, and Essential Accessories.
          </p>

          <div className="flex items-center justify-center gap-4 mt-8">
            <YellowButton link="/" classes="">
              Shop Now
            </YellowButton>
          </div>
        </div>
      </div>

      <div className="relative h-[300px] md:h-[560px]">
        <img
          src="/assets/images/tool33.jpg"
          alt="tools"
          className="object-cover h-full w-full"
        />
        <div className="bg-black/35 absolute inset-0"></div>
        <div className="absolute top-[50%] sm:left-[50%] sm:translate-x-[-50%] translate-y-[-50%] z-10 p-5 text-center">
          <h1 className="animate-fade uppercase font-bold text-white text-2xl md:text-4xl">
            top-notch tool kits
          </h1>
          <p className="animate-fade text-white text-sm font-medium mt-3">
            Stock up now on our industry-leading tool kits at reliable prices.
          </p>

          <div className="flex justify-center mt-8">
            <YellowButton link="/" classes="">
              Shop Now
            </YellowButton>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default HomeSlider;
