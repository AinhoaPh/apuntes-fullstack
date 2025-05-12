const FooterLinks = ({ title, items }) => {
    return (
      <div className="footer__section">
        <h2 className="footer__title">{title}</h2>
        <ul className="footer__links">
          {items.map(({ id, href, text }) => (
            <li key={id}>
              <a className="footer__link" href={href}>
                {text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default FooterLinks;