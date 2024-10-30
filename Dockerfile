# Usa la imagen oficial de Node.js 18 como base
FROM node:18

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /myapp

# Copia los archivos de configuración de TypeScript y las dependencias
COPY package*.json ./
COPY tsconfig.json ./

# Instala las dependencias necesarias
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Compila el código TypeScript a JavaScript
RUN npm run build

# Exponer el puerto en el que se ejecuta la aplicación (ajusta según sea necesario)
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "start"]