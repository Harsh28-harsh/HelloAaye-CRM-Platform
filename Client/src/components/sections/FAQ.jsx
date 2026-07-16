import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

import "../../styles/faq.css";


const faqs = [
  {
    question: "What is HelloAaye CRM?",
    answer:
      "HelloAaye CRM is an all-in-one platform that helps businesses manage customers, leads, sales pipelines and workflows efficiently.",
  },

  {
    question: "Can I integrate it with my existing tools?",
    answer:
      "Yes, our CRM supports integrations with popular business tools to keep your workflow connected.",
  },

  {
    question: "Is my customer data secure?",
    answer:
      "Yes, we use enterprise-level security practices to keep your business data protected.",
  },

  {
    question: "Do you provide customer support?",
    answer:
      "Yes, our support team is available to help you whenever you need assistance.",
  },

  {
    question: "Can I upgrade my plan later?",
    answer:
      "Absolutely. You can upgrade or change your subscription plan anytime according to your business requirements.",
  },

];


const FAQ = () => {

  const [activeIndex, setActiveIndex] = useState(null);


  const toggleFAQ = (index)=>{

    setActiveIndex(
      activeIndex === index
      ? null
      : index
    );

  };


  return (

    <section 
      className="faq section"
      id="faq"
      data-aos="fade-up"
    >

      <div className="container">


        <div className="section-title">

          <span>
            FAQ
          </span>

          <h2>
            Frequently Asked Questions
          </h2>

          <p>
            Everything you need to know about our CRM platform.
          </p>

        </div>



        <div className="faq-wrapper">


          {
            faqs.map((item,index)=>(


              <div
                className={
                  activeIndex === index
                  ?
                  "faq-item active"
                  :
                  "faq-item"
                }

                key={index}
              >


                <button
                  className="faq-question"
                  onClick={()=>toggleFAQ(index)}
                >

                  {item.question}


                  <FaChevronDown />

                </button>



                <div className="faq-answer">

                  <p>
                    {item.answer}
                  </p>

                </div>


              </div>


            ))
          }


        </div>


      </div>


    </section>

  );

};


export default FAQ;