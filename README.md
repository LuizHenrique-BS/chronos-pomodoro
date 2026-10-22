# ⏳ Chronos Pomodoro

<div align="center">
  <p align="center">
    <strong>Uma aplicação web moderna para gestão de tempo e produtividade baseada na Técnica Pomodoro.</strong>
  </p>

  <p align="center">
    <a href="https://chronos-pomodoro-bay.vercel.app/" target="_blank">
      <img src="https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel" alt="Deploy na Vercel" />
    </a>
    <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 19" />
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  </p>

  <p align="center">
    🌐 <strong>Acesse o app online:</strong> <a href="https://chronos-pomodoro-bay.vercel.app/">https://chronos-pomodoro-bay.vercel.app/</a>
  </p>
</div>

---

## 📌 Sobre o Projeto

O **Chronos Pomodoro** foi desenvolvido para ajudar profissionais, estudantes e criadores a maximizarem seu foco e gerenciarem melhor o tempo de trabalho e descanso diário.

Inspirado na clássica **Técnica Pomodoro** concebida por _Francesco Cirillo_, o aplicativo organiza a rotina em blocos de foco intercalados por intervalos controlados. O diferencial do Chronos está na sua execução refinada: interface minimalista, contagem precisa sem desaceleração em segundo plano via **Web Workers**, histórico completo de atividades e total liberdade para customização dos tempos.

---

## ✨ Principais Funcionalidades

- ⏱️ **Cronômetro Preciso com Web Worker**: O timer roda em segundo plano através de um Web Worker dedicado (`TimerWorkerManager`), impedindo que o navegador atrase a contagem ou congele o relógio quando você muda de aba ou minimiza a janela.
- 🔁 **Ciclos Inteligentes em Sequência (1 a 8)**:
  - **Ciclos ímpares**: Foco total no trabalho (`workTime`).
  - **Ciclos pares**: Descansos curtos de recuperação (`shortBreakTime`).
  - **Ciclo 8**: Descanso longo merecido (`longBreakTime`) para reiniciar o ciclo restaurado.
- 🟡🟢🔵 **Indicadores Visuais de Ciclos**: Marcadores coloridos que mostram exatamente qual etapa está em andamento e quantas restam para o descanso longo.
- 🔔 **Alertas Sonoros**: Notificação sonora suave emitida no momento exato em que um ciclo se encerra.
- 🏷️ **Título Dinâmico no Navegador**: Acompanhe os minutos e segundos restantes diretamente na aba (`MM:SS - Chronos Pomodoro`).
- 📊 **Histórico Completo de Tarefas**:
  - Registro de início, duração, tipo de ciclo e desfecho (concluído ou interrompido).
  - Tabela responsiva com ordenação interativa por colunas (nome, data, status).
  - Opção para exclusão com diálogo de confirmação.
- ⚙️ **Configurações Personalizáveis**:
  - Ajuste os tempos de foco, descanso curto e descanso longo de acordo com seu ritmo pessoal.
- 💾 **Persistência Local Automática**: Todas as tarefas concluídas, configurações de tempo e ciclos atuais são mantidos no `localStorage` do navegador.
- 📖 **Página Educativa "Sobre a Técnica"**: Seção detalhando a metodologia Pomodoro tradicional e as vantagens do fluxo do Chronos.
- 🎨 **Interface Moderna e Acessível**: Tema escuro agradável aos olhos, tipografia legível, mensagens toast informativas e navegação fluida com restauração automática de rolagem ao topo.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído com ferramentas de ponta do ecossistema front-end moderno:

| Tecnologia                                                                              | Descrição                                                                                                     |
| :-------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------ |
| **[React 19](https://react.dev/)**                                                      | Biblioteca para interfaces reativas declarativas com as novidades da versão 19.                               |
| **[React Compiler](https://react.dev/learn/react-compiler)**                            | Compilador oficial para otimização automática de memoização sem boilerplates de `useMemo` / `useCallback`.    |
| **[TypeScript](https://www.typescriptlang.org/)**                                       | Segurança e previsibilidade com tipagem estática rigorosa para estados, ações e modelos de dados.             |
| **[Vite](https://vite.dev/)**                                                           | Bundler e ambiente de desenvolvimento ultrarrápido com Hot Module Replacement (HMR).                          |
| **[React Router 7](https://reactrouter.com/)**                                          | Gerenciamento de rotas do lado do cliente com arquitetura moderna de componentes.                             |
| **[Web Workers API](https://developer.mozilla.org/pt-BR/docs/Web/API/Web_Workers_API)** | Execução assíncrona do timer fora da UI thread principal, garantindo precisão cronométrica imune a throttles. |
| **[Lucide React](https://lucide.dev/)**                                                 | Pacote de ícones minimalistas, leves e customizáveis.                                                         |
| **[date-fns](https://date-fns.org/)**                                                   | Biblioteca moderna e imutável para tratamento, cálculo e formatação de datas.                                 |
| **[React-Toastify](https://fkhadra.github.io/react-toastify/)**                         | Feedbacks instantâneos e notificações elegantes de interface.                                                 |
| **CSS Modules**                                                                         | Escopo local de estilos CSS, eliminando conflitos de classes e mantendo a leveza do CSS nativo.               |
| **[Vercel](https://vercel.com/)**                                                       | Plataforma de hospedagem e Continuous Deployment com roteamento para Single Page Applications (SPA).          |

---

## 📂 Arquitetura de Pastas

```text
chronos-pomodoro/
├── public/                  # Arquivos estáticos
├── src/
│   ├── adapters/            # Adaptadores externos (ex.: toast de feedback)
│   ├── assets/              # Mídias e efeitos sonoros (beep de notificação)
│   ├── components/          # Componentes visuais reutilizáveis (CountDown, Cycles, MainForm, etc.)
│   ├── contexts/            # Context API e Reducers (TaskContext, actions, tipagens de estado)
│   ├── dictionary/          # Dicionários de termos, rótulos e rotas do app
│   ├── models/              # Modelos e definições de tipos TypeScript (TaskModel, TaskStateModel)
│   ├── pages/               # Páginas da aplicação (Home, History, Settings, AboutPomodoro, NotFound)
│   ├── routers/             # Configuração central de rotas (MainRouter)
│   ├── styles/              # Variáveis globais de tema e reset CSS
│   ├── templates/           # Layouts compartilhados (MainTemplate)
│   ├── utils/               # Funções utilitárias puras (cálculo de ciclo, formatação de tempo, ordenação)
│   └── workers/             # Timer assíncrono em Web Worker e gerenciador TimerWorkerManager
├── index.html               # Entry point HTML
├── package.json             # Dependências e scripts do projeto
├── tsconfig.json            # Configuração do TypeScript
├── vercel.json              # Configurações de rewrites para deploy SPA na Vercel
└── vite.config.ts           # Configuração do Vite e React Compiler
```

---

## 🚀 Como Executar o Projeto Localmente

### Pré-requisitos

Certifique-se de possuir o [Node.js](https://nodejs.org/) instalado em seu sistema (versão 18 ou superior recomendada) e um gerenciador de pacotes (`npm`, `pnpm` ou `yarn`).

### Passo a passo

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/LuizHenrique-BS/chronos-pomodoro
   cd chronos-pomodoro
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**

   ```bash
   npm run dev
   ```

4. **Abra no seu navegador:**
   O terminal exibirá o endereço local (geralmente `http://localhost:5173/`). Basta abrir e testar!

---

## 📜 Scripts Disponíveis

No diretório do projeto, você pode executar:

| Comando           | Descrição                                                                               |
| :---------------- | :-------------------------------------------------------------------------------------- |
| `npm run dev`     | Inicia o servidor de desenvolvimento do Vite com HMR.                                   |
| `npm run build`   | Executa a checagem de tipos com TypeScript e gera o build de produção na pasta `dist/`. |
| `npm run preview` | Executa localmente o servidor de visualização dos arquivos gerados pelo build.          |
| `npm run lint`    | Roda o ESLint para verificar padrões e qualidade de código.                             |

---

## 🌐 Deploy Online

A versão estável mais recente da aplicação está publicada e pronta para uso em:
👉 **[chronos-pomodoro-bay.vercel.app](https://chronos-pomodoro-bay.vercel.app/)**

---

## 📄 Licença

Este projeto é desenvolvido para fins de estudo e aprimoramento pessoal. Sinta-se à vontade para utilizá-lo como inspiração ou referência em seus projetos!
