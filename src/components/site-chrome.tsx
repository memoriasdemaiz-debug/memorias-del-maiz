import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

export const WA = "https://wa.me/528133937901";
export const IG = "https://instagram.com/memoriasdemaiz";

export function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-inner">
        <Link to="/" className="logo-link" aria-label="Memorias de Maíz, ir al inicio">
          <img className="logo-mark" src={logo} alt="Memorias de Maíz" />
        </Link>
        <nav className="topbar-nav" aria-label="Principal">
          <Link to="/guia" className="nav-link" activeProps={{ "aria-current": "page" }}>Guía de uso</Link>
          <a className="wa-mini" href={`${WA}?text=Hola%2C%20quiero%20probar%20las%20tortillas%20de%20Memorias%20de%20Ma%C3%ADz`} target="_blank" rel="noopener">Pide por WhatsApp</a>
        </nav>
      </div>
    </div>
  );
}

export function SiteFooter() {
  return (
    <>
      <footer>
        <div className="wrap footer-inner">
          <Link to="/" className="brand-mark">Memorias <em>de Maíz</em></Link>
          <nav className="footer-links" aria-label="Pie de página">
            <Link to="/guia">Guía de uso</Link>
            <a href={IG} target="_blank" rel="noopener">@memoriasdemaiz</a>
            <a href={WA} target="_blank" rel="noopener">WhatsApp</a>
          </nav>
        </div>
      </footer>

      <a className="float-wa" href={`${WA}?text=Hola%2C%20quiero%20pedir%20tortillas%20de%20Memorias%20de%20Ma%C3%ADz`} target="_blank" rel="noopener">Pide por WhatsApp</a>
    </>
  );
}
