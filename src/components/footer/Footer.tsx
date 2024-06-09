import "./footer.css"
import { SocialIcon } from 'react-social-icons'

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="icon">
                <SocialIcon url="https://github.com/kerryz12" />
            </div>
            <div className="icon">
                <SocialIcon url="https://linkedin.com/kerry-zhang-ee" />
            </div>
            <div className="icon">
                <SocialIcon url="mailto:kerryzhang12@gmail.com" />
            </div>
        </div>
    )
}

export default Footer;