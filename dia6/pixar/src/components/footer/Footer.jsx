import { linksFilms, linksTech } from "../../data/footerData";
import { linksCareers, linksMore, linksPrivacy } from "../../data/footerData";
import FooterList from './FooterList.jsx'
import FooterLinks from './FooterLinks.jsx'

import '../footer/Footer.css'


const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div >

                    
                        < FooterList />
                
                </div>

                <section className="footer__section">

                    < FooterLinks title="FILMS" items={linksFilms} />
                </section>

                <section className="footer__section">

                    <FooterLinks title="TECH" items={linksTech} />



                </section>
                <section className="footer__section">
                    <FooterLinks title="CAREERS" items={linksCareers} />
                </section>
                <section className="footer__section">
                    <FooterLinks title="MORE" items={linksMore} />

                </section>

            </footer>
        </>
    );
}

export default Footer;



