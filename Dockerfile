# Étape de base
FROM node:18

# Créer dossier app
WORKDIR /app

# Copier fichiers
COPY app/ .

# Installer les dépendances
RUN npm init -y && npm install express

# Exposer le port
EXPOSE 8080

# Lancer le serveur
CMD ["node", "server.js"]
