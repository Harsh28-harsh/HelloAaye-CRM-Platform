import { FaStar } from "react-icons/fa";
import "../../styles/testimonial.css";


const testimonials = [
  {
    name: "Amit trivedi",
    role: "Marketing Manager",
    company: "TechFlow Inc.",
    review:
      "This CRM completely transformed our sales workflow. Our team became more productive within weeks.",
  },

  {
    name: "Aayush Arora",
    role: "Founder",
    company: "GrowthLabs",
    review:
      "The automation features helped us save hours every week and close more deals.",
  },

  {
    name: "Anjali singh",
    role: "Sales Director",
    company: "Nova Solutions",
    review:
      "A powerful yet simple CRM platform. The analytics are extremely useful for our team.",
  },
];


const Testimonials = () => {

  return (

    <section 
      className="testimonials section"
      id="testimonials"
      data-aos="fade-up"
    >

      <div className="container">


        <div className="section-title">

          <span>
            Testimonials
          </span>

          <h2>
            Loved by businesses
            worldwide
          </h2>

          <p>
            See what our customers say about their experience.
          </p>

        </div>



        <div className="testimonial-grid">


          {
            testimonials.map((item,index)=>(


              <div 
                className="testimonial-card"
                key={index}
              >


                <div className="stars">

                  {
                    Array(5)
                    .fill(0)
                    .map((_,i)=>(

                      <FaStar key={i}/>

                    ))
                  }

                </div>



                <p>
                  "{item.review}"
                </p>



                <div className="user-info">


                  <div className="avatar">
                    {item.name.charAt(0)}
                  </div>


                  <div>

                    <h4>
                      {item.name}
                    </h4>

                    <span>
                      {item.role}
                      {" "}
                      ·
                      {" "}
                      {item.company}
                    </span>

                  </div>


                </div>


              </div>


            ))
          }


        </div>


      </div>


    </section>

  );

};


export default Testimonials;