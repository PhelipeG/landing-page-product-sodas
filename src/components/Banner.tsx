import BannerImg from "../assets/juice.png";
import Splash from "../assets/splash.png";
import { motion } from "framer-motion";
import { fadeUp } from "./Products";

const Banner = () => {
  return (
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 gap-12 mx-auto py-14">
        {/* Banner Image section */}
        <div className="relative">
          <motion.img
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
            src={BannerImg}
            alt=""
            className="w-[300px] md:w-[400px] mx-auto relative z-10"
          />
          <motion.img
            initial={{ opacity: 0, y: -100, rotate: -180, scale: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
            src={Splash}
            alt=""
            className="absolute bottom-0 z-0"
          />
        </div>
        {/* Banner Text info section */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">
            <motion.h1
              variants={fadeUp(0.7)}
              initial="hidden"
              whileInView="show"
              className="text-3xl lg:text-4xl font-semibold "
            >
              Refresque seu mundo com Fanta
            </motion.h1>
            <motion.p
              variants={fadeUp(0.9)}
              initial="hidden"
              whileInView="show"
              className="text-gray-500"
            >
              Fanta traz uma explosão de sabores vibrantes e diversão
              efervescente para o seu dia! Quer você esteja procurando matar sua
              sede com uma laranja picante, limão picante ou um dos nossos
              muitos outros sabores inspirados em frutas, Fanta é sua bebida
              preferida para uma experiência refrescante e emocionante. Mergulhe
              no mundo de Fanta e deixe cada gole despertar seus sentidos com
              seu sabor ousado, borbulhante e refrescante!
            </motion.p>
            <motion.button
              variants={fadeUp(1.1)}
              initial="hidden"
              whileInView="show"
              className="!mt-5 border-2 border-primary text-primary px-6 py-2 rounded-md hover:bg-primary hover:text-white duration-200"
            >
              Compre Agora
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
