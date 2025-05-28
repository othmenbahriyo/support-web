# Dockerfile simple pour servir le contenu web Flutter

FROM nginx:alpine

# Copier tous les fichiers web depuis le répertoire courant
COPY . /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Commande par défaut
CMD ["nginx", "-g", "daemon off;"]