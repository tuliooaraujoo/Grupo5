# Aplicação de Gerenciamento Bytebank - Tech Challenge Fase 01

## Visão Geral do Projeto

Este projeto foi desenvolvido como parte do primeiro Tech Challenge da FIAP. Ele apresenta uma interface frontend para o gerenciamento financeiro, priorizando funcionalidades práticas e design responsivo. O protótipo das telas está disponível no [Figma](https://www.figma.com/design/ns5TC3X5Xr8V7I3LYKg9KA/Projeto-Financeiro?node-id=97-1179&t=ntJjaMZE4EEKGWST-0).

## Principais Funcionalidades

### **Página Inicial**
- Apresenta o saldo da conta corrente de forma clara e objetiva.
- Exibe um extrato com as últimas transações realizadas.
- Oferece uma seção para iniciar novas transações.

### **Transações**
- Listagem completa das transações realizadas.
- Permite visualizar os detalhes, editar ou excluir qualquer transação.


### **Cadastro de Transação**
- Modal ou página específica para registrar uma nova transação.
- Formulário com campos como:
  - Tipo de transação (depósito, transferência, etc.).
  - Valor.
  - Data da operação.

### **Edição de Transação**
- Modal ou página para atualização dos dados de uma transação existente.

## Estrutura e Tecnologias do Projeto

A arquitetura do projeto foi desenvolvida para otimizar a experiência do usuário e facilitar a manutenção do código:

- **Renderização Estática (SSG)**: Utilizada para páginas com conteúdo fixo.
- **Renderização no Servidor (SSR)**: Implementada em páginas dinâmicas, como a Dashboard.
- **Renderização no Cliente (CSR)**: Para os componentes e interações dinâmicas.

## Guia de Estilo

O design segue princípios consistentes baseados no **Material Design**, com ajustes feitos pela equipe para melhor adaptação às necessidades do projeto.

### **Paleta de Cores**

![Paleta de Cores](https://github.com/user-attachments/assets/7bb8d6fd-2243-4f9d-b635-9dd5ce9008a3)

## Ferramentas e Tecnologias

### **Framework Utilizado**
- **Next.js**: Framework avançado para renderização híbrida e criação de aplicações otimizadas.

### **Estilização**
- Estilos gerenciados com CSS-in-JS utilizando **Tailwind** ou equivalente.

### **Design System**
- Baseado no protótipo do Figma, com definições de temas, fontes e componentes reutilizáveis.

### **Ícones**
- **React Icons**: Utilizados para adicionar elementos gráficos consistentes e visuais ao projeto.

## Instruções para Execução

### **Pré-requisitos**
1. Certifique-se de ter o **Node.js** na versão LTS (20.x) instalado.
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
   - **Backend** (servidor JSON): Execute `npm run dev:server` e acesse [http://localhost:3006](http://localhost:3006).

## Conceitos e Metodologias Aplicadas

- **Design System**: Implementação de componentes reutilizáveis e padronização de temas e espaçamentos.
- **MVC (Model-View-Controller)**: Organização do código em camadas para melhor separação de responsabilidades.
- **Atomic Design**: Abordagem modular para criação e organização de componentes.
- **Colocation**: Organização de diretórios para facilitar a navegação e manutenção do código.

## Apresentação

Confira o [vídeo de demonstração](#) para ver o projeto em funcionamento.

---

Este documento foi criado para fornecer orientações claras sobre o projeto Bytebank e sua execução.
