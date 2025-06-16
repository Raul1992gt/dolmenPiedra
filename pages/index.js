import Head from 'next/head'
import { useState, useEffect } from 'react'

export default function Home() {
  const [activeSection, setActiveSection] = useState('inicio')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'nosotros', 'proyectos', 'testimonios', 'contacto']
      const scrollY = window.scrollY

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollY >= offsetTop - 100 && scrollY < offsetTop + offsetHeight - 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    // Scroll reveal functionality
    const revealElements = () => {
      const reveals = document.querySelectorAll('.reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-stagger')
      
      reveals.forEach((element, index) => {
        const windowHeight = window.innerHeight
        const elementTop = element.getBoundingClientRect().top
        const elementVisible = 150

        if (elementTop < windowHeight - elementVisible) {
          // Add stagger delay for stagger elements
          if (element.classList.contains('reveal-stagger')) {
            setTimeout(() => {
              element.classList.add('active')
            }, index * 100)
          } else {
            element.classList.add('active')
          }
        }
      })
    }

    // Back to top button visibility
    const handleBackToTopVisibility = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true)
      } else {
        setShowBackToTop(false)
      }
    }

    // Combined scroll handler
    const handleScrollEvents = () => {
      handleScroll()
      revealElements()
      handleBackToTopVisibility()
    }

    // Initial reveal check
    revealElements()

    window.addEventListener('scroll', handleScrollEvents)
    return () => window.removeEventListener('scroll', handleScrollEvents)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileMenuOpen(false) // Cerrar menú móvil al navegar
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const proyectos = [
    {
      title: 'Paredes de Piedra',
      image: '/dolmenPiedra/images/proyectos/paredes.jpg',
      description: 'Revestimientos únicos que transforman espacios con la elegancia natural de la piedra.'
    },
    {
      title: 'Suelos Elegantes',
      image: '/dolmenPiedra/images/proyectos/suelos.jpg',
      description: 'Pavimentos naturales de alta durabilidad que aportan calidez y sofisticación.'
    },
    {
      title: 'Baños de Lujo',
      image: '/dolmenPiedra/images/proyectos/banio.jpg',
      description: 'Espacios de relajación únicos donde la piedra natural crea ambientes serenos.'
    },
    {
      title: 'Mesas Artesanales',
      image: '/dolmenPiedra/images/proyectos/mesas.jpg',
      description: 'Mobiliario único tallado a mano, donde cada pieza cuenta una historia.'
    },
    {
      title: 'Trabajos a Medida',
      image: '/dolmenPiedra/images/proyectos/amedida.jpg',
      description: 'Proyectos personalizados y únicos adaptados a tus necesidades específicas y espacios particulares.'
    }
  ]

  const testimonios = [
    {
      name: 'María González',
      location: 'Madrid',
      rating: 5,
      comment: 'El trabajo de Dolmen Piedra superó todas nuestras expectativas. La mesa de piedra natural que crearon para nuestro salón es simplemente espectacular. Un trabajo artesanal de primera calidad.',
      project: 'Mesa de comedor'
    },
    {
      name: 'Carlos Martín',
      location: 'Barcelona',
      rating: 5,
      comment: 'Transformaron completamente nuestro baño con piedra natural. El resultado es elegante, duradero y único. Todo el proceso fue profesional y el acabado impecable.',
      project: 'Revestimiento de baño'
    },
    {
      name: 'Ana Rodríguez',
      location: 'Valencia',
      rating: 5,
      comment: 'La pared de piedra en nuestro salón se ha convertido en el elemento central de la casa. Cada visita queda impresionada. Un trabajo excepcional y un trato muy cercano.',
      project: 'Pared decorativa'
    },
    {
      name: 'Javier López',
      location: 'Sevilla',
      rating: 5,
      comment: 'Los suelos de piedra natural que instalaron han transformado nuestra terraza. Resistentes, hermosos y con un acabado perfecto. Muy recomendable su trabajo.',
      project: 'Pavimento exterior'
    }
  ]

  return (
    <>
      <Head>
        <title>Dolmen Piedra - Diseño y Esculturas en Piedra Natural</title>
        <meta name="description" content="Especialistas en diseño y trabajos artesanales con piedra natural. Creamos espacios únicos y esculturas personalizadas con la más alta calidad." />
        <meta name="keywords" content="piedra natural, diseño, esculturas, decoración, interiores, mesas, paredes, suelos, baños, artesanía" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="header">
        <div className="container">
          <nav className="nav">
            <a href="#inicio" className="logo font-serif">
              <img src="/dolmenPiedra/images/logo/logo.jpg" alt="Dolmen Piedra" className="logo-img" />
              Dolmen Piedra
            </a>
            
            <ul className="nav-menu">
              {['inicio', 'nosotros', 'proyectos', 'testimonios', 'contacto'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className={`nav-link ${activeSection === item ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(item)
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            
            <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </nav>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu">
            <ul className="mobile-menu-list">
              {['inicio', 'nosotros', 'proyectos', 'testimonios', 'contacto'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className={`mobile-menu-link ${activeSection === item ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(item)
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section id="inicio" className="hero">
          <img 
            src="/dolmenPiedra/images/home/home.jpg" 
            alt="Dolmen Piedra - Maestros en Piedra Natural" 
            className="hero-bg"
          />
          <div className="hero-overlay"></div>
          
          <div className="hero-content fade-in-up">
            <h1 className="hero-title font-serif">Dolmen Piedra</h1>
            <p className="hero-subtitle">
              Transformamos la piedra natural en obras de arte.<br />
              Diseño, elegancia y durabilidad en cada proyecto.
            </p>
            <button 
              className="btn-primary"
              onClick={() => scrollToSection('proyectos')}
            >
              Ver Nuestros Proyectos
              <span>→</span>
            </button>
          </div>
        </section>

                {/* About Section */}
        <section id="nosotros" className="section about">
          <div className="container">
            <div className="about-grid">
              <div className="about-content reveal-left">
                <h2 className="font-serif">Maestros en Piedra Natural</h2>
                <p>
                  Con más de una década de experiencia, en Dolmen Piedra nos especializamos 
                  en crear espacios únicos utilizando la belleza y durabilidad de la piedra natural.
                </p>
                <p>
                  Cada proyecto es una obra de arte personalizada, donde combinamos técnicas 
                  artesanales tradicionales con diseño contemporáneo para crear espacios 
                  que perduran en el tiempo.
                </p>
                <ul className="about-features">
                  <li>Más de 10 años de experiencia</li>
                  <li>Técnicas artesanales tradicionales</li>
                  <li>Diseños personalizados únicos</li>
                  <li>Materiales de la más alta calidad</li>
                </ul>
              </div>
                             <div className="reveal-right">
                 <img 
                   src="/dolmenPiedra/images/nosotros/nosotros.jpg" 
                   alt="Artesanos de Dolmen Piedra trabajando" 
                   className="about-img"
                 />
               </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="proyectos" className="section projects">
          <div className="container">
            <h2 className="section-title font-serif reveal-up">Nuestros Proyectos</h2>
            <p className="section-subtitle reveal-up">
              Cada proyecto es una historia única. Descubre cómo transformamos 
              espacios con la elegancia y durabilidad de la piedra natural.
            </p>
            
            <div className="projects-grid">
              {proyectos.map((proyecto, index) => (
                <div key={index} className="project-card reveal-stagger">
                  <img 
                    src={`${proyecto.image}`} 
                    alt={proyecto.title} 
                    className="project-img"
                  />
                  <div className="project-content">
                    <h3 className="project-title font-serif">{proyecto.title}</h3>
                    <p className="project-description">{proyecto.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonios" className="section testimonials">
          <div className="container">
            <h2 className="section-title font-serif reveal-up">Lo que Dicen Nuestros Clientes</h2>
            <p className="section-subtitle reveal-up">
              La satisfacción de nuestros clientes es nuestra mayor recompensa. 
              Descubre lo que opinan sobre nuestro trabajo.
            </p>
            
            <div className="testimonials-grid">
              {testimonios.map((testimonio, index) => (
                <div key={index} className="testimonial-card reveal-stagger">
                  <div className="testimonial-content">
                    <div className="testimonial-stars">
                      {[...Array(testimonio.rating)].map((_, i) => (
                        <span key={i} className="star">⭐</span>
                      ))}
                    </div>
                    <p className="testimonial-text">"{testimonio.comment}"</p>
                    <div className="testimonial-project">
                      <small>Proyecto: {testimonio.project}</small>
                    </div>
                  </div>
                  <div className="testimonial-author">
                    <div className="author-avatar">
                      {testimonio.name.charAt(0)}
                    </div>
                    <div className="author-info">
                      <h4 className="author-name">{testimonio.name}</h4>
                      <p className="author-location">{testimonio.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className="section contact">
          <div className="container">
            <h2 className="section-title font-serif reveal-up">Hablemos de tu Proyecto</h2>
            <p className="section-subtitle reveal-up">
              ¿Tienes una idea en mente? Nos encantaría conocer tu visión 
              y ayudarte a crear algo extraordinario con piedra natural.
            </p>
            
            <div className="contact-grid">
              <div className="contact-item reveal-stagger">
                <div className="contact-icon">✉</div>
                <h3 className="font-serif">Email</h3>
                <p>info@dolmenpiedra.com</p>
              </div>
              
              <div className="contact-item reveal-stagger">
                <div className="contact-icon">📞</div>
                <h3 className="font-serif">Teléfono</h3>
                <p>+34 xxx xxx xxx</p>
              </div>
              
              <div className="contact-item reveal-stagger">
                <div className="contact-icon">📍</div>
                <h3 className="font-serif">Ubicación</h3>
                <p>España</p>
              </div>

              <div className="contact-item reveal-stagger">
                <div className="contact-icon">📷</div>
                <h3 className="font-serif">Instagram</h3>
                <p>
                  <a 
                    href="https://instagram.com/dolmenpiedra" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{color: 'var(--stone-300)', textDecoration: 'none'}}
                  >
                    @dolmenpiedra
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-logo font-serif">
            <img src="/dolmenPiedra/images/logo/logo.jpg" alt="Dolmen Piedra" />
            Dolmen Piedra
          </div>
          <p>Transformando espacios con la belleza eterna de la piedra natural</p>
          <p className="footer-copyright">© <a href="https://www.linkedin.com/in/raul-garcia-torrejon/" target="_blank" rel="noopener noreferrer">Raul GT</a> {new Date().getFullYear()} . Todos los derechos reservados.</p>
                  </div>
        </footer>

        {/* Back to Top Button */}
        {showBackToTop && (
          <button
            className="back-to-top"
            onClick={scrollToTop}
            aria-label="Volver al inicio"
          >
            ↑
          </button>
        )}
      </>
    )
  } 