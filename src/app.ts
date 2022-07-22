import fastifyEnv from "@fastify/env";
import Fastify from "fastify";

const schema = {
  type: "object",
  required: ["PORT"],
  properties: {
    PORT: {
      type: "number",
      default: 3000,
    },
  },
};

declare module "fastify" {
  interface FastifyInstance {
    config: {
      PORT: number;
    };
  }
}

const options = {
  confKey: "config",
  schema: schema,
  dotenv: true,
  data: process.env,
};

const server = Fastify();

server.register(fastifyEnv, options);

async function main() {
  try {
    await server.ready();
    await server.listen({ port: server.config.PORT, host: "0.0.0.0" });
    console.log("Server ready at http://localhost:" + server.config.PORT);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

main();
