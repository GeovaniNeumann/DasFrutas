import { useState } from 'react'
import styles from './ContactForm.module.css'

const WA_NUMBER = '5541998151590' 

// Categorias e sabores do cardápio
const CATEGORIAS = [
  {
    id: 'tradicionais',
    nome: 'Tradicionais',
    preco: 'R$ 12,00',
    sabores: [
      'Laranja',
      'Manga',
      'Abacaxi',
      'Goiaba',
      'Melancia',
      'Maracujá'
    ]
  },
  {
    id: 'especiais',
    nome: 'Especiais',
    preco: 'R$ 14,00',
    sabores: [
      'Abacaxi + Hortelã',
      'Abacaxi + Kiwi',
      'Kiwi + Laranja',
      'Melancia + Morango',
      'Melancia + Limão',
      'Maracujá + Manga',
      'Laranja + Morango'
    ]
  },
  {
    id: 'suicos',
    nome: 'Suícos (feitos com leite condensado)',
    preco: 'R$ 14,00',
    sabores: [
      'Limão',
      'Coco',
      'Morango',
      'Maracujá'
    ]
  },
  {
    id: 'lara-creme',
    nome: 'Lara Creme (mais cremosos e encorpados)',
    preco: 'R$ 17,00',
    sabores: [
      'Tradicional',
      'Morango',
      'Maracujá'
    ]
  },
  {
    id: 'detox',
    nome: 'Detox',
    preco: 'R$ 12,00',
    sabores: [
      'Suco Verde',
      'Aumento de Imunidade',
      'Emagrecedor',
      'Refresca a Mente',
      'Cura Gripe',
      'Detox'
    ]
  }
]

// Mais vendidos para exibição
const MAIS_VENDIDOS = [
  'Abacaxi + Hortelã',
  'Melancia + Morango',
  'Maracujá + Manga',
  'Suíco de Limão',
  'Lara Creme de Morango'
]

const INITIAL_STATE = {
  nome:       '',
  telefone:   '',
  endereco:   '',
  numero:     '',
  categoria:  '',
  sabor:      '',
  acucar:     '',
  quantidade: '1',
  obs:        '',
}

const INITIAL_ERRORS = {
  nome:       '',
  telefone:   '',
  endereco:   '',
  numero:     '',
  categoria:  '',
  sabor:      '',
  acucar:     '',
  quantidade: '',
}

export default function ContactForm() {
  const [fields, setFields] = useState(INITIAL_STATE)
  const [errors, setErrors] = useState(INITIAL_ERRORS)
  const [sent,   setSent]   = useState(false)

  // Obtém os sabores da categoria selecionada
  const getSaboresPorCategoria = () => {
    const categoria = CATEGORIAS.find(c => c.id === fields.categoria)
    return categoria ? categoria.sabores : []
  }

  // Obtém o preço da categoria selecionada
  const getPrecoCategoria = () => {
    const categoria = CATEGORIAS.find(c => c.id === fields.categoria)
    return categoria ? categoria.preco : ''
  }

  const validate = () => {
    const e = { ...INITIAL_ERRORS }
    let valid = true

    if (!fields.nome.trim()) {
      e.nome = 'Informe seu nome.'
      valid = false
    }

    if (!fields.telefone.trim()) {
      e.telefone = 'Informe seu telefone / WhatsApp.'
      valid = false
    } else if (fields.telefone.replace(/\D/g, '').length < 10) {
      e.telefone = 'Número inválido (mínimo 10 dígitos).'
      valid = false
    }

    if (!fields.endereco.trim()) {
      e.endereco = 'Informe seu endereço.'
      valid = false
    }

    if (!fields.numero.trim()) {
      e.numero = 'Informe o número.'
      valid = false
    }

    if (!fields.categoria) {
      e.categoria = 'Selecione uma categoria.'
      valid = false
    }

    if (!fields.sabor) {
      e.sabor = 'Escolha um sabor.'
      valid = false
    }

    if (!fields.acucar) {
      e.acucar = 'Informe se deseja com ou sem açúcar.'
      valid = false
    }

    if (!fields.quantidade || Number(fields.quantidade) < 1) {
      e.quantidade = 'Informe a quantidade.'
      valid = false
    }

    setErrors(e)
    return valid
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFields((prev) => ({ 
      ...prev, 
      [name]: value,
      // Resetar sabor quando mudar categoria
      ...(name === 'categoria' ? { sabor: '' } : {})
    }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleTelefone = (e) => {
    let v = e.target.value.replace(/\D/g, '').slice(0, 11)
    if (v.length >= 7) {
      v = v.length === 11
        ? `(${v.slice(0,2)}) ${v.slice(2,7)}-${v.slice(7)}`
        : `(${v.slice(0,2)}) ${v.slice(2,6)}-${v.slice(6)}`
    } else if (v.length >= 3) {
      v = `(${v.slice(0,2)}) ${v.slice(2)}`
    }
    setFields((prev) => ({ ...prev, telefone: v }))
    if (errors.telefone) setErrors((prev) => ({ ...prev, telefone: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    const preco = getPrecoCategoria()
    const categoriaNome = CATEGORIAS.find(c => c.id === fields.categoria)?.nome || ''

    const linhas = [
      `👋 Olá! Vim através do site DasFrutas e gostaria de fazer um pedido:`,
      ``,
      `👤 *Nome:* ${fields.nome.trim()}`,
      `📱 *Telefone:* ${fields.telefone.trim()}`,
      `📍 *Endereço:* ${fields.endereco.trim()}, ${fields.numero.trim()}`,
      `📋 *Categoria:* ${categoriaNome} (${preco})`,
      `🍹 *Sabor:* ${fields.sabor}`,
      `🍬 *Açúcar:* ${fields.acucar}`,
      `📦 *Quantidade:* ${fields.quantidade} unidade(s) de 500ml`,
      fields.obs.trim() ? `📝 *Observações:* ${fields.obs.trim()}` : null,
    ].filter(Boolean).join('\n')

    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(linhas)}`

    setSent(true)
    setTimeout(() => {
      window.open(url, '_blank', 'noopener,noreferrer')
      setFields(INITIAL_STATE)
      setSent(false)
    }, 900)
  }

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.inner}>

          {/* ---- Coluna info ---- */}
          <div className={styles.info}>
            <span className={styles.eyebrow}>Peça agora</span>
            <h2 className={styles.title}>Faça seu <span>pedido</span></h2>
            <p className={styles.lead}>
              Preencha o formulário e sua mensagem chega formatada direto no
              nosso WhatsApp. Rápido e sem complicação!
            </p>

            {/* Mais Vendidos */}
            <div className={styles.bestSellers}>
              <strong className={styles.bestSellersTitle}>⭐ Mais Vendidos</strong>
              <ul className={styles.bestSellersList}>
                {MAIS_VENDIDOS.map((item, index) => (
                  <li key={index}>
                    <span className={styles.bestSellersNumber}>{index + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <ul className={styles.contacts}>
              <li>
                <span className={styles.contactIcon}>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    width="22" 
                    height="22"
                    fill="#25D366"
                  >
                    <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.149-.149.346-.39.523-.585.176-.195.234-.336.351-.559.117-.226.06-.42-.029-.585-.087-.165-.787-1.89-1.077-2.587-.18-.434-.359-.452-.524-.45-.165 0-.351 0-.541-.001-.19 0-.49.075-.749.345-.255.27-1.001.978-1.001 2.385 0 1.41.964 2.771 1.097 2.971.135.196 1.873 2.86 4.633 4.026 2.357.997 2.84.795 3.354.748.51-.045 1.679-.689 1.916-1.355.232-.667.232-1.236.157-1.355-.074-.121-.301-.196-.601-.346z"/>
                    <path d="M12.012 2c-5.506 0-9.989 4.478-9.989 9.985 0 1.764.461 3.479 1.336 4.985L2 22l5.176-1.34a9.95 9.95 0 0 0 4.836 1.236h.005c5.504 0 9.984-4.479 9.984-9.985.003-2.665-1.036-5.172-2.923-7.06A9.945 9.945 0 0 0 12.012 2zm5.864 14.063c-.659 1.845-3.273 3.385-5.864 3.385-2.196 0-4.213-.852-5.711-2.265l.005.005a8.296 8.296 0 0 1-2.55-5.972c0-4.582 3.732-8.314 8.318-8.314 2.224 0 4.31.866 5.879 2.434a8.286 8.286 0 0 1 2.439 5.882c0 1.756-.531 3.426-1.516 4.845z"/>
                  </svg>
                </span>
                <div>
                  <strong>WhatsApp</strong>
                  <a href="https://wa.me/5541998151590" target="_blank" rel="noopener noreferrer">
                    (41) 99815-1590
                  </a>
                </div>
              </li>
              <li>
                <span className={`${styles.contactIcon} ${styles.emoji}`}>📞</span>
                <div>
                  <strong>Telefone</strong>
                  <a href="tel:+5541998151590">(41) 99815-1590</a>
                </div>
              </li>
              <li>
                <span className={`${styles.contactIcon} ${styles.emoji}`}>🕐</span>
                <div>
                  <strong>Horário</strong>
                  <span>Seg–Sáb: 7h às 18h</span>
                </div>
              </li>
            </ul>

            <div className={styles.decor} aria-hidden="true">🍊🥭🍓🍋🍇</div>
          </div>

          {/* ---- Card do formulário ---- */}
          <div className={styles.formCard}>
            {sent ? (
              <div className={styles.success} role="status">
                <span className={styles.successIcon}>✅</span>
                <p>Pedido enviado!</p>
                <small>Abrindo WhatsApp…</small>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form} noValidate aria-label="Formulário de pedido">

                <h3 className={styles.formTitle}>🛒 Detalhes do pedido</h3>

                {/* Linha: Nome + Telefone */}
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="nome" className={styles.label}>
                      Nome <span>*</span>
                    </label>
                    <input
                      id="nome"
                      name="nome"
                      type="text"
                      className={`${styles.input} ${errors.nome ? styles.inputError : ''}`}
                      placeholder="Seu nome completo"
                      value={fields.nome}
                      onChange={handleChange}
                      autoComplete="name"
                      aria-required="true"
                    />
                    {errors.nome && <span className={styles.errorMsg} role="alert">{errors.nome}</span>}
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="telefone" className={styles.label}>
                      Telefone / WhatsApp <span>*</span>
                    </label>
                    <input
                      id="telefone"
                      name="telefone"
                      type="tel"
                      className={`${styles.input} ${errors.telefone ? styles.inputError : ''}`}
                      placeholder="(41) 99999-9999"
                      value={fields.telefone}
                      onChange={handleTelefone}
                      autoComplete="tel"
                      aria-required="true"
                    />
                    {errors.telefone && <span className={styles.errorMsg} role="alert">{errors.telefone}</span>}
                  </div>
                </div>

                {/* Linha: Endereço + Número */}
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="endereco" className={styles.label}>
                      Endereço <span>*</span>
                    </label>
                    <input
                      id="endereco"
                      name="endereco"
                      type="text"
                      className={`${styles.input} ${errors.endereco ? styles.inputError : ''}`}
                      placeholder="Rua, Avenida, Travessa…"
                      value={fields.endereco}
                      onChange={handleChange}
                      autoComplete="street-address"
                      aria-required="true"
                    />
                    {errors.endereco && <span className={styles.errorMsg} role="alert">{errors.endereco}</span>}
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="numero" className={styles.label}>
                      Número <span>*</span>
                    </label>
                    <input
                      id="numero"
                      name="numero"
                      type="text"
                      className={`${styles.input} ${errors.numero ? styles.inputError : ''}`}
                      placeholder="123, s/n, AP 101…"
                      value={fields.numero}
                      onChange={handleChange}
                      aria-required="true"
                    />
                    {errors.numero && <span className={styles.errorMsg} role="alert">{errors.numero}</span>}
                  </div>
                </div>

                {/* Categoria */}
                <div className={styles.field}>
                  <label htmlFor="categoria" className={styles.label}>
                    Categoria <span>*</span>
                  </label>
                  <select
                    id="categoria"
                    name="categoria"
                    className={`${styles.select} ${errors.categoria ? styles.inputError : ''}`}
                    value={fields.categoria}
                    onChange={handleChange}
                    aria-required="true"
                  >
                    <option value="">Selecione uma categoria…</option>
                    {CATEGORIAS.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.nome} — {cat.preco}
                      </option>
                    ))}
                  </select>
                  {errors.categoria && <span className={styles.errorMsg} role="alert">{errors.categoria}</span>}
                </div>

                {/* Sabor */}
                <div className={styles.field}>
                  <label htmlFor="sabor" className={styles.label}>
                    Sabor <span>*</span>
                  </label>
                  <select
                    id="sabor"
                    name="sabor"
                    className={`${styles.select} ${errors.sabor ? styles.inputError : ''}`}
                    value={fields.sabor}
                    onChange={handleChange}
                    aria-required="true"
                    disabled={!fields.categoria}
                  >
                    <option value="">
                      {fields.categoria ? 'Escolha um sabor…' : 'Selecione uma categoria primeiro'}
                    </option>
                    {getSaboresPorCategoria().map((sabor) => (
                      <option key={sabor} value={sabor}>{sabor}</option>
                    ))}
                  </select>
                  {errors.sabor && <span className={styles.errorMsg} role="alert">{errors.sabor}</span>}
                </div>

                {/* Linha: Quantidade + Açúcar */}
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="quantidade" className={styles.label}>
                      Quantidade (500ml) <span>*</span>
                    </label>
                    <input
                      id="quantidade"
                      name="quantidade"
                      type="number"
                      min="1"
                      max="999"
                      className={`${styles.input} ${errors.quantidade ? styles.inputError : ''}`}
                      placeholder="Ex: 6"
                      value={fields.quantidade}
                      onChange={handleChange}
                      aria-required="true"
                    />
                    {errors.quantidade && <span className={styles.errorMsg} role="alert">{errors.quantidade}</span>}
                  </div>

                  <div className={styles.field}>
                    <span className={styles.label}>
                      Açúcar <span>*</span>
                    </span>
                    <div className={styles.toggleGroup} role="group" aria-label="Preferência de açúcar">
                      {[
                        { value: 'Com açúcar',  emoji: '🍬', label: 'Com açúcar'  },
                        { value: 'Sem açúcar',  emoji: '🌿', label: 'Sem açúcar'  },
                      ].map((opt) => (
                        <label
                          key={opt.value}
                          className={`${styles.toggleOption} ${fields.acucar === opt.value ? styles.toggleActive : ''}`}
                        >
                          <input
                            type="radio"
                            name="acucar"
                            value={opt.value}
                            checked={fields.acucar === opt.value}
                            onChange={handleChange}
                            className={styles.radioHidden}
                          />
                          <span>{opt.emoji}</span>
                          {opt.label}
                        </label>
                      ))}
                    </div>
                    {errors.acucar && <span className={styles.errorMsg} role="alert">{errors.acucar}</span>}
                  </div>
                </div>

                {/* Observações */}
                <div className={styles.field}>
                  <label htmlFor="obs" className={styles.label}>
                    Observações <span className={styles.optional}>(opcional)</span>
                  </label>
                  <textarea
                    id="obs"
                    name="obs"
                    rows={3}
                    className={styles.textarea}
                    placeholder="Ex: entregar no período da tarde, alergias, embalagem especial, ponto de referência…"
                    value={fields.obs}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className={styles.submitBtn}>
                  💬 Enviar pedido pelo WhatsApp
                </button>

                <p className={styles.hint}>
                  Você será redirecionado para o WhatsApp com o pedido já formatado.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}