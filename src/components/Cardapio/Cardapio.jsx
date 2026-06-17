import styles from './Cardapio.module.css'

export default function Cardapio() {
  return (
    <section className={styles.cardapio} id="cardapio">
      <div className={`container ${styles.inner}`}>
        
        {/* Cabeçalho */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>Delícias naturais</span>
          <h2 className={styles.title}>Nosso <span>Cardápio</span></h2>
          <p className={styles.subtitle}>
            Confira nossas opções de sucos naturais, feitos com frutas frescas 
            e selecionadas especialmente para você.
          </p>
        </div>

        {/* Imagem */}
        <div className={styles.imageWrapper}>
          <div className={styles.imageFrame}>
            <img
              src="/cardapio.webp"
              alt="Cardápio DasFrutas"
              className={styles.cardapioImg}
              loading="lazy"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
                e.currentTarget.parentElement.classList.add(styles.fallback)
              }}
            />
            
            <div className={styles.badge}>
              <span className={styles.badgeIcon}>🍊</span>
              <span className={styles.badgeText}>+10 sabores</span>
            </div>
          </div>
        </div>

        {/* Botões */}
        <div className={styles.actions}>
          <a
            href="https://wa.me/5541998151590?text=Ol%C3%A1!%20Gostaria%20de%20ver%20o%20card%C3%A1pio%20completo."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaBtn}
          >
            <span className={styles.ctaIcon}>📋</span>
            Ver cardápio completo
          </a>
          <a
            href="https://wa.me/5541998151590?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20pedido."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaBtnSecondary}
          >
            <span className={styles.ctaIcon}>💬</span>
            Fazer pedido
          </a>
        </div>

        {/* Destaques */}
        <div className={styles.features}>
          <div className={styles.featureItem}>
            <span className={styles.featureIcon}>🥤</span>
            <span className={styles.featureText}>500ml de puro sabor</span>
          </div>
          <div className={styles.featureItem}>
            <span className={styles.featureIcon}>🌿</span>
            <span className={styles.featureText}>Sem conservantes</span>
          </div>
          <div className={styles.featureItem}>
            <span className={styles.featureIcon}>🚚</span>
            <span className={styles.featureText}>Entrega rápida</span>
          </div>
          <div className={styles.featureItem}>
            <span className={styles.featureIcon}>❤️</span>
            <span className={styles.featureText}>Feito com amor</span>
          </div>
        </div>

      </div>
    </section>
  )
}