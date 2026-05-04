# 👻 Herobrine Minecraft Bot

A lightweight, modular Minecraft bot built using mineflayer, designed for Aternos servers and low-resource environments. This bot behaves like a creepy Herobrine-style entity with defensive combat, chat interaction, and psychological “jumpscare” mechanics.

---

## 🚀 Features

* 🧠 Modular system (clean and scalable)
* ⚔️ Defensive combat (attacks only when hit)
* 🧭 Command-based follow system
* 🕺 Anti-AFK movement (prevents kicks)
* 🗣️ Creepy chat responses
* 👻 Random jumpscare behavior
* 🔁 Auto reconnect + respawn
* ⚡ Optimized for low CPU & RAM (Render compatible)

---

## 📁 Project Structure

```
bot/
├── index.js
├── config.js
├── package.json
├── core/
├── systems/
└── utils/
```

---

## ⚙️ Setup

### 1. Install dependencies

```
npm install
```

### 2. Configure bot

Edit `config.js`:

* Server IP
* Port
* Username

---

### 3. Start the bot

```
npm start
```

---

## 💬 Commands

* `!follow <player>` → Bot follows player
* `!stop` → Stops all actions

---

## ⚠️ Notes

* Designed for **cracked (offline-mode) servers**
* Works best on **Aternos**
* Use `version: false` for automatic version detection
* Free hosting (Render) may sleep → reconnect handles this

---

## ☁️ Deployment (Render)

* Build Command: `npm install`
* Start Command: `node index.js`
* Enable auto-restart

---

## 🧠 Behavior

This bot is designed to act like a mysterious entity:

* Stays mostly quiet
* Moves occasionally
* Reacts unpredictably
* Interacts in a creepy, minimal way

---

## 📜 License

MIT License

---

## 👻 Disclaimer

This bot is meant for fun and experimentation.
Do not abuse or use it to harass other players.
