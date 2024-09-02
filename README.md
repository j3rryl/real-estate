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
   git clone https://github.com/j3rryl/real-estate.git
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

This project utilizes [Drizzle ORM](https://orm.drizzle.team/) as an ORM for database management. Follow the instructions below to set up, migrate, and seed the database.

1. **Prerequisites:**  
   Ensure you have the necessary environment variables configured for database access.

   ```bash
   cp .env.example .env.local
   ```

2. **Create the database:**  
   To create the datatbase if not present, run:

   ```bash
   npm run db:create
   ```

3. **Running the migrations:**  
   To apply all pending migrations and set up the initial database schema, run:

   ```bash
   npx drizzle-kit migrate
   ```

   If the migrations are not present, run the following first:

   ```bash
   npx drizzle-kit generate
   ```

4. **Seed the database:**  
   To populate the database with seed data, run:

   ```bash
   npm run db:seed
   ```

## Technologies Used

- [Next.js](https://nextjs.org/)
- [NextUI](https://nextui.org/)
- [NextAuth.js](https://next-auth.js.org/)
- [uploadthing](https://uploadthing.com/)
- [Drizzle ORM](https://orm.drizzle.team/)

## License

Distributed under the MIT License. See `LICENSE` for more information.
