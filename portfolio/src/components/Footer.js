// Footer.js
import React from "react";
import { Link } from "react-scroll";
import "./Footer.css";
import logo from "../Image/favicon1.png";
import whatsapp from "../Image/whatsapp.png";
import instagram from "../Image/instagram.png";
import facebook from "../Image/facebook.png";
import twitter from "../Image/twitter.png";
import linkdin from "../Image/linkedin.png";
import phone from "../Image/phone.png";
import footeremail from "../Image/footeremail.png";
const Footer = () => {
  const socialLinks = [];

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footerwrapper">
          <div className="footer-content">
            <div className="footer-logo">
              <Link to="HeroSection" smooth={true} duration={500}>
                <img src={logo} alt="Logo" />
              </Link>
              <div className="footer-contact">
                <div className="footerwrapper">
                  <h2>Let's get in touch</h2>
                  <div className="email-wrap">
                    <span>
                      <img src={footeremail} alt="Logo" />{" "}
                    </span>
                    <a href="mailto:hi@abox.agency" className="contact-email">
                      hello@sedulousinfosys.com
                    </a>
                  </div>

                  <div className="contact-row">
                    <div className="quick-talk">
                      <span>
                        {" "}
                        <img src={phone} alt="Logo" />
                      </span>
                      <a href="tel:+917046216489" className="phone-button">
                        +91 8347732060
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-sections">
              <div className="footer-services">
                <h4>Services</h4>
                <ul>
                  <li>Ecommerce</li>
                  <li>UI/UX</li>
                  <li>Visual Identity</li>
                  <li>Web Design</li>
                  <li>Development</li>
                  <li>Onsite SEO</li>
                  <li>For Start-up</li>
                  <li>A/B Testing</li>
                </ul>
              </div>
              {/* <div className="footer-company">
            <h4>Company</h4>
            <ul>
              <li>Portfolio</li>
              <li>About Us</li>
              <li>Careers</li>
              <li>Contact</li>
              <li>Services</li>
              <li>Blogs</li>
              <li>Legal</li>
              <li>Privacy Policy</li>
            </ul>
          </div> */}

              <div className="footer-office">
                <h4>Head Office</h4>
                <p>India</p>
                <p>433, Skyview Business Horizon, Surat</p>
                <p>Kamrej Hwy, opp. MD Dreamland Farm,</p>
                <p>Valak Gujarat 395006</p>
                <div class="social-icons">
                  {/* <a href="https://wa.me/+918347732060#" className="whatsapp">
                    <img src={whatsapp} alt="Logo" />
                  </a>
                  <a href="#" className="instagram">
                    <img src={instagram} alt="Logo" />
                  </a>
                 
                  <a href="#" className="facebook">
                    <img src={facebook} alt="Logo" />
                  </a>
                  <a href="#" className="X">
                    <img src={twitter} alt="Logo" />
                  </a> */}
                  <a href="#" className="linkdin">
                    <img src={linkdin} alt="Logo" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <span>
              All © 2024 RabbitCode. All Rights Reserved by RabbitCode.
            </span>

            <div className="powerby">
              <span>
              Design and Development by &nbsp;
              <a
                className="contact-email"
                href="https://princeportfolio-6yav7ijxn-priyanshupatel1253-gmailcoms-projects.vercel.app/"
              >
                Priyanshu Patel
              </a>{" "}
              &nbsp; & &nbsp;
              <a
                className="contact-email"
                href="https://sagarp2.github.io/SagarPanchal/"
              >
                Sagar Panchal
              </a>
              </span>
            </div>
            <div className="made-with-love">
              <span>Made with 💜</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
