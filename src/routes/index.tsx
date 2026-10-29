import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import tortilla from "@/assets/tortillahero.png.asset.json";
import packages from "@/assets/tortillaspaquetes.png.asset.json";

const TITLE = "Memorias de Maíz: Tortillas de maíz seleccionado";
const DESC =
  "Tortillas hechas con maíz nativo seleccionado por su sabor. Sin harinas, sin conservadores, sin aditivos. Muestras diarias en Pabellón Instantes Prolongados, Centrito Valle.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WA = "https://wa.me/528133937901";

function Index() {
  return (
    <div className="mm">
      <div className="topbar">
        <div className="topbar-inner">
          <img className="logo-mark" src={logo} alt="Memorias de Maíz" />
          <a className="wa-mini" href={`${WA}?text=Hola%2C%20quiero%20probar%20las%20tortillas%20de%20Memorias%20de%20Ma%C3%ADz`} target="_blank" rel="noopener">Pide por WhatsApp</a>
        </div>
      </div>

      {/* 01 Hero */}
      <section className="hero">
        <div className="hero-bg" aria-hidden="true">
          <img src={tortilla.url} alt="" />
        </div>
        <div className="wrap">
          <div className="hero-inner">
            <p className="hero-eyebrow">Nixtamalizamos en lotes pequeños</p>
            <h1>Tortillas de maíz orgánico seleccionado</h1>
            <p className="body">Hacemos tortillas con maíz seleccionado por su sabor, agua y cal. <strong>Sin harinas. Sin conservadores. Sin aditivos.</strong></p>
            <div className="hero-cta">
              <a className="btn btn-ghost" href="#maiz">Conocer el maíz</a>
            </div>
          </div>
        </div>

        <div className="wrap">
          <div className="sample-callout">
            <div className="count">
              <span className="big">3</span>
              <span className="label">muestras gratis cada día</span>
            </div>
            <p className="urge">Pruébalas, hay solo 3 al día, mientras haya existencias.</p>
            <a className="btn btn-primary" href={`${WA}?text=Hola%2C%20quiero%20apartar%20una%20muestra%20gratis`} target="_blank" rel="noopener">Apartar mi muestra</a>
            <p className="sample-fine">Pruebas y entregas en el Pabellón Instantes Prolongados (el de los tubos rojos, en la cuchilla de Orinoco y Colorado). Pickup únicamente.</p>
          </div>
        </div>
      </section>

      {/* 02 Sobre */}
      <section id="sobre" className="tone-masa">
        <div className="wrap about-grid">
          <div>
            <span className="num">01. Sobre Memorias de Maíz</span>
            <h2>Estamos conociendo al maíz.</h2>
          </div>
          <div className="copy">
            <p>México tiene una enorme diversidad de maíces, y cada uno puede contar una historia distinta a través de su sabor.</p>
            <p>Seleccionamos nuestros maíces buscando además de un buen origen y una buena forma de cultivo: buscamos maíces que tengan algo que decir en la mesa.</p>
          </div>
        </div>
      </section>

      {/* 03 Nuestro maíz */}
      <section id="maiz">
        <div className="wrap">
          <div className="maize-head">
            <div className="maize-intro">
              <span className="num">02. Nuestro maíz</span>
              <h2>El maíz detrás de cada tortilla</h2>
              <p>Nuestros maíces vienen de familias que conocen y conservan sus variedades generación tras generación. Cada costal que recibimos tiene un origen identificable y una historia que queremos poder seguir: de dónde viene, quién lo cultivó y, sobre todo, qué encontramos en él cuando llega a nuestra cocina.</p>
            </div>
          </div>

          <div className="variety-grid">
            <div className="variety-card current">
              <span className="variety-tag">Nuestro maíz actual</span>
              <h3>Cónico Cremoso</h3>
              <p className="variety-origin">Estado de México</p>
              <p className="variety-note">Un cónico de carácter delicado y cremoso, con notas que recuerdan a lácteos y un dulzor sutil.</p>
              <p className="variety-desc">En tortilla tiene una presencia amable: aroma discreto, cuerpo medio y un sabor que acompaña sin dominar.</p>
              <div className="profile">
                <div className="profile-row"><span className="k">Nariz</span><span className="v">Cereal · lácteo · maíz fresco</span></div>
                <div className="profile-row"><span className="k">Boca</span><span className="v">Dulzor sutil · cremosidad · cereal</span></div>
                <div className="profile-row"><span className="k">Textura</span><span className="v">Cuerpo medio · mordida natural</span></div>
                <div className="profile-row">
                  <span className="k">Intensidad</span>
                  <span className="v intensity-dots">
                    <span className="dot" /><span className="dot" /><span className="dot filled" /><span className="dot" /><span className="dot" />
                  </span>
                </div>
              </div>
            </div>

            <div className="variety-card upcoming">
              <span className="variety-tag">Próximamente</span>
              <h3>Cónico Azul</h3>
              <p className="variety-origin">Estado de México</p>
              <p className="variety-note">Estamos haciendo pruebas con nuestro próximo maíz.</p>
              <p className="variety-desc">Un cónico de perfil más profundo y terroso, con mayor intensidad y una expresión muy distinta al Cónico Cremoso. Estamos conociéndolo.</p>
              <p className="soon-note">Próximamente en Memorias de Maíz.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 04 Las tortillas */}
      <section id="tortillas" className="tone-masa">
        <div className="wrap product-grid">
          <div>
            <span className="num">03. Las tortillas</span>
            <h2>Una tortilla hecha de maíz.</h2>
            <p className="sub">Nada más.</p>
            <p className="copy">Por ahora trabajamos una sola tortilla: la que hacemos con nuestro Cónico Cremoso.</p>
            <figure className="package-photo">
              <img src={packages.url} alt="Paquetes de tortillas de Memorias de Maíz, Cónico Cremoso" loading="lazy" width="768" height="1024" />
            </figure>
          </div>

          <div className="spec-card">
            <ul className="spec-list">
              <li><span className="label">Contenido</span><span className="val">20 tortillas</span></li>
              <li><span className="label">Peso</span><span className="val">23 g cada una</span></li>
              <li><span className="label">Composición</span><span className="val">100% maíz nixtamalizado</span></li>
              <li><span className="label">Conservación</span><span className="val">Al vacío, refrigeradas</span></li>
            </ul>
            <div className="price-row">
              <div className="price">$90 <span>MXN / paquete</span></div>
            </div>
            <a className="btn btn-primary btn-block" href={`${WA}?text=Hola%2C%20quiero%20un%20paquete%20de%20tortillas`} target="_blank" rel="noopener">Pedir este paquete</a>
          </div>
        </div>
      </section>

      {/* 05 Encuéntranos */}
      <section id="encuentranos">
        <div className="wrap">
          <span className="num">04. Encuéntranos</span>
          <h2 className="find-title">Prueba. Compra. O ven a conocernos.</h2>
          <div className="find-grid">
            <div className="find-card">
              <h3>Casa Macro</h3>
              <p>Disponible en tienda.</p>
              <a className="go" href="https://instagram.com/casamacro" target="_blank" rel="noopener">Ver ubicación →</a>
            </div>
            <div className="find-card">
              <h3>WhatsApp</h3>
              <p>Puedes pedir directamente por WhatsApp y recoger tu pedido en Pabellón Instantes.</p>
              <a className="go" href={`${WA}?text=Hola%2C%20quiero%20pedir%20tortillas%20de%20Memorias%20de%20Ma%C3%ADz`} target="_blank" rel="noopener">Escríbenos →</a>
            </div>
          </div>

          <div className="distributor">
            <h3>¿Quieres llevar Memorias de Maíz a otro lugar?</h3>
            <p>Estamos buscando restaurantes, tiendas y proyectos que quieran trabajar con nuestros maíces y tortillas. Si te interesa distribuir Memorias de Maíz, escríbenos.</p>
            <a className="btn btn-primary" href={`${WA}?text=Hola%2C%20me%20interesa%20distribuir%20Memorias%20de%20Ma%C3%ADz`} target="_blank" rel="noopener">Escríbenos</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap footer-inner">
          <div className="brand-mark">Memorias <em>de Maíz</em></div>
          <div className="footer-links">
            <a href="https://instagram.com/memoriasdemaiz" target="_blank" rel="noopener">@memoriasdemaiz</a>
            <a href={WA} target="_blank" rel="noopener">WhatsApp</a>
          </div>
        </div>
      </footer>

      <a className="float-wa" href={`${WA}?text=Hola%2C%20quiero%20pedir%20tortillas%20de%20Memorias%20de%20Ma%C3%ADz`} target="_blank" rel="noopener">Pide por WhatsApp</a>
    </div>
  );
}
