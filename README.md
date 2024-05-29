# Activity Log

This is an simple activity log developed with Next.js. Using this application, you can add and view events.

## Technologies used

 - Typescript
 - Next.js
 - TailwindCSS
 - Prisma ORM
 - SWR

## How to run

 1. Clone the repository to your machine.
 2. Navigate to the project's root directory.
 3. Run `npm install` to install the needed dependencies.
 4. Download and install any relational database (MySQL, PostgreSQL, etc.), then create a database in it. Note down the database URL
 5. Create a `.env` file. Inside it, set the variable `DATABASE_URL` to the database URL you noted in the previous step. Example:
```
DATABASE_URL="postgresql://ActivityLogBackend:ActivityLogBackendPassword@localhost:5432/ActivityLog"
```
6. Run `npx prisma migrate dev --name init` to generate the events table in the database.
7. Run `npm run dev` to run the application. Go to [localhost:3000](localhost:3000) to see the application live.

## Adding new events to test the application

Using an HTTP tool like [curl](https://curl.se/) or [Postman](https://www.postman.com/), to add a new event, send an HTTP POST request to localhost:3000/events with the body containing the event details in JSON format. These are the required fields (all of them are strings):
 - id
 - actorId
 - actorName
 - actorEmail
 - group
 - actionId
 - actionName
 - targetId
 - targetName
 - location
 - redirect
 - description
 - xRequestId