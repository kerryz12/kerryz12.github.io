import "./footer.css";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="icon">
        <SocialIcon url="https://github.com/kerryz12" />
      </div>
      <div className="icon">
        <SocialIcon url="https://www.linkedin.com/in/kerry-zhang-ee/" />
      </div>
      <div className="icon">
        <SocialIcon url="mailto:kerryzhang12@gmail.com" />
      </div>
      <div className="icon">
        <SocialIcon url="https://soundcloud.com/kerryzhang12" />
      </div>
    </div>
  );
};

export default Footer;
