import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const isUser = this.usersRepository.findById(user_id);

    if (!isUser) {
      throw new Error("user not found.");
    }

    isUser.updated_at = new Date();
    return this.usersRepository.turnAdmin(isUser);
  }
}

export { TurnUserAdminUseCase };
