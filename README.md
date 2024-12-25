This is an Express.js project.

## API Endpoints

- GET /api/v1/tasks

Response:

```json
{
  "data": [
    {
      "id": "1",
      "title": "Task 1",
      "color": "#FF0000",
      "status": 0,
      "timestamps": "2021-09-01T00:00:00.000Z"
    },
    {
      "id": "2",
      "title": "Task 2",
      "color": "#00FF00",
      "status": 1,
      "timestamps": "2021-09-01T00:00:00.000Z"
    }
  ]
}
```

---

- GET /api/v1/tasks/:id

Request params:

```json
{
  "id": "1"
}
```

Response:

```json
{
  "data": {
    "id": "1",
    "title": "Task 1",
    "color": "#FF0000",
    "status": 0,
    "timestamps": "2021-09-01T00:00:00.000Z"
  }
}
```

---

- POST /api/v1/tasks

Request body:

```json
{
  "title": "Task 1",
  "color": "#FF0000",
  "status": 0
}
```

Response:

```json
{
  "data": {
    "id": "1",
    "title": "Task 1",
    "color": "#FF0000",
    "status": 0,
    "timestamps": "2021-09-01T00:00:00.000Z"
  }
}
```

---

- PUT /api/v1/tasks/:id

Request params:

```json
{
  "id": "1"
}
```

Request body:

```json
{
  "title": "Task 1",
  "color": "#FF0000",
  "status": 1
}
```

Response:

```json
{
  "data": {
    "id": "1",
    "title": "Task 1",
    "color": "#FF0000",
    "status": 1,
    "timestamps": "2021-09-01T00:00:00.000Z"
  }
}
```

---

- DELETE /api/v1/tasks/:id

Request params:

```json
{
  "id": "1"
}
```

Response:

```json
{
  "data": {
    "id": "1",
    "title": "Task 1",
    "color": "#FF0000",
    "status": 0,
    "timestamps": "2021-09-01T00:00:00.000Z"
  }
}
```

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

Express.js uses the `.env` file to inject environment variables into the app.

```bash
# .env
SERVER_PORT=port
MYSQL_DATABASE_URL=mysql://admin:password@example:3306/defaultdb
MYSQL_DATABASE_NAME=defaultdb
MYSQL_DATABASE_HOST=example
MYSQL_DATABASE_PORT=3306
MYSQL_DATABASE_USER=admin
MYSQL_DATABASE_PASSWORD=password
```

## Project Structure

The project structure is as follows:

```bash
.
├── src
│   ├── app.ts // express app
│   ├── controllers
│   │   └── task.controller.ts
│   ├── routes
│   │   └── task.routes.ts
│   └── services
│       └── task.service.ts
├── prisma
│   ├── migrations
│   ├── schema.prisma
│   └── seed.ts
├── .env
├── .env.example
├── .gitignore
├── .prettierrc
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.json
├── vercel.json
└── yarn.lock
```
