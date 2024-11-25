import HomeSlider from "../../sections/Home/HomeSlider";
import Container from "../../components/Container";
import HardwareTools from "../../sections/Home/HardwareTools";
import WomenItems from "../../sections/Home/WomenItems";
import TechItems from "../../sections/Home/TechItems";
import Benefits from "../../sections/Home/Benefits";
import SaleCountdown from "../../sections/Home/SaleCountdown";
import Info from "../../components/Info";

export default function Home({ addToCart, womenItems, techItems, hardwareTools }) {
  return (
    <main>
      <HomeSlider />
      <Container>
        <WomenItems addToCart={addToCart} products={womenItems} />
        <TechItems addToCart={addToCart} products={techItems} />
        <SaleCountdown />
        <HardwareTools addToCart={addToCart} products={hardwareTools} />
        <Benefits />
      </Container>
      <Info />
    </main>
  );
}
