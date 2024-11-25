import YellowButton from "../../components/YellowButton";

const Benefits = () => {
  return (
    <section className="pt-10 md:pt-16">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-y-5 md:gap-5">
        {/* -------Left Deals section------- */}
        <div className="md:col-span-3">
          <div className="relative h-[270px] md:h-[550px]">
            <img
              src="/assets/images/tool6.jpg"
              alt="tool"
              className="object-cover h-full w-full"
            />
            <div className="bg-black/35 absolute inset-0"></div>
            <div className="absolute bottom-4 z-10 p-5">
              <h1 className="uppercase font-bold text-white text-2xl sm:text-3xl">
                Deals of the year
              </h1>
              <p className="text-white font-medium mt-3 text-sm sm:text-base">
                Great deals are temporary, but quality tools are forever.
              </p>
              <p className="text-white font-medium text-sm sm:text-base">
                Save up to 50% on selected items.
              </p>

              <div className="mt-8 sm:mt-10">
                <YellowButton link="/">Shop sale</YellowButton>
              </div>
            </div>
          </div>
        </div>

        {/* -------Right section------- */}
        <div className="md:col-span-2">
          <div className="flex flex-col gap-5">
            <div className="relative h-[265px]">
              <img
                src="/assets/images/tool7.jpg"
                alt="tool"
                className="object-cover h-full w-full"
              />
              <div className="bg-black/35 absolute inset-0"></div>
              <div className="absolute bottom-4 z-10 p-5">
                <h1 className="uppercase font-bold text-white text-2xl sm:text-3xl">
                  for the expert
                </h1>
                <p className="text-white text-sm font-medium mt-3">
                  Premium wrenches, pilers, and
                </p>
                <p className="text-white text-sm font-medium">
                  more at competitive prices.
                </p>

                <div className="mt-8 sm:mt-10">
                  <YellowButton link="/" classes="text-sm">
                    Shop hand tools
                  </YellowButton>
                </div>
              </div>
            </div>

            <div className="relative h-[265px]">
              <img
                src="/assets/images/persons.jpg"
                alt="persons"
                className="object-cover h-full w-full"
              />
              <div className="bg-black/35 absolute inset-0"></div>
              <div className="absolute bottom-4 z-10 p-5">
                <h1 className="uppercase font-bold text-white text-2xl sm:text-3xl">
                  pro services
                </h1>
                <p className="text-white text-sm font-medium mt-3">
                  Now offer a range of technical
                </p>
                <p className="text-white text-sm font-medium">
                  solution for your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
