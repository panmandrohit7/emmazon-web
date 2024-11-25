import YellowButton from "../../components/YellowButton";
import Timer from "../../components/Timer";

const SaleCountdown = () => {
  return (
    <section className="pt-16">
      <div className="relative h-[290px] md:h-[250px]">
        <img
          src="/assets/images/women.jpg"
          alt="person hand and tool"
          className="object-cover h-full w-full"
        />
        <div className="bg-black/40 absolute inset-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:pt-5">
            <div className="p-5 sm:p-8 text-center md:text-left">
              <h1 className="uppercase font-bold text-white text-3xl tracking-wide">
                SAVE UP TO 50%
              </h1>
              <p className="text-white font-medium mt-3">
                For a limited time only, save big on top women items.
              </p>
              <div className="mt-4 md:hidden">
                <Timer days={10} hours={21} minutes={15} seconds={0} />
              </div>
              <div className="mt-7 md:mt-5">
                <YellowButton link="/" classes="font-semibold">
                  shop sale
                </YellowButton>
              </div>
            </div>

            {/* -----------Countdown of 24 days----------- */}
            <div className="p-8 hidden md:block mt-7">
              <Timer days={10} hours={21} minutes={15} seconds={0} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaleCountdown;
