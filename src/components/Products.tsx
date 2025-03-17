import P1 from "../assets/fanta1.png";
import P2 from "../assets/fanta2.png";
import P3 from "../assets/fanta3.png";
import P4 from "../assets/fanta4.png";

import { motion } from "framer-motion";

export const fadeUp = (delay: number) => {
  return {
    hidden: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay,
      },
    },
  };
};
const ProductsData = [
  {
    id: 1,
    title: "Orange Fanta",
    image: P1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ",
    delay: 0.5,
  },
  {
    id: 2,
    title: "Lemon Fanta",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ",
    image: P2,
    delay: 0.8,
  },
  {
    id: 3,
    title: "Cola Zero",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima",
    image: P3,
    delay: 1.1,
  },
  {
    id: 4,
    title: "Guarana Antarctica",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima",
    image: P4,
    delay: 1.4,
  },
];
export default function Products() {
  return (
    <div className="bg-gray-200 py-8">
      <div className="container py-14">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Nossos Produtos
        </motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {ProductsData.map((item) => (
            <motion.div
              variants={fadeUp(item.delay)}
              key={item.id}
              initial="hidden"
              whileInView={"show"}
              className="flex flex-col items-center justify-center p-5 max-w-[300px] mx-auto shadow-lg rounded-xl bg-white"
            >
              <img
                src={item.image}
                alt=""
                className="w-[100px] mb-4 hover:rotate-12 hover:scale-110 duration-300"
              />
              <div className="text-center space-y-2">
                <h1 className="text-2xl font-bold font-handwriting text-center">
                  {item.title}
                </h1>
                <p className="text-center text-sm text-gray-600">{item.desc}</p>
                <button className="!mt-5 border-2 border-primary text-primary px-6 py-2 rounded-md hover:bg-primary hover:text-orange-500 transition-all duration-200">
                  Comprar Agora
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
