/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

const faqData = [
  {
    question: "O que é Fanta?",
    answer:
      "Fanta é uma marca de refrigerante de frutas da The Coca-Cola Company.",
  },
  {
    question: "O que é Fanta Orange?",
    answer:
      "Fanta Orange é um refrigerante de laranja com sabor cítrico e doce.",
  },
  {
    question: "Fanta é vegana?",
    answer:
      "Sim, Fanta é vegana. A bebida não contém ingredientes de origem animal.",
  },
  {
    question: "Como é feita a Fanta Orange?",
    answer: "Fanta Orange é feita com suco de laranja natural.",
  },
];
export default function FAQ() {
  const [active, setActive] = useState(null);

  const handleClick = (index: any) => {
    setActive(index === active ? null : index);
  };
  return (
    <div className="max-w-2xl mx-auto mt-20 mb-28 px-8">
      <h1 className="text-3xl font-bold text-center pb-8">
        Perguntas Frequentes sobre Fanta
      </h1>

      {faqData.map((item, index) => (
        <div key={index} className="mb-4 py-4 border-b border-gray-300 ">
          <div
            className="flex justify-between items-center cursor-pointer py-4"
            onClick={() => handleClick(index)}
          >
            <h3 className="text-xl font-semibold text-gray-800">
              {item.question}
            </h3>
            <span>{active === index ? "-" : "+"}</span>
          </div>

          {active === index && <p className="text-gray-600">{item.answer}</p>}
        </div>
      ))}
    </div>
  );
}
