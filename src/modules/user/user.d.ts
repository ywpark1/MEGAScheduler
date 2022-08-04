import { Static } from "@sinclair/typebox";
import { CreateUserInput } from "./user.schema";

type CreateUserInputType = Static<typeof CreateUserInput>;
