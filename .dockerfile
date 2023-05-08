# Crea una imagen basada en Node
FROM node:latest

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia los archivos de package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instalando json-server
RUN npm install -g json-server

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de los archivos al directorio de trabajo
COPY . /app

# Expone el puerto 3000 for inventory app
EXPOSE 3000

# Expone el puerto 8000 for Json server data
EXPOSE 8000


# Inicia json-server y la aplicacion
CMD npm start