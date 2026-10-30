import { useEffect, useState } from 'react';

const WHATSAPP_NUMBER = '50379532864';
const DEMO_URL = 'https://babyraquel.sweetmomentssv.com';
const INSTAGRAM_URL = 'https://www.instagram.com/sweet.momentssv/';

const whatsappUrl = (message = 'SM-WEB Hola, quiero crear una invitación digital para mi evento.') =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const moments = [
  {
    id: 'baby',
    tab: 'Baby shower',
    eyebrow: 'La dulce espera',
    name: 'Raquel',
    line: 'Un día para celebrar todo el amor que está por llegar.',
    date: '06 · DIC · 4:00 PM',
    location: 'Jardín Magnolia',
  },
  {
    id: 'wedding',
    tab: 'Boda',
    eyebrow: 'Nuestra historia',
    name: 'Mía & Leo',
    line: 'Nos elegimos para compartir la vida y queremos celebrarlo contigo.',
    date: '14 · FEB · 5:30 PM',
    location: 'Casa del Bosque',
  },
  {
    id: 'birthday',
    tab: 'Cumpleaños',
    eyebrow: 'Una vuelta más al sol',
    name: 'Sofía',
    line: 'Risas, música y recuerdos para guardar por siempre.',
    date: '22 · AGO · 3:00 PM',
    location: 'Terraza Aurora',
  },
];

const details = [
  ['01', 'Una identidad para tu evento', 'Diseñamos colores, tipografía y detalles que se sienten tuyos.'],
  ['02', 'Toda la información en un lugar', 'Fecha, hora, ubicación, galería, cuenta regresiva y notas importantes.'],
  ['03', 'Confirmaciones más sencillas', 'Tus invitados pueden confirmar por WhatsApp con un solo toque.'],
  ['04', 'Un enlace listo para compartir', 'Funciona perfecto desde el teléfono y se envía fácilmente a tus invitados.'],
];

const process = [
  ['Cuéntanos', 'Nos compartes el tipo de evento, la fecha, el estilo, los textos y tus fotos.'],
  ['Diseñamos', 'Creamos una experiencia digital cuidando la emoción y cada pequeño detalle.'],
  ['La revisas', 'Te mostramos una vista previa antes de pagar para que puedas revisarla con calma.'],
  ['La compartes', 'Después de aprobarla y realizar el pago, recibes el enlace final para tus invitados.'],
];

function Reveal({ children, className = '', as: Tag = 'div', delay = 0, ...props }) {
  return (
    <Tag className={`reveal ${className}`} style={{ '--delay': `${delay}ms` }} {...props}>
      {children}
    </Tag>
  );
}

function Brand() {
  return (
    <span className="brand-lockup">
      <span className="brand-gem">SM</span>
      <span className="brand-words"><strong>Sweet Moments</strong><small>Digital invitations</small></span>
    </span>
  );
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Sweet Moments SV, inicio"><Brand /></a>
      <nav aria-label="Navegación principal">
        <a href="#experiencia">Experiencia</a>
        <a href="#incluye">Qué incluye</a>
        <a href="#proceso">Cómo funciona</a>
        <a className="nav-cta" href={whatsappUrl()} target="_blank" rel="noreferrer">Crear la mía</a>
      </nav>
    </header>
  );
}

function HeroInvitation() {
  return (
    <div className="hero-art" aria-label="Ejemplo editorial de una invitación digital">
      <div className="hero-frame-label"><span>Sweet Moments</span><small>Una experiencia hecha para compartir</small></div>
      <div className="phone">
        <div className="phone-island" />
        <div className="phone-screen">
          <span className="invite-kicker">BABY SHOWER</span>
          <div className="invite-flower"><i /><i /><i /><b>R</b></div>
          <p>Celebrando la llegada de</p>
          <h3>Raquel</h3>
          <em>La dulce espera está por terminar</em>
          <div className="invite-date"><strong>06 DICIEMBRE</strong><span>4:00 p. m.</span></div>
          <div className="invite-buttons"><span>Ubicación</span><span>Confirmar</span></div>
        </div>
      </div>
    </div>
  );
}

function InvitationPreview() {
  const [active, setActive] = useState(moments[0]);
  return (
    <div className="preview-studio">
      <div className="preview-tabs" role="group" aria-label="Cambiar tipo de evento">
        {moments.map((moment) => (
          <button key={moment.id} className={active.id === moment.id ? 'active' : ''} onClick={() => setActive(moment)}>
            {moment.tab}
          </button>
        ))}
      </div>
      <div className={`preview-paper preview-${active.id}`}>
        <div className="paper-corner corner-a" /><div className="paper-corner corner-b" />
        <p>{active.eyebrow}</p>
        <h3>{active.name}</h3>
        <div className="paper-rule" />
        <blockquote>{active.line}</blockquote>
        <div className="paper-meta"><strong>{active.date}</strong><span>{active.location}</span></div>
        <button type="button" tabIndex="-1">Confirmar asistencia</button>
      </div>
      <span className="preview-hint">Toca un evento para cambiar la inspiración</span>
    </div>
  );
}

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.1 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main id="inicio">
        <section className="hero shell">
          <Reveal className="hero-copy">
            <p className="eyebrow"><span /> INVITACIONES DIGITALES · HECHAS PARA SENTIRSE</p>
            <h1>Antes de la celebración, <em>empieza la emoción.</em></h1>
            <p className="hero-lead">Creamos invitaciones digitales con intención, personalidad y todos los detalles que tus invitados necesitan.</p>
            <div className="hero-actions">
              <a className="button primary" href={whatsappUrl()} target="_blank" rel="noreferrer">Cuéntanos tu idea <span>↗</span></a>
              <a className="button quiet" href={DEMO_URL} target="_blank" rel="noreferrer">Ver una invitación real</a>
            </div>
            <div className="hero-signals"><span>Personalizada</span><i /><span>Mobile-first</span><i /><span>Lista para compartir</span></div>
          </Reveal>
          <Reveal className="hero-visual" delay={120}><HeroInvitation /></Reveal>
        </section>

        <section className="event-ribbon" aria-label="Tipos de celebraciones">
          <div><span>Bodas</span><b>✦</b><span>Baby showers</span><b>✦</b><span>Cumpleaños</span><b>✦</b><span>Bautizos</span><b>✦</b><span>Graduaciones</span><b>✦</b><span>Celebraciones únicas</span></div>
        </section>

        <section id="experiencia" className="experience section shell">
          <Reveal className="section-intro split-heading">
            <div><p className="kicker">Diseñamos la primera impresión</p><h2>Tu evento tiene una historia. <em>Hagamos que se sienta.</em></h2></div>
            <p>De lo delicado a lo alegre, cada invitación toma la personalidad de tu celebración sin perder claridad ni facilidad de uso.</p>
          </Reveal>
          <Reveal className="studio-wrap" delay={100}><InvitationPreview /></Reveal>
        </section>

        <section id="incluye" className="details-section">
          <div className="shell details-layout">
            <Reveal className="details-title">
              <p className="kicker light">Más que una fecha y un lugar</p>
              <h2>Una experiencia pensada para <em>emocionar y facilitar.</em></h2>
              <a className="inline-link" href={DEMO_URL} target="_blank" rel="noreferrer">Explorar demo completa <span>↗</span></a>
            </Reveal>
            <div className="detail-list">
              {details.map(([number, title, copy], index) => (
                <Reveal as="article" className="detail-row" delay={index * 60} key={number}>
                  <span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="proceso" className="process section shell">
          <Reveal className="section-intro centered">
            <p className="kicker">De tu idea al enlace</p>
            <h2>Simple, cercano y <em>sin complicaciones.</em></h2>
          </Reveal>
          <div className="process-grid">
            {process.map(([title, copy], index) => (
              <Reveal as="article" className="process-card" delay={index * 70} key={title}>
                <span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="service-note">
            <div><span className="service-dot" /><div><small>INVITACIÓN DIGITAL ESTÁNDAR</small><strong>Una propuesta clara y completa para tu evento</strong></div></div>
            <div className="service-price" aria-label="Precio: 25 dólares"><span>$</span><strong>25</strong></div>
            <a className="button dark" href={whatsappUrl()} target="_blank" rel="noreferrer">Empezar por WhatsApp <span>↗</span></a>
          </Reveal>
        </section>

        <section className="faq section shell">
          <Reveal className="section-intro centered"><p className="kicker">Antes de comenzar</p><h2>Lo importante, <em>sin letra pequeña.</em></h2></Reveal>
          <div className="faq-grid">
            <Reveal as="article"><span>01</span><h3>Tengo que pagar primero?</h3><p>No. Te mostramos una vista previa para que la revises y solo pagas por transferencia bancaria si te gusta.</p></Reveal>
            <Reveal as="article" delay={50}><span>02</span><h3>Cuánto tarda?</h3><p>La vista previa normalmente está lista entre 24 y 48 horas después de recibir toda la información.</p></Reveal>
            <Reveal as="article" delay={100}><span>03</span><h3>Puedo pedir cambios?</h3><p>Sí. Incluimos una revisión para ajustar textos, datos o detalles importantes.</p></Reveal>
            <Reveal as="article" delay={150}><span>04</span><h3>Qué necesito enviar?</h3><p>Fecha, hora, lugar, tema, colores, fotos y cualquier detalle que quieras incluir.</p></Reveal>
          </div>
        </section>

        <section className="final-section shell">
          <Reveal className="final-card">
            <div className="final-mark">SM</div>
            <p className="kicker light">Sweet Moments SV</p>
            <h2>Tu celebración merece una entrada <em>tan especial como el momento.</em></h2>
            <p>Cuéntanos qué estás celebrando y empecemos a imaginarla juntos.</p>
            <a className="button cream" href={whatsappUrl()} target="_blank" rel="noreferrer">Crear mi invitación <span>↗</span></a>
          </Reveal>
        </section>
      </main>

      <footer className="shell">
        <a className="brand" href="#inicio"><Brand /></a>
        <p>Invitaciones digitales para los momentos más dulces de la vida.</p>
        <div className="footer-links"><a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">Instagram</a><a href={whatsappUrl()} target="_blank" rel="noreferrer">WhatsApp</a></div>
        <small>© {new Date().getFullYear()} Sweet Moments SV</small>
      </footer>

      <a className="floating-whatsapp" href={whatsappUrl()} target="_blank" rel="noreferrer" aria-label="Escribir a Sweet Moments por WhatsApp">WA</a>
    </>
  );
}

export default App;
