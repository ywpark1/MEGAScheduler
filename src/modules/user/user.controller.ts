import { FastifyReply, FastifyRequest } from "fastify";
import { Controller, DELETE, GET, Inject, POST } from "fastify-decorators";
import { getLogger, Logger, LogLevel } from "../../log/logger";
import { CreateUserInputType } from "./user";
import {
  CreateUserInput,
  createUserResponseSchema,
  retrieveUserListResponseSchema,
  retrieveUserResponseSchema,
} from "./user.schema";
import { UserService } from "./user.service";

export type CreateUserBody = FastifyRequest<{
  Body: CreateUserInputType;
}>;

export type FindUserQuery = FastifyRequest<{
  Params: {
    email: string;
  };
}>;

@Controller({
  route: "/api/users",
})
export default class UserController {
  private logger: Logger = getLogger();
  @Inject(UserService)
  private _userService!: UserService;

  @GET("/", {
    schema: { response: retrieveUserListResponseSchema },
  })
  public async findUsers() {
    const users = await this._userService.findUsers();
    return users;
  }

  @POST("/", {
    schema: { body: CreateUserInput, response: createUserResponseSchema },
  })
  public async createUser(request: CreateUserBody, reply: FastifyReply) {
    const user = await this._userService.createUser(request.body);
    this.logger.message(`Create User: ${user}`, LogLevel.INFO);
    return reply.code(201).send(user);
  }

  @GET("/:email", {
    schema: { response: retrieveUserResponseSchema },
  })
  public async findUserByEmail(request: FindUserQuery, reply: FastifyReply) {
    const email = request.params.email;

    const user = await this._userService.findUserByEmail(email);
    this.logger.message(`Find User email ${email}: ${user}`, LogLevel.INFO);
    if (user) {
      return user;
    }
    reply.code(404).send({ error: `Cannot find the user '${email}'` });
  }

  @DELETE("/:email")
  public async deleteUserByEmail(request: FindUserQuery, reply: FastifyReply) {
    const email = request.params.email;
    const response = await this._userService.deleteUserByEmail(email);
    if (response) {
      this.logger.message(`Delete User email ${email}`, LogLevel.INFO);
      return reply.code(404).send({ error: `Cannot find the user '${email}'` });
    }
    return reply.code(204).send();
  }
}
