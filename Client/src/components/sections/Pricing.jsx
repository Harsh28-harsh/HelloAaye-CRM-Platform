import { FaCheck } from "react-icons/fa";
import "../../styles/pricing.css";


const plans = [
  {
    title: "Starter",
    price: "$19",
    description: "Perfect for small teams getting started.",
    features: [
      "Up to 5 Users",
      "Lead Management",
      "Basic Analytics",
      "Email Support",
    ],
  },

  {
    title: "Professional",
    price: "$49",
    popular: true,
    description: "Best choice for growing businesses.",
    features: [
      "Unlimited Leads",
      "Advanced Analytics",
      "Automation Tools",
      "Priority Support",
      "Team Collaboration",
    ],
  },

  {
    title: "Enterprise",
    price: "$99",
    description: "For large organizations.",
    features: [
      "Unlimited Users",
      "Custom Reports",
      "Dedicated Manager",
      "Advanced Security",
    ],
  },
];


const Pricing = () => {

  return (

    <section className="pricing section" id="pricing"  data-aos="fade-up">

      <div className="container">


        <div className="section-title">

          <span>
            Pricing Plans
          </span>

          <h2>
            Simple pricing that
            scales with you
          </h2>

          <p>
            Choose a plan that fits your business needs.
          </p>

        </div>



        <div className="pricing-grid">


          {
            plans.map((plan,index)=>(

              <div
                className={
                  plan.popular
                  ?
                  "price-card popular"
                  :
                  "price-card"
                }

                key={index}
              >


                {
                  plan.popular &&

                  <div className="popular-tag">
                    Most Popular
                  </div>

                }



                <h3>
                  {plan.title}
                </h3>


                <h2>
                  {plan.price}
                  <span>
                    /month
                  </span>
                </h2>


                <p>
                  {plan.description}
                </p>



                <ul>

                  {
                    plan.features.map(
                      (item,i)=>(

                      <li key={i}>

                        <FaCheck />

                        {item}

                      </li>

                    ))
                  }

                </ul>



                <button>
                  Get Started
                </button>


              </div>


            ))
          }


        </div>


      </div>


    </section>

  );

};


export default Pricing;