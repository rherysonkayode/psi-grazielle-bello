# Grazielle Bello — Psicóloga

Site de [graziellebello.com.br](https://www.graziellebello.com.br).
Next.js 16 + Tailwind CSS 4, site 100% estático (`output: "export"`).

## Rodar localmente

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # gera o site estático na pasta out/
npx serve out   # testa a versão final localmente
```

## Publicação

O build gera a pasta `out/`, que pode ser publicada em qualquer um destes:

**Cloudflare (Workers — arquivos estáticos)**, conforme `wrangler.jsonc`:

| Campo | Valor |
|---|---|
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |
| Variável de ambiente | `NODE_VERSION` = `22` |

Cabeçalhos de segurança e cache: `public/_headers`.

**Vercel**: importe o repositório; a Vercel reconhece o Next.js sozinha. Cabeçalhos de segurança: `vercel.json`.

Nos dois casos, cada `git push` na `main` publica automaticamente.

## Onde editar

| O quê | Arquivo |
|---|---|
| Nome, CRP, telefone, e-mail, Instagram, cidade, domínio | `src/lib/site.js` |
| Perguntas frequentes (seção "Dúvidas" **e** assistente) | `src/lib/faq.js` (`naSecao: false` = só no assistente) |
| Áreas de atuação (TEA/TDAH, luto, pais, escolas, TCC) | `src/components/Atuacao.jsx` |
| Texto "Sobre" | `src/components/Sobre.jsx` |
| Formação e trajetória | `src/components/Formacao.jsx` |
| Cores e fontes | `src/app/globals.css` e `src/app/layout.js` |
| Foto e logo | `public/images/` |
| Imagem de compartilhamento (redes e WhatsApp) | `src/app/opengraph-image.jpg` e `twitter-image.jpg` |

## Estrutura da página

Topo → Sobre → Atuação → Como funciona → Formação e trajetória → Dúvidas → Rodapé (contato),
além do botão do WhatsApp e do assistente de dúvidas fixos no canto. Política de privacidade em `/privacidade`.

## Animações

Todas respeitam a preferência de "reduzir movimento" do sistema e, sem JavaScript, o conteúdo aparece normalmente.

- **Entrada do topo** em CSS puro (aparece sem esperar o JavaScript), com o grifo que se desenha sob "suas emoções".
- **Bolhas de aquário** subindo no topo, no convite do WhatsApp e no rodapé; **peixinhos** da marca nadando.
- **Onda** suave separando o topo do restante da página.
- **Revelação ao rolar** em seções e cartões; a **linha dos passos** e a **linha da trajetória** se desenham.
- Cartões de atuação sobem levemente e o ícone dá um "nadinho" ao passar o mouse.

## Assistente de dúvidas

Funciona só no navegador (nada é enviado). Pedidos de ajuda em crise têm prioridade e mostram o CVV 188.
As palavras-chave só casam no início de uma palavra ("pos" não casa com "posso").
