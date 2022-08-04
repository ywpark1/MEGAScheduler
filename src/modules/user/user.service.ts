import { Service } from "fastify-decorators";
import { hashPassword } from "../../utils/hash";
import prisma from "../../utils/prisma";
import { CreateUserInputType } from "./user";

@Service()
export class UserService {
  public async createUser(newUser: CreateUserInputType) {
    const { password, ...rest } = newUser;

    const { hash, salt } = hashPassword(password);

    const user = await prisma.user.create({
      data: { ...rest, salt, password: hash },
    });

    return user;
  }

  public async findUsers() {
    return prisma.user.findMany({
      select: {
        email: true,
        phoneNumber: true,
        kakaoID: true,
        isBlacklisted: true,
        role: true,
        createdAt: true,
      },
    });
  }

  public async findUserByEmail(email: string) {
    return await prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  public async deleteUserByEmail(email: string) {
    try {
      return await prisma.user.delete({
        where: {
          email,
        },
      });
    } catch (error) {
      console.log(`Delete user ${email} failed - email does not exist`);

      return error;
    }
  }
}
