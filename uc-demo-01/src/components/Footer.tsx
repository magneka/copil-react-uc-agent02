import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="content-wrapper">
        <div className="footer-top">
          <div className="footer-contact">
            <Link to="/kontakt" className="footer-contact-link">
              Kontakt oss →
            </Link>
            <div className="footer-address">
              Ulriken Consulting<br />
              Kokstadflaten 5<br />
              5257 Kokstad
            </div>
          </div>
          <div className="footer-social">
            <a href="https://www.facebook.com/ulrikenconsulting/" target="_blank" rel="noopener noreferrer">
              Følg oss på Facebook ↗
            </a>
            <a href="https://www.linkedin.com/company/ulriken-consulting/" target="_blank" rel="noopener noreferrer">
              Følg oss på LinkedIn ↗
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <Link to="/">Personvern</Link>
          <Link to="/">Klima- og miljøpolicy</Link>
          <Link to="/">Vår etikkplakat</Link>
        </div>
      </div>
    </footer>
  );
}
