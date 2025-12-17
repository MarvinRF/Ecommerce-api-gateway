import { Controller, Post, Body } from '@nestjs/common';
import { RegisterUserUseCase } from '../../application/use-cases/register-use-case';
import { LoginUserUseCase } from '../../application/use-cases/login-user.use-case';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly registerUser: RegisterUserUseCase,
    private readonly loginUser: LoginUserUseCase,
  ) {}

  @Post('register')
  register(@Body() body: { email: string; password: string }) {
    return this.registerUser.execute(body);
  }

  @Post('login')
  login(@Body() body: { email: string; password: string }) {
    return this.loginUser.execute(body);
  }
}
