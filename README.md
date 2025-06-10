# Cron Parser (CLI)

A TypeScript command-line tool that parses a standard cron expression and expands each field (minute, hour, day of month, month, day of week) into its respective execution times.

---

## 🚀 Features

- Parses standard 5-field cron expressions + command.
- Supports:
  - Wildcards (`*`)
  - Lists (`1,2,3`)
  - Ranges (`1-5`)
  - Steps (`*/15`, `1-10/2`)
- Prints the output in a clean, readable table format.
- Follows **OOP**, **SOLID**, and **DRY** principles.
- Fully written in **TypeScript**.
- Includes **unit test coverage** using `Jest`.

---

## 📦 Tech Stack

- Language: TypeScript
- Runtime: Node.js
- Package Manager: npm
- Test Framework: Jest

---

## 🛠 Installation

```bash
git clone https://github.com/OmkarBhosale06/cron-parser.git
cd cron-parser-cli
npm install
