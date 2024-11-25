import { useState } from 'react';

const AccordionItem = ({ title, content, isOpen, onToggle }) => {
    return (
        <div className={`rounded-xl p-6 ${isOpen ? 'bg-gray-100' : ''}`}>
            <button
                className={`group pb-3 inline-flex items-center justify-between gap-x-3 w-full text-sm md:text-lg font-semibold text-start rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 ${isOpen ? 'text-gray-300' : 'text-gray-300'}`}
                aria-expanded={isOpen}
                aria-controls={`accordion-content-${title}`}
                onClick={onToggle}
            >
                {title}
                <svg
                    className={`shrink-0 w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'} text-gray-600 group-hover:text-gray-500`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="m6 9 6 6 6-6" />
                </svg>
            </button>
            <div
                id={`accordion-content-${title}`}
                className={`w-full overflow-hidden transition-[height] duration-300 ${isOpen ? 'block' : 'hidden'}`}
                role="region"
                aria-labelledby={`accordion-heading-${title}`}
            >
                <p className="text-gray-800 text-sm sm:text-base">{content}</p>
            </div>
        </div>
    );
};

const Accordion = ({ items }) => {
    // Set the default active index to 0 (first tab)
    const [openIndex, setOpenIndex] = useState(0);

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
