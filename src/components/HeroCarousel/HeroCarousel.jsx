import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'

// Swiper core styles
import 'swiper/css'
import 'swiper/css/pagination'

import styles from './HeroCarousel.module.css'

const SLIDES = [
  {
    id: 1,
    image: '/imghero1.webp',
    fallbackColor: '#2D6A1F',
    title: 'Suco Natural DasFrutas',
    subtitle: '100% puro, sem conservantes e cheio de vitaminas',
  },
  {
    id: 2,
    image: '/imghero2.webp',
    fallbackColor: '#F97316',
    title: 'Suco Natural DasFrutas',
    subtitle: 'Feito com frutas selecionadas, 500ml de saúde pura',
  },
  {
    id: 3,
    image: '/imghero3.webp',
    fallbackColor: '#DC2626',
    title: 'Suco Natural DasFrutas',
    subtitle: 'Refrescante, saudável e direto da natureza para você',
  },
  {
    id: 4,
    image: '/imghero4.webp',
    fallbackColor: '#4A9E32',
    title: 'Suco Natural DasFrutas',
    subtitle: 'Sabor autêntico que só frutas de verdade entregam',
  },
]

const WA_LINK = 'https://wa.me/5541996574290?text=Ol%C3%A1!%20Gostaria%20de%20fazer%20um%20pedido.'

/**
 * Hero com carrossel Swiper
 * - 4 slides com imagens de fundo
 * - Texto + CTA WhatsApp em cada slide
 * - Autoplay 5s, navegação por setas e dots
 */
export default function HeroCarousel() {
  return (
    <div className={styles.heroWrapper}>
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        speed={700}
        grabCursor
        className={styles.swiper}
        aria-label="Carrossel de produtos DasFrutas"
      >
        {SLIDES.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className={styles.slide}
              style={{ '--fallback-color': slide.fallbackColor }}
            >
              {/* Imagem de fundo */}
              <img
                src={slide.image}
                alt={`DasFrutas — slide ${slide.id}`}
                className={styles.slideImg}
                loading={slide.id === 1 ? 'eager' : 'lazy'}
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />

              {/* Overlay gradiente */}
              <div className={styles.overlay} aria-hidden="true" />

              {/* Conteúdo */}
              <div className={styles.content}>
                <span className={styles.badge}>🍊 Natural • 500ml</span>
                <h1 className={styles.title}>{slide.title}</h1>
                <p className={styles.subtitle}>{slide.subtitle}</p>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.ctaBtn}
                >
                  <span className={styles.ctaIcon}>💬</span>
                  Peça pelo WhatsApp
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Slogan flutuante */}
      <div className={styles.slogan} aria-hidden="true">
        SABOR QUE VEM DA NATUREZA
      </div>
    </div>
  )
}