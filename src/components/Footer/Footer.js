import { contactInfo, myCategory, myLink } from "../../utils/footerInfo";

import footerLogo from "../../assets/images/awstore.png";

import SocialIcons from "../SocialIcons/SocialIcons";

import { Link } from "react-router-dom";

import "./Footer.scss";

const Footer = () => {
  return (
    <section className="site-footer py-5">
      <div className="container">
        {/* footer header */}
        <div className="row site-footer__header">
          <div className="col-10 col-lg-2 mx-auto">
            <img
              src={footerLogo}
              alt="footer logo"
              className="site-footer__logo"
            />
          </div>
        </div>
        {/* footer content */}
        <div className="row">
          <div className="col-10 col-lg-4 mx-auto site-footer__content">
            <h5 className="site-footer__content-title">CONTACT INFO</h5>
            {contactInfo.map((item) => {
              const { id, text } = item;
              return (
                <p className="site-footer__content-text" key={id}>
                  <span>{text}</span>
                </p>
              );
            })}
          </div>
          <div className="col-10 col-lg-4 mx-auto site-footer__content">
            <h5 className="site-footer__content-title">CATEGORY</h5>
            {myCategory.map((item) => {
              const { id, text, path } = item;
              return (
                <p className="site-footer__content-text" key={id}>
                  <Link to={path} className="site-footer__content-text">
                    {text}
                  </Link>
                </p>
              );
            })}
          </div>
          <div className="col-10 col-lg-4 mx-auto site-footer__content">
            <h5 className="site-footer__content-title">LINK</h5>
            {myLink.map((item) => {
              const { id, text, path } = item;
              return (
                <p className="site-footer__content-text" key={id}>
                  <Link to={path} className="site-footer__content-text">
                    {text}
                  </Link>
                </p>
              );
            })}
          </div>
        </div>
        {/* footer footer */}
        <div className="row site-footer__footer">
          {/* payment logo */}
          <div className="col-10 col-lg-4 mx-auto">
            <p style={{ color: "#14b8a6" }}>Open Every Day</p>
          </div>
          {/* copy rights */}
          <div className="col-10 col-lg-4 mx-auto">
            <span className="site-footer__rights">
              <span className="site-footer__rights--author">
                Andra Wijaya ♥
              </span>{" "}
              &copy; {new Date().getFullYear()}. All Rights Reserved
            </span>
          </div>
          {/* social icons */}
          <div className="col-10 col-lg-4 mx-auto">
            <div style={{ marginTop: "-1.2vh" }}>
              {" "}
              <SocialIcons />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
