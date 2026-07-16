import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

import "../../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer" data-aos="fade-up">

      <div className="container footer-grid">

        <div className="footer-about">

          <h2>
            Hello<span>Aaye</span>
          </h2>

          <p>
            Modern CRM platform designed to help businesses manage
            customers, automate workflows and grow revenue faster.
          </p>

        </div>

        <div>

          <h3>Product</h3>

          <ul>

            <li><a href="#features">Features</a></li>

            <li><a href="#pricing">Pricing</a></li>

            <li><a href="#faq">FAQ</a></li>

          </ul>

        </div>

        <div>

          <h3>Company</h3>

          <ul>

            <li><a href="#">About</a></li>

            <li><a href="#">Privacy</a></li>

            <li><a href="#">Terms</a></li>

          </ul>

        </div>

        <div>

          <h3>Contact</h3>

          <p>
            <FaEnvelope />
            hello@helloaaye.com
          </p>

          <p>
            <FaPhone />
            +91 98765 43210
          </p>

          <div className="social-icons">

            <a href="#">
              <FaGithub />
            </a>

            <a href="#">
              <FaLinkedin />
            </a>

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        © 2026 HelloAaye. All Rights Reserved.

      </div>

    </footer>
  );
};

export default Footer;