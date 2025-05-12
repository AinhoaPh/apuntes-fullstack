const FooterList = () => {
    const redesList = [
      { id: 1, href: "#", icon: "fa-brands fa-linkedin-in", alt: 'Linkedin' },
      { id: 2, href: "#", icon: "fa-brands fa-facebook-f", alt: 'Facebook' },
      { id: 3, href: "#", icon: "fa-brands fa-x-twitter", alt: 'Twitter' },
      { id: 4, href: "#", icon: "fa-brands fa-youtube", alt: 'Youtube' },
      { id: 5, href: "#", icon: "fa-brands fa-instagram", alt: 'Instagram' },
    ];
  
    return (
      <ul className="footer__list">
        {redesList.map(({ id, href, alt, icon }) => (
          <li key={id}>
            <a href={href} aria-label={alt} className="footer__list">
              <i className={icon}></i>
            </a>
          </li>
        ))}
      </ul>
    );
  };
  
  export default FooterList;