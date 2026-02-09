import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="site-header">
      <div className="content-wrapper">
        <Link to="/" className="site-header__brand" aria-label="Ulriken — hjem">
          <img
            src="/images/ulriken-logo.svg"
            alt="Ulriken"
            className="site-header__logo"
          />
        </Link>
        <nav>
          <ul className="site-header__nav">
            <li><NavLink to="/" end><span>Hva vi gjør</span></NavLink></li>
            <li><NavLink to="/folkene"><span>Folkene</span></NavLink></li>
            <li><NavLink to="/om-oss"><span>Om oss</span></NavLink></li>
            <li><NavLink to="/learniken"><span>Learniken</span></NavLink></li>
            <li><NavLink to="/kontakt"><span>Kontakt</span></NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
