import { Type } from "@sinclair/typebox";

export const UserCore = Type.Object({
  email: Type.String({ format: "email" }),
  phoneNumber: Type.String(),
  kakaoID: Type.Optional(Type.String()),
});

export const CreateUserInput = Type.Intersect([
  UserCore,
  Type.Object({
    password: Type.String(),
  }),
]);

export const createUserResponseSchema = {
  201: UserCore,
};

export const retrieveUserResponseSchema = {
  200: UserCore,
};

export const retrieveUserListResponseSchema = {
  200: Type.Array(UserCore),
};
