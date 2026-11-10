import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter, Topbar, WA } from "@/components/site-chrome";
import tortilla from "@/assets/tortillahero.webp";
import packages from "@/assets/tortillaspaquetes.webp";

const TITLE = "Para tu negocio | Memorias de Maíz";
const DESC =
  "Tortillas de maíz Cónico Cremoso nixtamalizado para tiendas y negocios. Precio sugerido $90 por paquete; condiciones de distribución por WhatsApp.";
const URL = "https://memorias-del-maiz.lovable.app/negocio";
const WA_BIZ = `${WA}?text=${encodeURIComponent("Hola, tengo un negocio y me gustaría platicar sobre Memorias de Maíz")}`;

export const Route = createFileRoute("/negocio")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: Negocio,
});

const FAQS = [
  ["¿Cómo puedo vender Memorias de Maíz en mi tienda?", "Escríbenos por WhatsApp y platicamos sobre tu negocio, las cantidades que te interesan y las condiciones comerciales."],
  ["¿Cuál es el precio para distribuidores?", "El precio sugerido al público es de $90 por paquete. Los precios para puntos de venta y distribuidores los acordamos directamente, tomando en cuenta cantidades y frecuencia de compra."],
  ["¿Hay un pedido mínimo?", "Trabajamos con producción pequeña, por lo que la disponibilidad depende de cada semana. Escríbenos y revisamos qué esquema funciona para tu tienda."],
  ["¿Puedo probarlas antes de ofrecerlas?", "¡Claro! Nos interesa que conozcas el producto. Podemos coordinar una muestra."],
];

function Negocio() {
  return (
    <div className="mm">
      <Topbar />

      <header className="guide-hero">
        <div className="hero-bg" aria-hidden="true"><img src={tortilla} alt="" /></div>
        <div className="wrap guide-hero-inner">
          <p className="hero-eyebrow">Para tu negocio</p>
          <h1>Una buena tortilla empieza con un buen maíz.</h1>
          <p className="body">En Memorias de Maíz hacemos tortillas de maíz mexicano seleccionado por su sabor, origen y características.</p>
          <p className="body">Hoy estamos buscando algunas tiendas y negocios que quieran ofrecer nuestras tortillas a sus clientes.</p>
          <p className="biz-ask">¿Te gustaría tenerlas en tu tienda?</p>
          <a className="btn btn-primary" href={WA_BIZ} target="_blank" rel="noopener">Platiquemos por WhatsApp</a>
          <p className="biz-fine">Actualmente trabajamos con producción pequeña y disponibilidad limitada.</p>
        </div>
      </header>

      <section id="proyecto" className="tone-masa">
        <div className="wrap guide-grid">
          <div>
            <span className="num">01. El proyecto</span>
            <h2>No todos los maíces saben igual.</h2>
          </div>
          <div className="biz-prose">
            <p>México tiene una enorme diversidad de maíces, y creemos que vale la pena conocerla también a través de su sabor.</p>
            <p>En Memorias de Maíz seleccionamos variedades considerando no solamente su origen y cultivo, sino también sus características: su aroma, dulzor, textura e intensidad.</p>
            <p>Con esos maíces hacemos tortillas mediante nixtamalización tradicional, buscando que cada variedad pueda expresar lo que la hace especial.</p>
            <p>Estamos explorando, probando y documentando esa diversidad. <strong>Y por ahora, todo comienza con una tortilla.</strong></p>
          </div>
        </div>
      </section>

      <section id="producto">
        <div className="wrap guide-grid">
          <div>
            <span className="num">02. Nuestro producto</span>
            <h2>Por ahora, trabajamos con nuestro Cónico Cremoso.</h2>
          </div>
          <div>
            <div className="biz-prose">
              <p>Nuestro primer maíz es un Cónico Cremoso proveniente del Estado de México, seleccionado por su perfil de sabor y su textura.</p>
              <p>Es un maíz de dulzor natural, con notas suaves que recuerdan a cereal y lácteos, y una textura cremosa que se expresa muy bien en tortilla.</p>
              <p>No buscamos que el maíz domine todo lo que comes, sino que aporte algo especial a cada bocado.</p>
            </div>
            <div className="spec-card biz-spec">
              <h3>Cónico Cremoso</h3>
              <ul className="spec-list">
                <li><span className="label">Origen</span><span className="val">Estado de México</span></li>
                <li><span className="label">Variedad</span><span className="val">Cónico</span></li>
                <li><span className="label">Perfil</span><span className="val">Dulce, cremoso y de intensidad moderada</span></li>
                <li><span className="label">Elaboración</span><span className="val">Nixtamalización tradicional</span></li>
              </ul>
            </div>
            <p className="biz-quote">Una tortilla para disfrutar por sí sola, acompañar unos buenos tacos o simplemente redescubrir el sabor del maíz.</p>
          </div>
        </div>
      </section>

      <section id="presentacion" className="tone-masa">
        <div className="wrap">
          <span className="num">03. La presentación</span>
          <h2>Lo que llega a tu tienda</h2>
          <div className="biz-pres">
            <figure className="package-photo">
              <img src={packages} alt="Paquetes de tortillas de Memorias de Maíz, Cónico Cremoso" loading="lazy" width="768" height="1024" />
            </figure>
            <div>
              <p className="biz-kicker">Tortillas Cónico Cremoso</p>
              <div className="biz-stats">
                <div className="stat stat-main"><strong>$90 MXN</strong><span>Precio sugerido al público por paquete</span></div>
                <div className="stat"><strong>20</strong><span>Tortillas</span></div>
                <div className="stat"><strong>23 g</strong><span>Por tortilla</span></div>
                <div className="stat"><strong>Vacío</strong><span>Empaque</span></div>
              </div>
              <div className="biz-ingr">
                <span className="label">Ingredientes</span>
                <p className="ingr">Maíz · Agua · Cal</p>
                <p>Sin harinas industrializadas. Sin conservadores añadidos.</p>
              </div>
              <div className="biz-prose">
                <p>Cada paquete contiene 20 tortillas de aproximadamente 23 gramos cada una, elaboradas con maíz nixtamalizado y empacadas al vacío.</p>
                <p>El precio sugerido al público es de <strong>$90 pesos por paquete</strong>.</p>
                <p>Para puntos de venta, estamos abiertos a platicar directamente sobre precios de distribución, volúmenes, márgenes y condiciones de compra.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="manejo">
        <div className="wrap guide-grid">
          <div>
            <span className="num">04. Manejo y conservación</span>
            <h2>Un producto fresco, que necesita refrigeración.</h2>
            <p className="copy">Nuestras tortillas se elaboran en pequeños lotes y se empacan al vacío para conservar sus características durante su almacenamiento.</p>
          </div>
          <div>
            <p className="biz-kicker">Para su manejo</p>
            <ol className="guide-steps">
              <li><h3>Mantener siempre refrigeradas.</h3></li>
              <li><h3>Conservar el empaque cerrado hasta su consumo.</h3></li>
              <li><h3>Una vez abierto, mantener refrigerado y consumir conforme a las indicaciones del empaque.</h3></li>
              <li><h3>Respetar la fecha de caducidad indicada en cada paquete.</h3></li>
            </ol>
            <aside className="master-tip">
              <p>Si tienes dudas sobre almacenamiento, vida de anaquel o manejo del producto en tu tienda, podemos platicarlo directamente.</p>
            </aside>
          </div>
        </div>
      </section>

      <section id="donde" className="tone-masa">
        <div className="wrap">
          <span className="num">05. Dónde estamos</span>
          <div className="find-card biz-macro">
            <h3>También nos encuentras en Casa Macro.</h3>
            <p>Ya formamos parte de la selección de productos de Casa Macro, y nos entusiasma seguir encontrando tiendas que quieran compartir esta propuesta.</p>
            <p>Una pequeña red de comercios que crece alrededor de buenos ingredientes.</p>
          </div>
        </div>
      </section>

      <section id="faq">
        <div className="wrap guide-grid">
          <div>
            <span className="num">06. Preguntas frecuentes</span>
            <h2>Lo que suelen preguntarnos.</h2>
          </div>
          <div className="biz-faq">
            {FAQS.map(([q, a]) => (
              <details key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto">
        <div className="wrap">
          <div className="distributor biz-cta">
            <h3>¿Te gustaría tener Memorias de Maíz en tu tienda?</h3>
            <p>Somos un proyecto pequeño y nos gusta trabajar de cerca con los negocios que ofrecen nuestras tortillas.</p>
            <p>Si te interesa conocer el producto, probarlo o platicar sobre cómo podríamos trabajar juntos, escríbenos.</p>
            <p>Podemos conversar sobre precios, cantidades, entregas y encontrar un esquema que funcione para ambos.</p>
            <p><strong>Nos dará mucho gusto conocerte y platicarlo.</strong></p>
            <a className="btn btn-primary" href={WA_BIZ} target="_blank" rel="noopener">Platiquemos por WhatsApp</a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
