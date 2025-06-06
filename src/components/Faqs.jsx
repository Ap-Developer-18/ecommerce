import { useState } from "react";
import Heading from "./common/Heading";

const faqs = [
  {
    question: "Lorem ipsum dolor sit amet",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Nisi rutrum in volutpat at amet faucibus netus nibh. Nisi pellentesque id eget elementum. Est duis non pellentesque nibh ut.",
  },
  {
    question:
      "Lorem ipsum dolor sit amet consectetur. Mus laoreet nisl sagittis euismod at varius suspendisse nibh condimentum.",
    answer: "Answer for second question goes here.",
  },
  {
    question: "Lorem ipsum dolor sit amet",
    answer: "Third answer placeholder.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur.",
    answer: "Fourth answer goes here.",
  },
  {
    question:
      "Lorem ipsum dolor sit amet consectetur. At consectetur velit nibh eget",
    answer: "Fifth answer here.",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur.",
    answer: "Sixth answer.",
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="bg-black min-h-screen p-6 space-y-4 text-white max-w-[825px] mx-auto px-6">
      <Heading simpleText="Frequently Asked Questions" className="text-center mb-6" />
      {faqs.map((item, index) => (
        <div key={index} className={`border border-[#2F2F2F]`}>
          <button
            onClick={() => toggle(index)}
            className="w-full cursor-pointer text-left flex justify-between items-center gap-4 p-4">
            <span className="font-semibold overflow-hidden text-ellipsis text-nowrap">{item.question}</span>
            <span className="text-xl font-bold">
              {openIndex === index ? "−" : "+"}
            </span>
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-40 opacity-100 p-4 pt-0" : "max-h-0 opacity-0 p-0"
              } text-sm text-neutral-300`}
          >
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faqs;