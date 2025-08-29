import HeroSlider from "../../components/header/HeroSlider";
import Header1 from "../../components/header/Header-1";
import Header2 from "../../components/header/Header-2";
import Header3 from "../../components/header/Header-3";
import './home.css'
import Hint from "../../components/hint/Hint";
import HealthSlider from "../../components/slideProduct/HealthSlider";
import ProductsPage from "../../components/slideProduct/Product";
import Support from "../../components/support/Support";
import NewsLetter from "../../components/new_letter/NewsLetter";
import Footer from "../../components/footer/Footer";

export default function Home() {
  return (
    <>
      <Header1/>
      <Header2/>
      <Header3/>
      <HeroSlider/>
      <Hint/>
      <HealthSlider/>
      <ProductsPage/>
      <Support/>
      <NewsLetter/>
      <Footer/>
    </>
  );
}
