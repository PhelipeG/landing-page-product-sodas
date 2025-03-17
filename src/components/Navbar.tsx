import { motion } from "framer-motion";
import Logo from "../assets/logo.png";
import { UpdateFollower } from "react-mouse-follower";
import { FaRegUser } from "react-icons/fa";
import { MdMenu } from "react-icons/md";

const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    link: "#",
  },
  {
    id: 2,
    title: "Categorias",
    link: "#",
  },
  {
    id: 3,
    title: "Blog",
    link: "#",
  },
  {
    id: 4,
    title: "Sobre Nos",
    link: "#",
  },
  {
    id: 5,
    title: "Contatos",
    link: "#",
  },
];

export default function Navbar() {
  return (
    <div className="text-white py-3 md:py8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="container flex justify-between items-center"
      >
        <div>
          <img src={Logo} alt="logo" className="max-w-[100px] invert" />
        </div>
        <div className="hidden md:block">
          <ul className="flex items-center gap-4 relative z-40">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 9999,
                    followSpeed: 1.5,
                    scale: 5,
                    mixBlendMode: "difference",
                  }}
                >
                  <a
                    href={menu.link}
                    className="inline-block text-base font-semibold py-2 px-3 uppercase"
                  >
                    {menu.title}
                  </a>
                </UpdateFollower>
              </li>
            ))}
            <UpdateFollower
              mouseOptions={{
                backgroundColor: "white",
                zIndex: 9999,
                followSpeed: 1.5,
                scale: 5,
                mixBlendMode: "difference",
              }}
            >
              <button className="text-xl ps-14">
                <FaRegUser />
              </button>
            </UpdateFollower>
          </ul>
        </div>
        <div className="md:hidden">
          <MdMenu className="text-4xl" />
        </div>
      </motion.div>
    </div>
  );
}
