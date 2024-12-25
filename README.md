This is an Express.js project.

## Getting Started

First, run the development server:

```bash
npm run start
# or
yarn start
```

Open [http://localhost:5000](http://localhost:5000) with your browser to see the result.

You can start editing the page by modifying `src/app.ts`.

## Configuration Database

This project uses Prisma as an ORM with MySQL as the database.

Database schema:

```bash
create table Task (
    id         varchar(255) not null primary key,
    title      text         not null,
    color      text         not null,
    status     tinyint(1)   not null,
    timestamps datetime     not null
);
```

To create the database schema, run the following command:

```bash
npx prisma migrate dev
```

To generate the Prisma client, run the following command:

```bash
npx prisma generate
```

To seed the database, run the following command:

```bash
npx prisma db seed
```

## Set Environment Variables

Express.js uses the `.env.local` file to inject environment variables into the app.

```bash
# .env.local
SERVER_PORT=port
MYSQL_DATABASE_URL=mysql://admin:password@example:3306/defaultdb
MYSQL_DATABASE_NAME=defaultdb
MYSQL_DATABASE_HOST=example
MYSQL_DATABASE_PORT=3306
MYSQL_DATABASE_USER=admin
MYSQL_DATABASE_PASSWORD=password
```
