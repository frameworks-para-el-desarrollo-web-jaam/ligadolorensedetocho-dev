# Etapa 1: Construcción (Build)

FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install 

COPY . .

RUN npm run build 


# Etapa 2: Servidor de Producción (Nginx)

FROM nginx:stable-alpine 

#Copiamos los archivosjcompilados desde la etapa 'build'

# Si usas Vite es 'dist', si usas CRA es 'build'

COPY --from=build /app/dist /usr/share/nginx/html

# Copiamos una configuración personalizafa de Nginx si es necesario

# COPY nginx.conf /etc/nginx/config.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]