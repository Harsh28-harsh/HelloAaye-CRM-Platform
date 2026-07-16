import {
  FaArrowRight,
  FaPlayCircle,
  FaUsers,
  FaChartLine,
  FaHandshake,
} from "react-icons/fa";

import "../../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero"  id="hero"
  data-aos="fade-up" >

      <div className="hero-bg-1"></div>
      <div className="hero-bg-2"></div>

      <div className="container hero-wrapper">

        {/* LEFT */}

        <div className="hero-content">

          <span className="hero-tag">
            🚀 Trusted by 500+ Businesses Worldwide
          </span>

          <h1>
            Modern CRM Platform
            <span> to Grow Your Sales Faster</span>
          </h1>

          <p>
            Manage customers, automate workflows, track leads,
            collaborate with your sales team and increase revenue
            from one powerful dashboard.
          </p>

          <div className="hero-buttons">

            <button className="hero-btn-primary">
              Get Started
              <FaArrowRight />
            </button>

            <button className="hero-btn-secondary">
              <FaPlayCircle />
              Watch Demo
            </button>

          </div>

          <div className="hero-stats">

            <div>
              <FaUsers />
              <h3>2.5K+</h3>
              <span>Customers</span>
            </div>

            <div>
              <FaChartLine />
              <h3>98%</h3>
              <span>Growth</span>
            </div>

            <div>
              <FaHandshake />
              <h3>500+</h3>
              <span>Companies</span>
            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="hero-image">

          <div className="dashboard">

            <div className="dashboard-header">
              CRM Dashboard
            </div>

            <div className="dashboard-cards">

              <div className="small-card">
                <h2>245</h2>
                <p>New Leads</p>
              </div>

              <div className="small-card">
                <h2>$82K</h2>
                <p>Revenue</p>
              </div>

            </div>

            <div className="chart-card">
              📈 Sales Performance
            </div>

            <div className="activity-card">
              ✔ New Client Signed
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;