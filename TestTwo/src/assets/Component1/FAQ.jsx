import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const FaqAccordions =()=> {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqItems = [
        {
            question: "How do I create an account?",
            answer:
                "Click on the 'Sign Up' button on the top right corner and follow the registration process.",
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept all major credit cards, PayPal, and bank transfers.",
        },
        {
            question: "Can I cancel my subscription?",
            answer: "Yes, you can cancel anytime through your account settings.",
        },
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-container">
            <h2 className="faq-title">Project 1: Frequently Asked Questions</h2>
            <div className="accordion">
                {faqItems.map((item, index) => (
                    <div
                        className={`accordion-item ${activeIndex === index ? "active" : ""
                            }`}
                        key={index}
                    >
                        <div
                            className="accordion-header"
                            onClick={() => toggleAccordion(index)}
                        >
                            <h3>{item.question}</h3>
                            <FontAwesomeIcon
                                icon={activeIndex === index ? faChevronUp : faChevronDown}
                                className="accordion-icon"
                            />
                        </div>
                        <div className="accordion-body">
                            <p>{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FaqAccordions;


