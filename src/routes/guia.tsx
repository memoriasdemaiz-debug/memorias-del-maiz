import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter, Topbar } from "@/components/site-chrome";
import tortilla from "@/assets/tortillahero.webp";

const TITLE = "Guía de conservación y calentado | Memorias de Maíz";
const DESC =
  "Cómo conservar y calentar las tortillas de Memorias de Maíz: hechas solo de maíz nixtamalizado, sin conservadores ni gomas, para que se sientan como recién hechas.";

const REEL = "https://www.instagram.com/p/Dbtf-fQt4dk/";
const HIGHLIGHT = "https://www.instagram.com/stories/highlights/18322997038276046/";

export const Route = createFileRoute("/guia")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Guia,
});

function Guia() {
  return (
    <div className="mm">
      <Topbar />

      <header className="guide-hero">
        <div className="hero-bg" aria-hidden="true">
          <img src={tortilla} alt="" />
        </div>
        <div className="wrap guide-hero-inner">
          <p className="hero-eyebrow">Guía de uso</p>
          <h1>Conservación y calentado</h1>
          <p className="body">
            Lo que necesitas saber para que cada tortilla llegue a tu mesa como recién salida del comal.
          </p>
          <nav className="guide-jump" aria-label="Secciones de la guía">
            <a href="#conservar">01. Cómo conservarlas</a>
            <a href="#calentar">02. Cómo calentarlas</a>
          </nav>
        </div>
      </header>

      {/* 01 Conservar */}
      <section id="conservar">
        <div className="wrap guide-grid">
          <div>
            <span className="num">01. Cómo conservarlas</span>
            <h2>Un alimento vivo.</h2>
            <p className="sub">Por eso hay que cuidarlo.</p>
            <p className="copy">
              Nuestras tortillas no llevan conservadores ni gomas industriales: solo maíz nixtamalizado.
              Eso es justo lo que las hace distintas, y también lo que pide un poco de cuidado. Su enemigo es la humedad.
            </p>
          </div>

          <div>
            <ol className="guide-steps">
              <li>
                <h3>Sepáralas una por una</h3>
                <p>Al abrir el paquete, despega las tortillas con cuidado. Como vienen al vacío, muchas salen pegadas.</p>
              </li>
              <li>
                <h3>Pásalas a una bolsa hermética</h3>
                <p>Una bolsa tipo Ziploc que cierre bien, para que no se resequen ni tomen olores del refrigerador.</p>
              </li>
              <li>
                <h3>Agrega una servitoalla</h3>
                <p>Ponla dentro de la bolsa junto con las tortillas. Absorbe el exceso de humedad y evita que se echen a perder.</p>
              </li>
              <li>
                <h3>Siempre en refrigeración</h3>
                <p>Guárdalas en el refrigerador desde el primer día y saca solo las que vayas a calentar.</p>
              </li>
            </ol>

            <a className="ig-card" href={HIGHLIGHT} target="_blank" rel="noopener">
              <span className="ig-kicker">En video · Historia destacada</span>
              <span className="ig-title">Mira cómo las guardamos</span>
              <span className="ig-go">Ver en Instagram →</span>
            </a>
          </div>
        </div>
      </section>

      {/* 02 Calentar */}
      <section id="calentar" className="tone-masa">
        <div className="wrap guide-grid">
          <div>
            <span className="num">02. Cómo calentarlas</span>
            <h2>El ritual del comal.</h2>
            <p className="sub">Calor directo, poco tiempo.</p>
            <p className="copy">
              Una tortilla de maíz bien calentada recupera su aroma, su suavidad y hasta se infla. Esto es lo que hacemos en casa.
            </p>
          </div>

          <div>
            <ol className="guide-steps">
              <li>
                <h3>Comal bien caliente</h3>
                <p>No tibio. La tortilla necesita calor directo; si el comal está frío, tarda más y se reseca.</p>
              </li>
              <li>
                <h3>Unos 30 segundos por lado</h3>
                <p>Aproximadamente medio minuto de cada lado es suficiente para que se calienten sin perder suavidad.</p>
              </li>
            </ol>

            <aside className="master-tip">
              <span className="ig-kicker">El tip maestro</span>
              <p>
                Si estuvieron varios días en refrigeración y perdieron humedad, humedécelas ligeramente con la palma
                de la mano antes de ponerlas al comal. Así recuperan su elasticidad y se inflan como recién hechas.
              </p>
            </aside>

            <a className="ig-card" href={REEL} target="_blank" rel="noopener">
              <span className="ig-kicker">En video · Reel</span>
              <span className="ig-title">Míralo en acción</span>
              <span className="ig-go">Ver en Instagram →</span>
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
