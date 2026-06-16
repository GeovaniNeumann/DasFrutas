import styles from './Differentials.module.css'

const CARDS = [
  {
    emoji: '🌿',
    title: 'Natural',
    desc: 'Ingredientes 100% naturais, sem aditivos artificiais de qualquer tipo.',
    accent: 'green',
  },
  {
    emoji: '🍹',
    title: '100% Suco',
    desc: 'Puro suco de fruta, sem adição de água, açúcar ou xarope.',
    accent: 'orange',
  },
  {
    emoji: '🚫',
    title: 'Sem Conservantes',
    desc: 'Zero conservantes. A natureza já fez o trabalho de preservar o sabor.',
    accent: 'red',
  },
  {
    emoji: '💊',
    title: 'Fonte de Vitaminas',
    desc: 'Rico em vitaminas A, C e B-complex para fortalecer sua imunidade.',
    accent: 'yellow',
  },
  {
    emoji: '❄️',
    title: 'Fresco e Natural',
    desc: 'Processado e engarrafado fresco, preservando cada nutriente.',
    accent: 'green',
  },
  {
    emoji: '💧',
    title: 'Refrescante',
    desc: 'A hidratação saborosa que seu corpo pede nos dias quentes.',
    accent: 'orange',
  },
  {
    emoji: '💚',
    title: 'Saudável',
    desc: 'Uma escolha inteligente para quem cuida do bem-estar e da saúde.',
    accent: 'green',
  },
  {
    emoji: '🌱',
    title: 'Feito com Frutas Selecionadas',
    desc: 'Selecionamos somente as melhores frutas da safra para seu suco.',
    accent: 'yellow',
  },
]

/**
 * Seção de diferenciais/selos da marca
 * Grid responsivo com cards coloridos
 */
export default function Differentials() {
  return (
    <section className={styles.section}>
      {/* Faixa decorativa */}
      <div className={styles.topStripe} aria-hidden="true" />

      <div className="container">
        <div className={styles.header}>
          <span className={styles.eyebrow}>Nossos diferenciais</span>
          <h2 className={styles.title}>Por que escolher a <span>DasFrutas?</span></h2>
          <p className={styles.subtitle}>
            Cada detalhe do nosso processo é pensado para entregar o melhor suco
            natural que você já provou.
          </p>
        </div>

        <ul className={styles.grid} role="list">
          {CARDS.map((card, i) => (
            <li
              key={i}
              className={`${styles.card} ${styles[`accent-${card.accent}`]}`}
            >
              <div className={styles.cardIcon} aria-hidden="true">
                {card.emoji}
              </div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDesc}>{card.desc}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.bottomStripe} aria-hidden="true" />
    </section>
  )
}
