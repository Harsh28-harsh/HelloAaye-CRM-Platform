import {
  FaUsers,
  FaChartLine,
  FaRobot,
  FaShieldAlt,
  FaCloud,
  FaComments,
} from "react-icons/fa";

import "../../styles/features.css";


const features = [
  {
    icon: <FaUsers />,
    title: "Lead Management",
    description:
      "Capture, organize and manage your leads efficiently from one centralized CRM dashboard.",
  },

  {
    icon: <FaChartLine />,
    title: "Sales Analytics",
    description:
      "Track your sales performance with real-time insights and powerful reporting tools.",
  },

  {
    icon: <FaRobot />,
    title: "Workflow Automation",
    description:
      "Automate repetitive tasks and let your team focus on closing more deals.",
  },

  {
    icon: <FaShieldAlt />,
    title: "Secure Data",
    description:
      "Keep your customer information protected with enterprise-grade security.",
  },

  {
    icon: <FaCloud />,
    title: "Cloud Platform",
    description:
      "Access your CRM anywhere with a fast and reliable cloud-based solution.",
  },

  {
    icon: <FaComments />,
    title: "Team Collaboration",
    description:
      "Improve communication and manage customer relationships together.",
  },
];


const Features = () => {

  return (

    <section className="features section" id="features" data-aos="fade-up">

      <div className="container">


        <div className="section-title">

          <span>
            Powerful Features
          </span>

          <h2>
            Everything you need to
            <br />
            grow your business
          </h2>

          <p>
            A complete CRM solution designed to simplify
            sales, marketing and customer management.
          </p>

        </div>



        <div className="features-grid">


          {
            features.map((feature,index)=>(

              <div 
                className="feature-card"
                key={index}
              >

                <div className="feature-icon">
                  {feature.icon}
                </div>


                <h3>
                  {feature.title}
                </h3>


                <p>
                  {feature.description}
                </p>


              </div>

            ))
          }


        </div>


      </div>
      


    </section>

  );
};


export default Features;