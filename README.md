# Lista de tarefas (to-do list)

Aplicação web de **lista de tarefas** desenvolvida no contexto da faculdade.

## O que o projeto usa

| Tecnologia   | Uso                          |
| ------------ | ---------------------------- |
| React 19     | Interface e componentes      |
| TypeScript   | Tipagem                      |
| Vite 8       | Dev server, build e preview  |
| Tailwind CSS 4 | Estilos (via `@tailwindcss/vite`) |
| ESLint 9     | Lint do código               |

## Estrutura principal

- `src/App.tsx` — página principal, dados de exemplo (`MOCK_TODOS`) e composição das seções.
- `src/components/TodoForm.tsx` — campo e botão “Adicionar” (layout).
- `src/components/TodoList.tsx` / `TodoItem.tsx` — lista e cartão de cada tarefa.

## Como rodar localmente

Requisitos: **Node.js** (versão LTS recomendada).

```bash
npm install
npm run dev
```

Abra o endereço que o Vite mostrar no terminal (em geral `http://localhost:5173`).

Outros scripts:

- `npm run build` — gera a pasta `dist` para produção.
- `npm run preview` — serve o build localmente.
- `npm run lint` — executa o ESLint.
