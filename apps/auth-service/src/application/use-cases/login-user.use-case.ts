import { UserRepository } from '../../domain/repositories/user.repository.interface';

export class LoginUserUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly hashService: {
      compare(password: string, hash: string): Promise<boolean>;
    },
    private readonly tokenService: {
      sign(payload: any): string;
    },
  ) {}

  async execute(input: { email: string; password: string }) {
    const user = await this.userRepository.findByEmail(input.email);
    if (!user) throw new Error('Invalid credentials');

    const valid = await this.hashService.compare(
      input.password,
      user.passwordHash,
    );

    if (!valid) throw new Error('Invalid credentials');

    return {
      accessToken: this.tokenService.sign({
        sub: user.id,
        email: user.email,
      }),
    };
  }
}
