import { motion } from "framer-motion";
import Logo from "../assets/logo.png";
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaPhone,
  FaTelegram,
} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import MethodsCardImg from "../assets/credit-cards.webp";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* company details section */}
          <motion.div>
            <img src={Logo} alt="" className="max-w-[100px] invert" />
            <div>
              <p className="flex items-center gap-2">
                <FaPhone />
                +99 1234567890
              </p>
              <p className="flex items-center gap-2 mt-2">
                {" "}
                <FaMapLocation /> Caxias, Maranhão
              </p>
            </div>
          </motion.div>
          {/* Footer Links section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.6,
            }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold">Links Rapidos</h1>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <ul className="space-y-2">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact us</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact us</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
            </div>
          </motion.div>
          {/* Social Links section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.6,
              duration: 0.6,
            }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold">Redes Sociais</h1>
            <div className="flex items-center gap-3">
              <FaFacebook className="text-3xl hover:scale-105 duration-300" />
              <FaInstagram className="text-3xl hover:scale-105 duration-300" />
              <FaTelegram className="text-3xl hover:scale-105 duration-300" />
              <FaGoogle className="text-3xl hover:scale-105 duration-300" />
            </div>
            <div className="space-y-2">
              <p>Metodos de Pagamento</p>
              <img src={MethodsCardImg} alt="" />
            </div>
          </motion.div>
        </div>
        {/* copyright section */}
        <p className="text-center mt-8 border-t-2 border-white/40 pt-8">
          Copyright &copy; 2025. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
