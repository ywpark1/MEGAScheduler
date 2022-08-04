import fastifyEnv from "@fastify/env";
import { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";
import Fastify from "fastify";
import { bootstrap } from "fastify-decorators";
import AppointmentController from "./modules/appointment/appointment.controller";

import UserController from "./modules/user/user.controller";

declare module "fastify" {
  interface FastifyInstance {
    config: {
      PORT: number;
      CALENDAR_ID: string;
    };
  }
}

function buildServer() {
  const schema = {
    type: "object",
    required: ["PORT", "CALENDAR_ID"],
    properties: {
      PORT: {
        type: "number",
        default: 3000,
      },
      CALENDAR_ID: {
        type: "string",
        default: "primary",
      },
    },
  };

  const options = {
    confKey: "config",
    schema: schema,
    dotenv: true,
    data: process.env,
  };

  const server = Fastify().withTypeProvider<TypeBoxTypeProvider>();

  server.register(fastifyEnv, options);

  // Register handlers auto-bootstrap
  server.register(bootstrap, {
    controllers: [UserController, AppointmentController],
  });

  return server;
}

export default buildServer;
