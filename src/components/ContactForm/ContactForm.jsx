import { useState } from 'react'
import styles from './ContactForm.module.css'

const WA_NUMBER = '5541996574290'

const SABORES = [
  'Laranja',
  'Maracujá',
  'Abacaxi',
  'Manga',
  'Morango',
  'Uva',
  'Limão',
  'Goiaba',
  'Mistura da casa',
]

const INITIAL_STATE = {
  nome:       '',
  telefone:   '',
  sabor:      '',
  acucar:     '',
  quantidade: '1',
  obs:        '',
}

const INITIAL_ERRORS = {
  nome:       '',
  telefone:   '',
  sabor:      '',
  acucar:     '',
  quantidade: '',
}

export default function ContactForm() {
  const [fields, setFields] = useState(INITIAL_STATE)
  const [errors, setErrors] = useState(INITIAL_ERRORS)
  const [sent,   setSent]   = useState(false)

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
    setFields((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  /* Máscara simples de telefone */
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

    const linhas = [
      `🛒 *NOVO PEDIDO — DasFrutas*`,
      ``,
      `👤 *Nome:* ${fields.nome.trim()}`,
      `📱 *Telefone:* ${fields.telefone.trim()}`,
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
              nosso WhatsApp. Rápido e sem complicação! 🚀
            </p>

            <ul className={styles.contacts}>
              <li>
                <span className={styles.contactIcon}>📱</span>
                <div>
                  <strong>WhatsApp</strong>
                  <a href="https://wa.me/5541996574290" target="_blank" rel="noopener noreferrer">
                    (41) 99657-4290
                  </a>
                </div>
              </li>
              <li>
                <span className={styles.contactIcon}>📞</span>
                <div>
                  <strong>Telefone</strong>
                  <a href="tel:+5541998151590">(41) 99815-1590</a>
                </div>
              </li>
              <li>
                <span className={styles.contactIcon}>🕐</span>
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

                {/* Linha: Sabor + Quantidade */}
                <div className={styles.row}>
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
                    >
                      <option value="">Escolha um sabor…</option>
                      {SABORES.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    {errors.sabor && <span className={styles.errorMsg} role="alert">{errors.sabor}</span>}
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="quantidade" className={styles.label}>
                      Quantidade <span>*</span>
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
                </div>

                {/* Açúcar — toggle visual */}
                <div className={styles.field}>
                  <span className={styles.label}>
                    Açúcar <span>*</span>
                  </span>
                  <div className={styles.toggleGroup} role="group" aria-label="Preferência de açúcar">
                    {[
                      { value: 'Com açúcar',  emoji: '🍬', label: 'Com açúcar'  },
                      { value: 'Sem açúcar',  emoji: '🌿', label: 'Sem açúcar'  },
                      { value: 'Pouco açúcar', emoji: '🍃', label: 'Pouco açúcar' },
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
                    placeholder="Ex: entregar no período da tarde, alergias, embalagem especial…"
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