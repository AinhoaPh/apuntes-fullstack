import { linksPrivacy } from "../../data/footerData";
import Footer from "./Footer";

const FooterPrivacy = ({items}) => {
  return (
    <>
    <div className="footer__privacy">
        <a href="#">Do Not Sell or Share My Personal Information</a>
    </div>
    <div>
    <ul className="footer__privacy">
    {items.map(({ id, href, text }) => (
            <li key={id}>
              <a className="" href={href}>
                {text}|
              </a>
            </li>
          ))}
    </ul>
    </div>
    <div className="footer__privacy">
        <p>© 1986-2025 Disney-Pixar</p>
    </div>
    </>
  );
}
export default FooterPrivacy;