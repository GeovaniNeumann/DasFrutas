import styles from './Footer.module.css'

const QUICK_LINKS = [
  { label: 'Início',   href: '#inicio'   },
  { label: 'Sobre',    href: '#sobre'    },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Cardápio', href: '#cardapio' },
  { label: 'Contato',  href: '#contato'  },
]

const year = new Date().getFullYear()

/**
 * Rodapé completo
 * - Mobile: centralizado em coluna única
 * - Desktop: 3 colunas (logo, links, contatos)
 */
export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Faixa colorida topo */}
      <div className={styles.topBar} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>

        {/* Coluna 1 — Marca */}
        <div className={styles.brandCol}>
          <a href="#inicio" className={styles.logoLink} aria-label="DasFrutas">
            <div className={styles.logoWrapper}>
              <img
                src="/logo.webp"
                alt="DasFrutas logo"
                className={styles.logo}
                width={120}
                height={48}
                loading="lazy"
                onError={(e) => { e.currentTarget.style.display = 'none' }}
              />
              <span className={styles.logoFallback}>Das<span>Frutas</span></span>
            </div>
          </a>
          <p className={styles.brandDesc}>
            Suco 100% natural, feito com frutas selecionadas.
            <br />Sem conservantes. Sabor que vem da natureza.
          </p>
          <div className={styles.badges} aria-label="Selos de qualidade">
            {['🌿 Natural', '🚫 Sem conservantes', '💊 Vitaminas'].map((b) => (
              <span key={b} className={styles.badge}>{b}</span>
            ))}
          </div>
        </div>

        {/* Coluna 2 — Links rápidos */}
        <nav className={styles.linksCol} aria-label="Links rápidos">
          <h3 className={styles.colTitle}>Links rápidos</h3>
          <ul className={styles.linkList}>
            {QUICK_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className={styles.link}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Coluna 3 — Contato */}
        <div className={styles.contactCol}>
          <h3 className={styles.colTitle}>Contato</h3>
          <ul className={styles.contactList}>
            <li>
              <span aria-hidden="true">📱</span>
              <a href="https://wa.me/5541996574290" target="_blank" rel="noopener noreferrer">
                (41) 99657-4290
              </a>
            </li>
            <li>
              <span aria-hidden="true">📞</span>
              <a href="tel:+5541998151590">(41) 99815-1590</a>
            </li>
            <li>
              <span aria-hidden="true">🕐</span>
              <span>Seg–Sáb: 7h–18h</span>
            </li>
          </ul>

          <a
            href="https://wa.me/5541998151590?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20pedido."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.waBtn}
          >
            💬 Peça agora
          </a>
        </div>

      </div>

      {/* Copyright */}
      <div className={styles.bottom}>
        <p>
          © {year} <strong>DasFrutas</strong> — Sabor que vem da natureza.
          Todos os direitos reservados.
        </p>
        <p className={styles.credit}>
          Feito por{' '}
          <a
            href="https://www.neumannwebsolutions.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.creditLink}
          >
            Neumann Web Solutions
          </a>
        </p>
      </div>
    </footer>
  )
}