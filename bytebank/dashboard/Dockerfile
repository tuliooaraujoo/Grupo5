# Usando a imagem oficial do Node.js
FROM node:18-alpine

# Definir o diretório de trabalho dentro do container
WORKDIR /app

# Copiar os arquivos de dependências para o container
COPY package.json package-lock.json ./

# Instalar as dependências do projeto
RUN npm install

# Copiar todo o conteúdo do projeto para o container
COPY . .

# Construir a aplicação Next.js para produção
RUN npm run build

# Expor a porta que o Next.js vai rodar
EXPOSE 3002

# Rodar o Next.js em modo de produção
CMD ["npm", "run", "start"]