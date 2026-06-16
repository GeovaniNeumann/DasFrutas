import { useState, useEffect, useCallback } from 'react'
import styles from './Header.module.css'

const NAV_LINKS = [
  { label: 'Início',   href: '#inicio'   },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Sobre',    href: '#sobre'    },
  { label: 'Contato',  href: '#contato'  },
]

/**
 * Header transparente sobre o Hero.
 * Ganha fundo sólido ao rolar (scrolled).
 * Mobile: drawer lateral com overlay.
 */
export default function Header() {
  const [open,     setOpen]     = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') setOpen(false)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [open, handleKeyDown])

  const closeMenu = () => setOpen(false)

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : styles.transparent}`}>
        <div className={`container ${styles.inner}`}>

          {/* Logo */}
          <a href="#inicio" className={styles.logo} onClick={closeMenu} aria-label="DasFrutas — início">
            <img
              src="/logo.webp"
              alt="DasFrutas"
              width={130}
              height={52}
              onError={(e) => { e.currentTarget.style.display = 'none' }}
            />
            <span className={styles.logoFallback}>
              Das<span>Frutas</span>
            </span>
          </a>

          {/* Nav desktop */}
          <nav className={styles.nav} aria-label="Menu principal">
            <ul className={styles.navList}>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={styles.navLink}>
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://wa.me/5541996574290"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.ctaBtn}
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </nav>

          {/* Hambúrguer */}
          <button
            className={`${styles.hamburger} ${open ? styles.active : ''}`}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Overlay escuro */}
      <div
        className={`${styles.overlay} ${open ? styles.overlayVisible : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Drawer mobile */}
      <nav
        id="mobile-menu"
        className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`}
        aria-label="Menu mobile"
        aria-hidden={!open}
      >
        {/* Cabeçalho do drawer */}
        <div className={styles.drawerHead}>
          <span className={styles.drawerBrand}>Das<span>Frutas</span></span>
          <button
            className={styles.closeBtn}
            onClick={closeMenu}
            aria-label="Fechar menu"
          >
            ✕
          </button>
        </div>

        <ul className={styles.drawerList}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={styles.drawerLink} onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://wa.me/5541996574290"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.drawerCta}
          onClick={closeMenu}
        >
          💬 Peça pelo WhatsApp
        </a>

        <div className={styles.drawerContacts}>
          <a href="tel:+5541996574290">(41) 99657-4290</a>
          <a href="tel:+5541998151590">(41) 99815-1590</a>
        </div>
      </nav>
    </>
  )
}
