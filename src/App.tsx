import { UpdateFollower } from "react-mouse-follower";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Blog from "./components/Blog";
import FAQ from "./components/Faq";
import BannerText from "./components/BannerText";

export default function App() {
  return (
    <main className="overflow-x-hidden">
      <UpdateFollower
        mouseOptions={{
          backgroundColor: "white",
          zIndex: 10,
          followSpeed: 1.5,
        }}
      >
        <Hero />
        <Products />
        <Banner />
        <BannerText />
        <Blog />
        <FAQ />
        <Footer />
      </UpdateFollower>
    </main>
  );
}
