import { FastifyInstance } from "fastify";

const userRoutes = async (server: FastifyInstance) => {
  server.get("/", async (request, reply) => {
    return { users: "list of users" };
  });
};
