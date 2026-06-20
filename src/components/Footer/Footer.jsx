import styles from './Footer.module.css'

const QUICK_LINKS = [
  { label: 'Início',   href: '#inicio'   },
  { label: 'Sobre',    href: '#sobre'    },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Cardápio', href: '#cardapio' },
  { label: 'Contato',  href: '#contato'  },
]

const year = new Date().getFullYear()

// Mensagem personalizada igual ao formulário e botão WhatsApp
const MENSAGEM_WHATSAPP = '👋 Olá! Vim através do site DasFrutas e gostaria de fazer um pedido:'

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
            Suco 100% natural, feito com frutas selecionadas. Sem conservantes o sabor que vem direto da natureza.
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
              <span className={styles.contactIcon}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="#25D366" aria-hidden="true">
                  <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.149-.149.346-.39.523-.585.176-.195.234-.336.351-.559.117-.226.06-.42-.029-.585-.087-.165-.787-1.89-1.077-2.587-.18-.434-.359-.452-.524-.45-.165 0-.351 0-.541-.001-.19 0-.49.075-.749.345-.255.27-1.001.978-1.001 2.385 0 1.41.964 2.771 1.097 2.971.135.196 1.873 2.86 4.633 4.026 2.357.997 2.84.795 3.354.748.51-.045 1.679-.689 1.916-1.355.232-.667.232-1.236.157-1.355-.074-.121-.301-.196-.601-.346z"/>
                  <path d="M12.012 2c-5.506 0-9.989 4.478-9.989 9.985 0 1.764.461 3.479 1.336 4.985L2 22l5.176-1.34a9.95 9.95 0 0 0 4.836 1.236h.005c5.504 0 9.984-4.479 9.984-9.985.003-2.665-1.036-5.172-2.923-7.06A9.945 9.945 0 0 0 12.012 2zm5.864 14.063c-.659 1.845-3.273 3.385-5.864 3.385-2.196 0-4.213-.852-5.711-2.265l.005.005a8.296 8.296 0 0 1-2.55-5.972c0-4.582 3.732-8.314 8.318-8.314 2.224 0 4.31.866 5.879 2.434a8.286 8.286 0 0 1 2.439 5.882c0 1.756-.531 3.426-1.516 4.845z"/>
                </svg>
              </span>
              <a href={`https://wa.me/5541996574290?text=${encodeURIComponent(MENSAGEM_WHATSAPP)}`} target="_blank" rel="noopener noreferrer">
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
            href={`https://wa.me/5541998151590?text=${encodeURIComponent(MENSAGEM_WHATSAPP)}`}
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
          © {year} <strong>DasFrutas</strong> Sabor que vem da natureza.
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