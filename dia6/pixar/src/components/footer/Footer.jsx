import { linksFilms, linksTech } from "../../data/footerData";
import { linksCareers, linksMore, linksPrivacy } from "../../data/footerData";


const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div >

                    <ul>
                        < FooterList />
                    </ul>
                </div>

                <section>

                    < FooterLinks title="FILMS" items={linksFilms} />
                </section>

                <section>

                    <FooterLinks title="TECH" items={linksTech} />



                </section>
                <section>
                    <FooterLinks title="CAREERS" items={linksCareers} />
                </section>
                <section>
                    <FooterLinks title="MORE" items={linksMore} />

                </section>
                <section>
                    <FooterLinks title="PRIVACY" items={linksPrivacy} />
                </section>
            </footer>
        </>
    );
}

export default Footer;

const FooterList = () => {
    const redesList = [
        { id: 1, href: "#", icon: "fa-brands fa-linkedin", alt: 'Linkedin' },
        { id: 2, href: "#", icon: "fa-brands fa-facebook", alt: 'Facebook' },
        { id: 3, href: "#", icon: "fa-brands fa-twitter", alt: 'Twitter' },
        { id: 4, href: "#", icon: "fa-brands fa-youtube", alt: 'Youtube' },
        { id: 5, href: "#", icon: "fa-brands fa-instagram", alt: 'Instagram' }
    ]
    return (
        <span>
            {redesList.map(({ id, href, alt, icon }) => {
                return (
                    <li key={id}>
                        <a href={href} aria-label={alt} >
                            <i className={icon}></i></a>
                    </li>
                )
            })}
        </span>
    )
}


const FooterLinks = ({ title, items }) => {

    return (
        <>
            <h2>{title}</h2>
            <ul className="footer__links">
                {items.map(({ id, href, text }) => (
                    <li key={id}>
                        <a href={href}>{text}</a>
                    </li>
                ))}
            </ul>



        </>
    );
};

