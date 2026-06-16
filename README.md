# 🍊 DasFrutas — Site Oficial

> **Sabor que vem da natureza**  
> Site completo em React + Vite + CSS Modules

---

## 🚀 Instalação e execução

```bash
# 1. Instale as dependências
npm install

# 2. Inicie o servidor de desenvolvimento
npm run dev

# 3. Acesse no navegador
http://localhost:5173
```

### Build para produção
```bash
npm run build
npm run preview   # prévia do build
```

---

## 📁 Estrutura do projeto

```
dasfrutas/
├── public/
│   ├── logo.webp          ← Substitua pelo logotipo real
│   ├── imghero1.webp      ← Slide 1 do carrossel
│   ├── imghero2.webp      ← Slide 2 do carrossel
│   ├── imghero3.webp      ← Slide 3 do carrossel
│   ├── imghero4.webp      ← Slide 4 do carrossel
│   └── about.webp         ← Imagem da seção Sobre
│
├── src/
│   ├── components/
│   │   ├── Header/           Header + menu hambúrguer
│   │   ├── HeroCarousel/     Carrossel Swiper com 4 slides
│   │   ├── About/            Seção institucional
│   │   ├── Differentials/    Cards de selos/diferenciais
│   │   ├── ContactForm/      Formulário → WhatsApp
│   │   ├── WhatsAppButton/   Botão flutuante
│   │   └── Footer/           Rodapé 3 colunas
│   │
│   ├── pages/
│   │   └── HomePage.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css             Reset global + variáveis CSS
│
├── index.html
├── vite.config.js
└── package.json
```

---

## 🖼️ Substituindo as imagens

Coloque as imagens reais na pasta `public/` com os nomes exatos:

| Arquivo | Uso | Tamanho recomendado |
|---|---|---|
| `logo.webp` | Logotipo no header e footer | 280×112px |
| `imghero1.webp` | Slide 1 do carrossel | 1920×1080px |
| `imghero2.webp` | Slide 2 do carrossel | 1920×1080px |
| `imghero3.webp` | Slide 3 do carrossel | 1920×1080px |
| `imghero4.webp` | Slide 4 do carrossel | 1920×1080px |
| `about.webp` | Seção "Sobre" | 960×960px |

> Os arquivos atuais são **SVG placeholders** — apenas para visualização durante o desenvolvimento.

---

## 📞 Contatos configurados

- WhatsApp principal: `(41) 99657-4290` → `https://wa.me/5541996574290`  
- Telefone secundário: `(41) 99815-1590`

Para alterar, edite os seguintes arquivos:
- `src/components/Header/Header.jsx`
- `src/components/ContactForm/ContactForm.jsx`
- `src/components/WhatsAppButton/WhatsAppButton.jsx`
- `src/components/Footer/Footer.jsx`

---

## 🎨 Paleta de cores (CSS Variables)

Definidas em `src/index.css`:

```css
--color-green:        #2D6A1F   /* Verde principal */
--color-green-light:  #4A9E32   /* Verde hover */
--color-orange:       #F97316   /* Laranja destaque */
--color-yellow:       #FCD34D   /* Amarelo manga */
--color-red:          #DC2626   /* Vermelho morango */
--color-cream:        #FEFCE8   /* Fundo suave */
```

---

## 📦 Dependências

| Pacote | Versão | Uso |
|---|---|---|
| react | ^18.2.0 | Framework UI |
| react-dom | ^18.2.0 | Renderização |
| swiper | ^11.0.5 | Carrossel do Hero |
| vite | ^5.0.8 | Build tool |
| @vitejs/plugin-react | ^4.2.1 | Plugin React para Vite |

---

## ✅ Funcionalidades

- [x] Header fixo com menu hambúrguer animado (mobile first)
- [x] Overlay escuro ao abrir menu mobile
- [x] Fechar menu ao clicar em link ou ESC
- [x] Carrossel Hero com Swiper (autoplay 5s, setas, dots)
- [x] Efeito Ken Burns nas imagens do carrossel
- [x] Seção Sobre com grid responsivo
- [x] 8 cards de diferenciais em grid adaptativo
- [x] Formulário de pedido com validação
- [x] Redirecionamento para WhatsApp com mensagem pré-formatada
- [x] Botão flutuante WhatsApp com tooltip e animação pulse
- [x] Footer 3 colunas (mobile centralizado, desktop em grid)
- [x] CSS Modules em todos os componentes
- [x] Variáveis CSS globais para theming fácil
- [x] Responsivo: 320px → 1200px+
- [x] Acessibilidade: aria-labels, roles, reduced motion

---

*DasFrutas © 2025 — Sabor que vem da natureza* 🍊
