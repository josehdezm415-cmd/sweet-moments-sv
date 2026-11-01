import { useEffect, useRef, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';

const WHATSAPP_NUMBER = '50379532864';
const DEMO_URL = 'https://babyraquel.sweetmomentssv.com';
const DENZEL_DEMO_URL = 'https://primercumpledenzel.com/';
const INSTAGRAM_URL = 'https://www.instagram.com/sweet.momentssv/';

const heroDemos = [
  {
    id: 'raquel',
    tab: 'Baby shower',
    label: 'Baby Raquel',
    url: DEMO_URL,
    poster: './assets/raquel-scroll-poster-v1.jpg',
    webm: './assets/raquel-scroll-v2.webm',
    mp4: './assets/raquel-scroll-v2.mp4',
  },
  {
    id: 'denzel',
    tab: 'Cumpleaños',
    label: 'Cumpleaños de Denzel',
    url: DENZEL_DEMO_URL,
    poster: './assets/denzel-scroll-poster-v1.jpg',
    webm: './assets/denzel-scroll-v2.webm',
    mp4: './assets/denzel-scroll-v2.mp4',
  },
];

const whatsappUrl = (message = 'SM-WEB Hola, quiero crear una invitación digital para mi evento.') =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const details = [
  ['Diseño con identidad propia', 'Colores, tipografía y detalles creados alrededor de la esencia de tu celebración.'],
  ['Todo, bellamente reunido', 'Fecha, hora, ubicación, galería, cuenta regresiva y cada detalle importante.'],
  ['Confirmar se vuelve sencillo', 'Tus invitados responden por WhatsApp con un solo toque y sin formularios complicados.'],
  ['Un enlace hecho para compartir', 'Se ve precioso en el teléfono y llega a todos en segundos.'],
];

const process = [
  ['Comparte tu idea', 'Nos envías el tipo de evento, la fecha, el estilo, los textos y tus fotos.'],
  ['Le damos forma', 'Creamos una experiencia digital cuidando la emoción y cada pequeño detalle.'],
  ['Revisa con calma', 'Recibes una vista previa protegida antes de pagar y puedes solicitar tu revisión incluida.'],
  ['Celebra y comparte', 'Después de aprobar y realizar el pago, recibes el enlace final sin marca de agua.'],
];

function Reveal({ children, className = '', as: Tag = 'div', delay = 0, ...props }) {
  const reduceMotion = useReducedMotion();
  const MotionTag = Tag === 'article' ? motion.article : Tag === 'section' ? motion.section : motion.div;
  return (
    <MotionTag
      className={`reveal ${className}`}
      initial={reduceMotion ? false : { opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.68, delay: delay / 1000, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </MotionTag>
  );
}

function ScrollProgress() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 150, damping: 28, mass: 0.22 });

  if (reduceMotion) return null;

  return <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />;
}

function KineticHeadline() {
  const reduceMotion = useReducedMotion();
  const lineMotion = reduceMotion
    ? undefined
    : {
        initial: { y: '115%', opacity: 0 },
        animate: { y: '0%', opacity: 1 },
      };

  return (
    <h1 className="kinetic-heading" aria-label="La emoción comienza antes del gran día.">
      <span className="kinetic-line">
        <motion.span
          {...lineMotion}
          transition={{ duration: 0.82, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          La emoción comienza{' '}
        </motion.span>
      </span>
      <span className="kinetic-line kinetic-accent">
        <motion.em
          {...lineMotion}
          transition={{ duration: 0.86, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          antes del gran día.
        </motion.em>
      </span>
    </h1>
  );
}

function MotionCta({ children, className = '', ...props }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.a
      className={`button motion-cta ${className}`}
      whileHover={reduceMotion ? undefined : { y: -3, scale: 1.012 }}
      whileTap={reduceMotion ? undefined : { scale: 0.965 }}
      transition={{ type: 'spring', stiffness: 430, damping: 25 }}
      {...props}
    >
      <span className="motion-cta-label">{children}</span>
      <span className="cta-glow" aria-hidden="true" />
    </motion.a>
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
        <a href="#incluye">Qué incluye</a>
        <a href="#proceso">Cómo funciona</a>
        <a className="nav-cta" href={whatsappUrl()} target="_blank" rel="noreferrer">Crear la mía</a>
      </nav>
    </header>
  );
}

function FloatingWhatsapp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 520);
    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });
    return () => window.removeEventListener('scroll', updateVisibility);
  }, []);

  return (
    <motion.a
      className="floating-whatsapp"
      href={whatsappUrl()}
      target="_blank"
      rel="noreferrer"
      aria-label="Escribir a Sweet Moments por WhatsApp"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      initial={false}
      animate={visible ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.82, y: 12 }}
      whileHover={visible ? { scale: 1.06 } : undefined}
      whileTap={visible ? { scale: 0.94 } : undefined}
      transition={{ type: 'spring', stiffness: 360, damping: 25 }}
      style={{ pointerEvents: visible ? 'auto' : 'none', visibility: visible ? 'visible' : 'hidden' }}
    >
      WA
    </motion.a>
  );
}

function HeroInvitation() {
  const [activeDemo, setActiveDemo] = useState(heroDemos[0]);
  const reduceMotion = useReducedMotion();
  const artRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: artRef, offset: ['start end', 'end start'] });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 105, damping: 24, mass: 0.34 });
  const phoneY = useTransform(smoothProgress, [0, 0.5, 1], [30, 0, -26]);
  const phoneRotateY = useTransform(smoothProgress, [0, 0.5, 1], [-5, 0, 5]);
  const phoneRotateX = useTransform(smoothProgress, [0, 0.5, 1], [2.5, 0, -2.5]);
  const phoneScale = useTransform(smoothProgress, [0, 0.5, 1], [0.965, 1, 1.018]);
  const showNextDemo = (completedId) => {
    setActiveDemo((currentDemo) => {
      if (currentDemo.id !== completedId) return currentDemo;
      const activeIndex = heroDemos.findIndex((demo) => demo.id === completedId);
      return heroDemos[(activeIndex + 1) % heroDemos.length];
    });
  };

  return (
    <div ref={artRef} className="hero-art" aria-label="Ejemplo editorial de una invitación digital">
      <div className="hero-ambient hero-ambient-one" aria-hidden="true" />
      <div className="hero-ambient hero-ambient-two" aria-hidden="true" />
      <div className="hero-demo-head">
        <div className="hero-frame-label"><span>Invitaciones en movimiento</span><small>Elige una celebración y mira la experiencia</small></div>
        <div className="hero-demo-picker" role="group" aria-label="Cambiar demostración">
          {heroDemos.map((demo) => (
            <button
              type="button"
              key={demo.id}
              className={activeDemo.id === demo.id ? 'active' : ''}
              onClick={() => setActiveDemo(demo)}
              aria-pressed={activeDemo.id === demo.id}
            >
              {activeDemo.id === demo.id && <motion.span className="picker-active" layoutId="hero-demo-active" transition={{ type: 'spring', stiffness: 430, damping: 34 }} />}
              <span className="picker-label">{demo.tab}</span>
            </button>
          ))}
        </div>
      </div>
      <motion.div
        className="phone-motion-shell"
        style={reduceMotion ? undefined : { y: phoneY, rotateY: phoneRotateY, rotateX: phoneRotateX, scale: phoneScale }}
      >
        <motion.a
          className="phone"
          href={activeDemo.url}
          target="_blank"
          rel="noreferrer"
          aria-label={`Abrir la invitación real: ${activeDemo.label}`}
          whileHover={reduceMotion ? undefined : { y: -7, scale: 1.012 }}
          whileTap={reduceMotion ? undefined : { scale: 0.985 }}
          transition={{ type: 'spring', stiffness: 260, damping: 26 }}
        >
          <span className="phone-button phone-button-top" aria-hidden="true" />
          <span className="phone-button phone-button-mid" aria-hidden="true" />
          <span className="phone-button phone-button-side" aria-hidden="true" />
          <div className="phone-screen phone-video-screen">
            <AnimatePresence initial={false} mode="sync">
              <motion.video
                key={activeDemo.id}
                className="invite-video"
                autoPlay
                muted
                playsInline
                preload="auto"
                poster={activeDemo.poster}
                onCanPlay={(event) => event.currentTarget.play().catch(() => {})}
                onEnded={() => showNextDemo(activeDemo.id)}
                aria-hidden="true"
                initial={reduceMotion ? false : { opacity: 0, scale: 1.012 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduceMotion ? undefined : { opacity: 0, scale: 0.994 }}
                transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
              >
                <source src={activeDemo.webm} type="video/webm" />
                <source src={activeDemo.mp4} type="video/mp4" />
              </motion.video>
            </AnimatePresence>
            <span className="screen-sheen" aria-hidden="true" />
          </div>
        </motion.a>
      </motion.div>
      <div className="demo-caption"><span className="live-dot" />Demo real · toca el teléfono para abrirla</div>
    </div>
  );
}

function App() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main id="inicio">
        <section className="hero shell">
          <Reveal className="hero-copy">
            <p className="eyebrow"><span /> INVITACIONES DIGITALES · DISEÑADAS PARA RECORDARSE</p>
            <KineticHeadline />
            <p className="hero-lead">Transformamos los detalles de tu celebración en una experiencia digital hermosa, clara y fácil de compartir.</p>
            <div className="hero-actions">
              <MotionCta className="primary" href={whatsappUrl()} target="_blank" rel="noreferrer">Quiero crear la mía <span className="cta-arrow">↗</span></MotionCta>
              <a className="button quiet" href="#incluye">Ver qué incluye</a>
            </div>
            <div className="hero-signals"><span>Diseño a tu medida</span><i /><span>Perfecta en tu teléfono</span><i /><span>Lista para compartir</span></div>
          </Reveal>
          <Reveal className="hero-visual" delay={120}><HeroInvitation /></Reveal>
        </section>

        <section className="event-ribbon" aria-label="Tipos de celebraciones">
          <div><span>Bodas</span><b>✦</b><span>Baby showers</span><b>✦</b><span>Cumpleaños</span><b>✦</b><span>Bautizos</span><b>✦</b><span>Graduaciones</span><b>✦</b><span>Celebraciones únicas</span></div>
        </section>

        <section id="incluye" className="details-section">
          <div className="shell details-layout">
            <Reveal className="details-title">
              <p className="kicker light">Todo lo esencial, en armonía</p>
              <h2>Detalles que enamoran. <em>Funciones que ayudan.</em></h2>
              <a className="inline-link" href={DEMO_URL} target="_blank" rel="noreferrer">Explorar demo completa <span>↗</span></a>
            </Reveal>
            <div className="detail-list">
              {details.map(([title, copy], index) => (
                <Reveal as="article" className="detail-row" delay={index * 60} key={title}>
                  <h3>{title}</h3><p>{copy}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="proceso" className="process section shell">
          <Reveal className="section-intro centered">
            <p className="kicker">De la idea al primer mensaje</p>
            <h2>Cuatro pasos. <em>Cero complicaciones.</em></h2>
          </Reveal>
          <div className="process-grid">
            {process.map(([title, copy], index) => (
              <Reveal as="article" className="process-card" delay={index * 70} key={title}>
                <span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="service-note">
            <div className="service-copy">
              <small>INVITACIÓN DIGITAL PERSONALIZADA</small>
              <strong>Todo lo que tu evento necesita, en un solo enlace.</strong>
              <p>Diseñada a tu medida, lista para compartir y fácil para tus invitados.</p>
            </div>
            <div className="service-price" aria-label="Precio único: 25 dólares">
              <small>PRECIO ÚNICO</small>
              <div className="service-price-value"><span>$</span><strong>25</strong></div>
              <em>Vista previa antes de pagar</em>
            </div>
            <MotionCta className="dark" href={whatsappUrl()} target="_blank" rel="noreferrer">Crear mi invitación <span className="cta-arrow">↗</span></MotionCta>
          </Reveal>
        </section>

        <section className="faq section shell">
          <Reveal className="section-intro centered"><p className="kicker">Antes de crear la tuya</p><h2>Respuestas claras, <em>desde el principio.</em></h2></Reveal>
          <div className="faq-grid">
            <Reveal as="article"><h3>Tengo que pagar primero?</h3><p>No. Te mostramos una vista previa para que la revises y solo pagas por transferencia bancaria si te gusta.</p></Reveal>
            <Reveal as="article" delay={50}><h3>Cuánto tarda?</h3><p>La vista previa normalmente está lista entre 24 y 48 horas después de recibir toda la información.</p></Reveal>
            <Reveal as="article" delay={100}><h3>Puedo pedir cambios?</h3><p>Sí. Incluimos una revisión para ajustar textos, datos o detalles importantes.</p></Reveal>
            <Reveal as="article" delay={150}><h3>Qué necesito enviar?</h3><p>Fecha, hora, lugar, tema, colores, fotos y cualquier detalle que quieras incluir.</p></Reveal>
          </div>
        </section>

        <section className="final-section shell">
          <Reveal className="final-card">
            <div className="final-mark">SM</div>
            <p className="kicker light">Sweet Moments SV</p>
            <h2>Haz que la emoción empiece <em>desde el primer mensaje.</em></h2>
            <p>Cuéntanos qué estás celebrando y creemos una invitación que se sienta completamente tuya.</p>
            <MotionCta className="cream" href={whatsappUrl()} target="_blank" rel="noreferrer">Crear mi invitación <span className="cta-arrow">↗</span></MotionCta>
          </Reveal>
        </section>
      </main>

      <footer className="shell">
        <a className="brand" href="#inicio"><Brand /></a>
        <p>Invitaciones digitales para los momentos más dulces de la vida.</p>
        <div className="footer-links"><a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">Instagram</a><a href={whatsappUrl()} target="_blank" rel="noreferrer">WhatsApp</a></div>
        <small>© {new Date().getFullYear()} Sweet Moments SV</small>
      </footer>

      <FloatingWhatsapp />
    </>
  );
}

export default App;
