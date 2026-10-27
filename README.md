# Aula 08 — Carousel com Swiper

Adaptado da resolução do professor Wellington:
https://github.com/wellingtoncorreia/galeria-Resolu--o

A página exibe o carrossel de cinco veículos e o carrossel de seis cards de blog,
como na resolução. Ambos possuem setas, paginação clicável, loop e autoplay
com intervalo de 3 segundos. Os cards exibem imagem, categoria, descrição,
data e comentários fornecidos pelo professor.

O visual segue as medidas da resolução: cards de 400 por 400 pixels,
três slides com espaçamento de 80 pixels e carrossel de veículos com metade
da largura da página. O código está em `src/app`, com tipagem inferida.

## Executar

```bash
npm install
npm run dev
```

Abra http://localhost:3000. As imagens externas precisam de internet.

## Verificações

```bash
npm run lint
npx tsc --noEmit
npm run build
```

Para produção, execute `npm run build` e depois `npm start`.

## Arquivos

- `src/app/components/Carousel.tsx`: carrossel de veículos.
- `src/app/components/Card.tsx`: carrossel de cards do professor.
- `src/app/components/card.css`: estilos dos cards.
- `src/app/data/dataCard.ts`: os seis cards da resolução.
- `src/app/data/dataCarousel.ts`: exporta os dados de `slideData.ts`.
- `src/app/page.tsx`: apresenta os dois carrosséis.
