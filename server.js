const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>TP2 - Application Docker</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          margin: 0;
          background-color: #1a1a2e;
          color: #eaeaea;
        }
        .card {
          background-color: #16213e;
          border-radius: 12px;
          padding: 40px 60px;
          text-align: center;
          box-shadow: 0 4px 20px rgba(0,0,0,0.4);
        }
        h1 { color: #0f9b8e; margin-bottom: 10px; }
        p { color: #a8a8b3; }
        .badge {
          display: inline-block;
          background: #0f9b8e;
          color: white;
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 14px;
          margin-top: 20px;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>TP2 — Application Node.js</h1>
        <p>Application dockerisée qui tourne sur le port <strong>${PORT}</strong></p>
        <p>Serveur démarré avec succès !</p>
        <span class="badge">Docker + Node.js</span>
      </div>
    </body>
    </html>
  `);
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', port: PORT });
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
