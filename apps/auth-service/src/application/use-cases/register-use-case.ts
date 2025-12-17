import { UserRepository } from '../../domain/repositories/user.repository.interface';
import { User } from '../../domain/entities/user.entity';
import { randomUUID } from 'crypto';

export class RegisterUserUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly hashService: { hash(password: string): Promise<string> },
    private readonly events: { userCreated(user: User): Promise<void> },
  ) {}

  async execute(input: { email: string; password: string }) {
    const exists = await this.userRepository.findByEmail(input.email);
    if (exists) {
      throw new Error('User already exists');
    }

    const passwordHash = await this.hashService.hash(input.password);

    const user = new User(randomUUID(), input.email, passwordHash, new Date());

    await this.userRepository.save(user);
    await this.events.userCreated(user);

    return {
      id: user.id,
      email: user.email,
    };
  }
}
