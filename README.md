# TP2 — Application Node.js dockerisée

Petit serveur web Node.js qui affiche une page HTML. L'objectif du TP est de dockeriser l'application et de publier l'image sur Docker Hub.

---

## Description

L'application utilise Express.js pour servir une page d'accueil sur le port **3000**. Elle inclut aussi une route `/health` qui retourne un JSON pour vérifier que le serveur fonctionne.

---

## Construire l'image

```bash
docker build -t tp2-nodejs .
```

---

## Lancer le conteneur

```bash
docker run -d -p 3000:3000 --name tp2-app tp2-nodejs
```

L'application sera accessible à l'adresse : [http://localhost:3000](http://localhost:3000)

---

## Port utilisé

| Port conteneur | Port hôte |
|---------------|-----------|
| 3000          | 3000      |

---

## Récupérer l'image depuis Docker Hub

```bash
docker pull domlemay/tp2-nodejs
docker run -d -p 3000:3000 domlemay/tp2-nodejs
```

---

## Liens de remise

- **Dépôt GitHub :** https://github.com/domlemay/tp2-docker-nodejs
- **Image Docker Hub :** https://hub.docker.com/r/domlemay/tp2-nodejs
