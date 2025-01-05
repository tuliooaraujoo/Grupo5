# Tech Challenge - Fase 01

## Descrição do Projeto

Este projeto é um frontend para uma aplicação de gerenciamento financeiro desenvolvido utilizando **Next.js** e um **Design System** consistente. A interface permite aos usuários gerenciar transações financeiras, como adicionar, editar e excluir transações, além de visualizar saldos e extratos.

## Funcionalidades

### Home Page

- Exibe informações sobre o saldo da conta corrente.
- Mostra um extrato das últimas transações.
- Inclui uma seção para iniciar uma nova transação.

### Listagem de Transações

- Lista todas as transações realizadas.
- Opções para visualizar detalhes, editar ou deletar cada transação.

### Adicionar Nova Transação

- Modal ou página para adicionar uma nova transação.
- Formulário com os campos:
  - Tipo de transação (depósito, transferência, etc.).
  - Valor.
  - Data.

### Editar Transação

- Modal ou página para editar informações de uma transação existente.

## Tecnologias Utilizadas

### Framework

- **Next.js**: Utilizado para renderização do lado do servidor (SSR) e geração de sites estáticos (SSG).

### Estilos

- **CSS-in-JS** ou outras soluções suportadas pelo Next.js.

### Design System

- Segue o design fornecido no [Figma](https://www.figma.com/design/ns5TC3X5Xr8V7I3LYKg9KA/Projeto-Financeiro?node-id=503-4264).
- Definição de cores, fontes, espaçamentos e componentes reutilizáveis.

## Requisitos para Execução

1. Certifique-se de ter o **Node.js** e o **npm** instalados em sua máquina.
2. Clone o repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
5. Acesse a aplicação em [http://localhost:3000](http://localhost:3000).
