# Real Estate

Welcome to Real Estate.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Building for Production](#building-for-production)
- [Database Setup and Management](#database-setup-and-management)
- [Technologies Used](#technologies-used)
- [License](#license)

## Introduction

Real Estate

## Features

- Interactive UI built with Next.js
- Easy setup and customization

## Installation

To get started with the project, follow these steps to set it up locally:

1. **Clone the repository:**

   ```bash
   git clone https://jmunr0e@bitbucket.org/jmunro3/alive.git
   cd alive
   ```

2. **Install the required packages:**

   ```bash
   npm install
   ```

## Running the Project

To run the project in development mode:

```bash
npm run dev
```

## Building for Production

To build the project:

```bash
npm run build
```

Then start the optimized build:

```bash
npm run start
```

# Database Setup and Management

This project utilizes [Sequelize](https://sequelize.org/) as an ORM for database management. Follow the instructions below to set up, migrate, and seed the database.

1. **Prerequisites:**
   Ensure you have the necessary environment variables configured for database access.

   ```bash
   cp .env.example .env.local
   ```

2. **Create the database:**
   If the database does not exist yet, run:

   ```bash
   npx sequelize-cli db:create --env production
   ```

3. **Running the migrations:**
   To apply all pending migrations and set up the initial database schema, run:

   ```bash
   npx sequelize-cli db:migrate --env production
   ```

4. **Seeding the database:**
   To populate the database with seed data, use:

   ```bash
   npx sequelize-cli db:seed:all
   ```

## Technologies Used

- [Next.js](https://nextjs.org/)
- [NextUI](https://nextui.org/)
- [NextAuth.js](https://next-auth.js.org/)
- [uploadthing](https://uploadthing.com/)
- [Sequelize](https://sequelize.org/)
- [react-globe.gl](https://github.com/vasturiano/react-globe.gl)
- [Recharts](https://recharts.org/)

## License

Distributed under the MIT License. See `LICENSE` for more information.
