import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import Testimonials from "../components/sections/Testimonials";

import InquiryForm from "../components/sections/InquiryForm";
import FAQ from "../components/sections/FAQ";
import Pricing from "../components/sections/Pricing";
import Features from "../components/sections/Features";


const Home = () => {

  return (

    <>
      <Navbar />

      <Hero />

      <Features />

      <Pricing />
      <Testimonials />
      <FAQ />
      <InquiryForm />
      <Footer />
      
    </>

  );

};


export default Home;