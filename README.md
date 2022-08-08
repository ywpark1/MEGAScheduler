# MEGAScheduler

This project is built with Node.js(Typescript) and Fastify framework.

### Steps to set up API server

1. Follow [Google Workspace](https://developers.google.com/workspace/guides/create-project) to retrieve **credentials.json** file with service account
2. Put this file to _src/module/calendar_ directory
3. Add .env file to the root directory
   - This file should contains two variables:
     - DATABASE_URL - follow this standards [link](https://www.prisma.io/docs/reference/database-reference/connection-urls)
     - CALENDAR_ID: ID of the calendar. This can be found in Google Calendar.
4. Run 'yarn dev' for running server. [http://localhost:3000](http://localhost:3000)

### The Appointment booking process

1. Create user(/api/users)
2. Create appointments with created user email(/api/appointments)
3. Create report(/api/reports)

### TODO List

- Add unit tests
- Add login functionalities
- Add Frontend project which connects to this server
