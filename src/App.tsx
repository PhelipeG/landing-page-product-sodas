import { UpdateFollower } from "react-mouse-follower";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Footer from "./components/Footer";

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
        <Footer />
      </UpdateFollower>
    </main>
  );
}
