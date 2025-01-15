# Tech Challenge Fase 01 - Gerenciamento financeiro com Bytebank

## Visão Geral do Projeto

Este projeto foi desenvolvido como parte do primeiro Tech Challenge da FIAP para a pós-graduação em Front-end Engeneering. 

Ele apresenta uma interface front-end para o gerenciamento financeiro, priorizando funcionalidades práticas e design responsivo. 

O protótipo das telas está disponível no [Figma](https://www.figma.com/design/ns5TC3X5Xr8V7I3LYKg9KA/Projeto-Financeiro?node-id=97-1179&t=ntJjaMZE4EEKGWST-0).

## Principais Funcionalidades

### **Página Home**
- Apresenta a tela inicial e permite que a pessoa usuária faça o login para entrar na conta. Para fazer Login é necessário usar o e-mail:admin@example.com e a senha:password123

### **Página Inicial**
- Possui um menu de navegação entre as páginas da aplicação;
- Apresenta o saldo da conta e o nome do usuário com base no arquivo de back-end;
- Exibe um extrato com as últimas transações realizadas e permite que o usuário altere o tipo e o valor da transação;
- Oferece uma seção para iniciar novas transações.

### **Guia de estilos**

Para o desenvolvimento do projeto nós seguimos o gui de estilo proposto.

![Paleta de Cores](https://github.com/user-attachments/assets/7bb8d6fd-2243-4f9d-b635-9dd5ce9008a3)

## Instruções para Execução

### **Pré-requisitos**
1. Certifique-se de ter o **Node.js**. As versões usadas neste projeto foram: Node (22.12.0) e npm (10.9.2).
   - É recomendado usar o `nvm` para gerenciar as versões do Node.js.
   - Antes de prosseguir, execute `nvm use` (e, caso necessário, `nvm install` e novamente `nvm use`).

2. Clone o repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Inicialize o ambiente de desenvolvimento:
   - **Frontend**: Execute `npm run dev` e acesse [http://localhost:3000](http://localhost:3000).
   - **Backend** (servidor JSON): Execute `npm run start:json-server` e acesse [http://localhost:5000](http://localhost:5000).

## Tecnologias Aplicadas

 - **[Next.js](https://nextjs.org/):** Meta-framework de React.js para construção de aplicações completas para produção com funcionalidades como SSR e SSG;
- **[TypeScript](https://www.typescriptlang.org/)**: Superset de JavaScript que adiciona tipagem estática, facilitando o desenvolvimento e manutenção de código;
- **[Tailwind CSS](https://tailwindcss.com/):** Framework de utilitários CSS para estilização rápida e eficiente com classes predefinidas;
- **[Context API](https://legacy.reactjs.org/docs/context.html):** Recurso nativo do React para gerenciamento de estado global entre componentes da aplicação.

## Conceitos e Metodologias Aplicadas

- **[Design System](https://www.alura.com.br/artigos/o-que-e-design-system):** Implementação de componentes reutilizáveis e padronização de cores e espaçamentos com o uso do Tailwind CSS.
- **[Hooks Personalizados](https://marcosviniciosneves.medium.com/react-dominando-custom-hooks-e-otimizando-a-reutiliza%C3%A7%C3%A3o-de-l%C3%B3gica-d592ce422fc1):** Desenvolvimento de funções reutilizáveis para encapsular lógica compartilhada entre componentes;
- **[Colocation](https://kentcdodds.com/blog/colocation)**: Organização de diretórios para facilitar a navegação e manutenção do código.

## Outra ferramenta útil

- **[React Icons](https://react-icons.github.io/react-icons/):** Utilizados para adicionar elementos gráficos consistentes e visuais ao projeto.

## Apresentação

Confira o [vídeo de demonstração](#) para ver o projeto em funcionamento.

---

Este documento foi criado para fornecer orientações claras sobre o projeto Bytebank e sua execução.
