import { useState } from "react";

const AccordionItem = ({ title, content, isOpen, onToggle }) => {
    return (
        <div className="hs-accordion hs-accordion-active:bg-gray-500 rounded-xl p-6">
            <button
                className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500"
                aria-expanded={isOpen}
                aria-controls={`accordion-content-${title}`}
                onClick={onToggle}
            >
                {title}
                <svg
                    className={`hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 ${isOpen ? "hidden" : ""
                        }`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="m6 9 6 6 6-6" />
                </svg>
                <svg
                    className={`hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 ${isOpen ? "" : "hidden"
                        }`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="m18 15-6-6-6 6" />
                </svg>
            </button>
            <div
                id={`accordion-content-${title}`}
                className={`hs-accordion-content w-full overflow-hidden transition-[height] duration-300 ${isOpen ? "block" : "hidden"
                    }`}
                role="region"
                aria-labelledby={`accordion-heading-${title}`}
            >
                <p className="text-gray-800">{content}</p>
            </div>
        </div>
    );
};

const Accordion = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="hs-accordion-group">
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    content={item.content}
                    isOpen={openIndex === index}
                    onToggle={() => handleToggle(index)}
                />
            ))}
        </div>
    );
};

export default Accordion;
