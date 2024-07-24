import { Controller, Body, Post } from '@nestjs/common';
import { AuthService, CreateUser } from './auth.service';

@Controller('auth')
export class AuthController {
	constructor(private authService: AuthService) {}

	@Post('/register')
	async register(@Body() user: CreateUser) {
		return await this.authService.createUser(user)
	}

}
