# Usa la imagen oficial de Node como base
FROM node:14

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia los archivos del proyecto al contenedor
COPY . .

# Instala las dependencias
RUN npm install

# Expone el puerto 4200, que es el puerto predeterminado utilizado por ng serve
EXPOSE 4200

# Comando por defecto para ejecutar la aplicación cuando se inicia el contenedor
CMD ["npm", "start"]
