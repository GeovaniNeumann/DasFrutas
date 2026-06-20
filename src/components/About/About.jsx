import styles from './About.module.css'

/**
 * Seção "Sobre DasFrutas"
 * - Grid responsivo: texto à esquerda, imagem à direita
 * - Destaques com bullets coloridos
 */
export default function About() {
  const highlights = [
    { emoji: '🍊', text: 'Suco 100% natural' },
    { emoji: '🚫', text: 'Sem conservantes ou corantes artificiais' },
    { emoji: '💊', text: 'Fonte rica em vitaminas e antioxidantes' },
    { emoji: '❄️', text: 'Sempre fresco, mantendo o sabor original' },
    { emoji: '💚', text: 'Saudável e refrescante para toda a família' },
  ]

  return (
    <section className={styles.about}>
      <div className={`container ${styles.inner}`}>

        {/* Texto */}
        <div className={styles.textCol}>
          <span className={styles.eyebrow}>Quem somos</span>
          <h2 className={styles.title}>Sobre <span>DasFrutas</span></h2>
          <p className={styles.lead}>
            Nascemos com uma missão simples levar o sabor verdadeiro da natureza
            direto para o seu copo. Cada garrafa DasFrutas é produzida com
            frutas cuidadosamente selecionadas, sem atalhos e sem químicos.
          </p>

          <ul className={styles.highlights}>
            {highlights.map((item, i) => (
              <li key={i} className={styles.highlightItem}>
                <span className={styles.emoji} aria-hidden="true">{item.emoji}</span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>

          <div className={styles.actions}>
            <a href="#produtos" className={styles.btnPrimary}>
              Ver diferenciais
            </a>
            <a
              href="https://wa.me/554198151590?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20DasFrutas."
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnSecondary}
            >
              📞 Fale conosco
            </a>
          </div>
        </div>

        {/* Imagem */}
        <div className={styles.imageCol}>
          <div className={styles.imageFrame}>
            <img
              src="/about.webp"
              alt="Frutas frescas selecionadas para os sucos DasFrutas"
              className={styles.image}
              loading="lazy"
              onError={(e) => {
                /* Fallback decorativo se imagem não existir */
                e.currentTarget.parentElement.classList.add(styles.imageFallback)
                e.currentTarget.style.display = 'none'
              }}
            />
            {/* Badge flutuante */}
            <div className={styles.badge}>
              <span className={styles.badgeNumber}>500</span>
              <span className={styles.badgeUnit}>ml</span>
              <span className={styles.badgeLabel}>puro sabor</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
