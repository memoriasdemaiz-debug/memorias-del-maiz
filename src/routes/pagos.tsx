import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { WA } from "@/components/site-chrome";
import logo from "@/assets/logo.png";

const TITLE = "Pago por transferencia | Memorias de Maíz";
const DESC = "Datos de transferencia SPEI para pagar tus tortillas Memorias de Maíz.";

const FIELDS = [
  { label: "CLABE", value: "012580015202423425" },
  { label: "Titular", value: "Veronica Garcia Molina" },
  { label: "Banco", value: "BBVA" },
  { label: "Concepto", value: "Tortillas Memorias de Maíz" },
];

const ALL = FIELDS.map((f) => `${f.label}: ${f.value}`).join("\n");
const WA_MSG = `${WA}?text=${encodeURIComponent(
  "Hola, te comparto el comprobante de mi transferencia por las tortillas de Memorias de Maíz.",
)}`;

export const Route = createFileRoute("/pagos")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Pagos,
});

function Pagos() {
  const [copied, setCopied] = useState<string | null>(null);
  const copy = async (key: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const t = document.createElement("textarea");
      t.value = text;
      document.body.appendChild(t);
      t.select();
      document.execCommand("copy");
      t.remove();
    }
    setCopied(key);
    setTimeout(() => setCopied((c) => (c === key ? null : c)), 1800);
  };

  return (
    <div className="mm pay">
      <main className="pay-card">
        <Link to="/" className="pay-logo" aria-label="Ir a Memorias de Maíz">
          <img src={logo} alt="Memorias de Maíz" />
        </Link>
        <h1>
          Gracias por tu <em>compra</em>
        </h1>
        <p className="pay-msg">
          Para pagar vía transferencia bancaria, copia directamente los datos desde aquí.
        </p>

        <div className="pay-box">
          <div className="pay-box-head">Datos de transferencia · SPEI</div>
          {FIELDS.map((f) => (
            <div className="pay-row" key={f.label}>
              <div>
                <span className="pay-label">{f.label}</span>
                <span className="pay-value">{f.value}</span>
              </div>
              <button
                type="button"
                className={`pay-copy${copied === f.label ? " is-done" : ""}`}
                onClick={() => copy(f.label, f.value)}
              >
                {copied === f.label ? "¡Copiado!" : "Copiar"}
              </button>
            </div>
          ))}
        </div>

        <button
          type="button"
          className={`pay-all${copied === "all" ? " is-done" : ""}`}
          onClick={() => copy("all", ALL)}
        >
          {copied === "all" ? "¡Datos copiados!" : "Copiar todos los datos"}
        </button>

        <a className="btn btn-primary btn-block" href={WA_MSG} target="_blank" rel="noopener noreferrer">
          Enviar comprobante por WhatsApp
        </a>

        <Link to="/" className="pay-home">
          Ir a memoriasdemaiz.com
        </Link>
      </main>
    </div>
  );
}
