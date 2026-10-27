import { useEffect, useState } from 'react';

const WHATSAPP_NUMBER = '50379532864';
const DEMO_URL = 'https://babyraquel.sweetmomentssv.com';
const INSTAGRAM_URL = 'https://www.instagram.com/sweet.momentssv/';

const whatsappUrl = (message = 'SM-WEB Hola, me interesa una invitación digital de $25.') =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const included = [
  { icon: '✦', title: 'Diseño personalizado', copy: 'Colores, tipografía y estilo inspirados en tu evento.' },
  { icon: '◫', title: 'Galería de fotos', copy: 'Tus recuerdos presentados en una experiencia visual elegante.' },
  { icon: '◷', title: 'Cuenta regresiva', copy: 'La emoción comienza antes del gran día.' },
  { icon: '⌖', title: 'Ubicación fácil', copy: 'Botón directo a Maps o Waze para tus invitados.' },
  { icon: '✓', title: 'RSVP por WhatsApp', copy: 'Confirmación de asistencia con un solo toque.' },
  { icon: '↗', title: 'Link para compartir', copy: 'Listo para enviar por WhatsApp, Instagram o mensaje.' },
];

const steps = [
  ['01', 'Cuéntanos tu idea', 'Compártenos los datos, fotos, colores y estilo del evento.'],
  ['02', 'Creamos la magia', 'Diseñamos una experiencia digital cuidando cada detalle.'],
  ['03', 'Revisas el diseño', 'Incluimos una revisión para ajustar textos o datos importantes.'],
  ['04', 'Comparte tu momento', 'Recibes el enlace listo para enviarlo a todos tus invitados.'],
];

const themes = [
  { id: 'sweet', label: 'Dulce', eyebrow: 'Baby shower', title: 'Un momento lleno de ilusión', date: 'SÁBADO · 4:00 PM' },
  { id: 'joy', label: 'Alegre', eyebrow: 'Cumpleaños', title: 'Celebremos algo inolvidable', date: 'DOMINGO · 3:30 PM' },
  { id: 'elegant', label: 'Elegante', eyebrow: 'Boda', title: 'El comienzo de nuestra historia', date: 'VIERNES · 5:00 PM' },
];

function Reveal({ children, className = '', as: Tag = 'div', delay = 0, ...props }) {
  return (
    <Tag className={`reveal ${className}`} style={{ '--delay': `${delay}ms` }} {...props}>
      {children}
    </Tag>
  );
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Sweet Moments SV, inicio">
        <span className="brand-mark">SM</span>
        <span><strong>Sweet Moments</strong><small>Digital invitations</small></span>
      </a>
      <nav aria-label="Navegación principal">
        <a href="#incluye">Incluye</a>
        <a href="#proceso">Proceso</a>
        <a href="#precio">Precio</a>
        <a className="nav-cta" href={whatsappUrl()} target="_blank" rel="noreferrer">Quiero la mía</a>
      </nav>
    </header>
  );
}

function InvitationStudio() {
  const [active, setActive] = useState(themes[0]);
  return (
    <div className="studio" aria-label="Vista previa de estilos de invitación">
      <div className="style-tabs" role="group" aria-label="Cambiar estilo de la invitación">
        {themes.map((theme) => (
          <button key={theme.id} className={active.id === theme.id ? 'active' : ''} onClick={() => setActive(theme)}>
            {theme.label}
          </button>
        ))}
      </div>
      <div className={`invitation-card theme-${active.id}`}>
        <span className="mini-spark spark-one">✦</span>
        <span className="mini-spark spark-two">✦</span>
        <p>{active.eyebrow}</p>
        <div className="invitation-orbit"><span>SM</span></div>
        <h3>{active.title}</h3>
        <div className="mini-rule" />
        <strong>{active.date}</strong>
        <small>Desliza para descubrir todos los detalles</small>
      </div>
      <span className="studio-note">Toca un estilo para transformar la invitación</span>
    </div>
  );
}

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.12 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <Header />

      <main id="inicio">
        <section className="hero shell">
          <Reveal className="hero-copy" as="div">
            <div className="eyebrow"><span /> Invitaciones que se sienten</div>
            <h1>Tu momento merece algo <em>inolvidable.</em></h1>
            <p className="hero-lead">Creamos invitaciones digitales personalizadas, elegantes y listas para compartir. Todo lo esencial, con un precio claro.</p>
            <div className="hero-actions">
              <a className="button primary" href={whatsappUrl()} target="_blank" rel="noreferrer">Crear mi invitación <span>→</span></a>
              <a className="button ghost" href={DEMO_URL} target="_blank" rel="noreferrer">Ver demo real</a>
            </div>
            <div className="hero-trust">
              <span>Diseño personalizado</span><i />
              <span>Mobile-first</span><i />
              <span>Lista para compartir</span>
            </div>
          </Reveal>

          <Reveal className="hero-visual" delay={140}>
            <div className="price-seal" aria-label="Precio fijo de 25 dólares">
              <small>PRECIO FIJO</small><strong>$25</strong><span>por invitación</span>
            </div>
            <div className="phone-shell">
              <div className="phone-top"><span /></div>
              <div className="hero-phone-screen" role="img" aria-label="Ejemplo de una invitación digital Sweet Moments">
                <span className="preview-event">Baby shower</span>
                <div className="preview-bloom"><i /><i /><i /><b>R</b></div>
                <p>Celebrando a</p>
                <h3>Raquel</h3>
                <small>La dulce espera está por terminar</small>
                <div className="preview-date"><strong>DOMINGO 6 DE DICIEMBRE</strong><span>4:00 p.m.</span></div>
                <div className="preview-features"><span>Cuenta regresiva</span><span>Galería</span><span>Ubicación</span><span>RSVP</span></div>
                <div className="preview-rsvp">Confirmar asistencia</div>
              </div>
            </div>
            <div className="float-card float-rsvp"><span>✓</span><div><strong>RSVP</strong><small>Confirmación sencilla</small></div></div>
            <div className="float-card float-link"><span>↗</span><div><strong>Tu link</strong><small>Listo para compartir</small></div></div>
            <div className="orbit orbit-a" /><div className="orbit orbit-b" />
          </Reveal>
        </section>

        <section className="marquee" aria-label="Tipos de eventos">
          <div>
            <span>Baby showers</span><b>✦</b><span>Cumpleaños</span><b>✦</b><span>Bodas</span><b>✦</b><span>Bautizos</span><b>✦</b><span>Graduaciones</span><b>✦</b><span>Gender reveals</span>
          </div>
        </section>

        <section id="incluye" className="section shell">
          <Reveal className="section-heading">
            <p className="kicker">Todo lo que necesitas</p>
            <h2>Una invitación, <em>muchos pequeños detalles.</em></h2>
            <p>Creamos una experiencia completa para que tus invitados tengan toda la información a un toque.</p>
          </Reveal>
          <div className="feature-grid">
            {included.map((item, index) => (
              <Reveal as="article" className="feature-card" delay={index * 55} key={item.title}>
                <span className="feature-icon">{item.icon}</span><h3>{item.title}</h3><p>{item.copy}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section showcase-shell">
          <div className="showcase-grid shell">
            <Reveal className="showcase-copy">
              <p className="kicker">Diseñada para sentirse única</p>
              <h2>No es solo una invitación. Es la primera impresión de tu evento.</h2>
              <p>No usamos una fórmula visual para todos. Adaptamos el ambiente, los colores y los detalles a tu celebración.</p>
              <a className="text-link" href={DEMO_URL} target="_blank" rel="noreferrer">Explorar una invitación completa <span>↗</span></a>
            </Reveal>
            <Reveal delay={120}><InvitationStudio /></Reveal>
          </div>
        </section>

        <section id="precio" className="section shell price-section">
          <Reveal className="price-panel">
            <div className="price-copy">
              <p className="kicker">Un precio simple y transparente</p>
              <h2>Todo por <em>$25</em></h2>
              <p>Sin tener que calcular cada detalle. Tu invitación personalizada incluye las funciones esenciales y una revisión.</p>
              <ul>
                <li><span>✓</span> Diseño adaptado al estilo de tu evento</li>
                <li><span>✓</span> Galería, cuenta regresiva, ubicación y RSVP</li>
                <li><span>✓</span> Enlace listo para compartir</li>
                <li><span>✓</span> Una revisión de textos y datos</li>
              </ul>
            </div>
            <div className="price-card">
              <span className="price-label">INVITACIÓN DIGITAL</span>
              <div className="price-number"><sup>$</sup>25</div>
              <p>Precio fijo por invitación</p>
              <a className="button primary full" href={whatsappUrl()} target="_blank" rel="noreferrer">Comenzar por WhatsApp <span>→</span></a>
              <small>Solicitudes especiales, urgentes o dominio personalizado se revisan por separado.</small>
            </div>
          </Reveal>
        </section>

        <section id="proceso" className="section shell">
          <Reveal className="section-heading compact">
            <p className="kicker">Simple de principio a fin</p>
            <h2>Así creamos tu <em>Sweet Moment.</em></h2>
          </Reveal>
          <div className="steps-grid">
            {steps.map(([number, title, copy], index) => (
              <Reveal as="article" className="step-card" delay={index * 70} key={number}>
                <span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section shell faq-section">
          <Reveal className="section-heading compact">
            <p className="kicker">Preguntas frecuentes</p>
            <h2>Antes de comenzar</h2>
          </Reveal>
          <div className="faq-grid">
            <Reveal as="article"><h3>Cuánto cuesta?</h3><p>La invitación digital estándar tiene un precio fijo de <strong>$25</strong>.</p></Reveal>
            <Reveal as="article" delay={50}><h3>Cuánto tarda?</h3><p>Normalmente entre 24 y 48 horas después de recibir la información y confirmar el anticipo.</p></Reveal>
            <Reveal as="article" delay={100}><h3>Puedo pedir cambios?</h3><p>Sí. Incluimos una revisión para corregir textos, datos o detalles importantes.</p></Reveal>
            <Reveal as="article" delay={150}><h3>Qué necesito enviar?</h3><p>Fecha, hora, lugar, tema, colores, fotos y los detalles que quieras mostrar.</p></Reveal>
          </div>
        </section>

        <section className="section shell final-section">
          <Reveal className="final-card">
            <span className="final-spark">✦</span>
            <p className="kicker">Tu celebración comienza aquí</p>
            <h2>Hagamos algo tan especial como tu momento.</h2>
            <p>Escríbenos y cuéntanos qué estás celebrando.</p>
            <a className="button light" href={whatsappUrl()} target="_blank" rel="noreferrer">Quiero mi invitación por $25 <span>→</span></a>
          </Reveal>
        </section>
      </main>

      <footer className="shell">
        <a className="brand footer-brand" href="#inicio"><span className="brand-mark">SM</span><span><strong>Sweet Moments</strong><small>Digital invitations</small></span></a>
        <p>Invitaciones digitales para los momentos más dulces de la vida.</p>
        <div><a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">Instagram</a><span>·</span><a href={whatsappUrl()} target="_blank" rel="noreferrer">WhatsApp</a></div>
        <small>© {new Date().getFullYear()} Sweet Moments SV</small>
      </footer>

      <a className="floating-whatsapp" href={whatsappUrl()} target="_blank" rel="noreferrer" aria-label="Escribir a Sweet Moments por WhatsApp"><span>WA</span></a>
    </>
  );
}

export default App;
