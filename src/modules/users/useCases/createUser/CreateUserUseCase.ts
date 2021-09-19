import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const isEmailUsed = this.usersRepository.findByEmail(email);

    if (isEmailUsed) {
      throw new Error("email already taken.");
    }

    return this.usersRepository.create({ name, email });
  }
}

export { CreateUserUseCase };
