import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { AuthService } from 'src/auth/auth.service';
import { JWTPayload } from './jwt_payload.interface';

@Injectable()
export class JWTStrategy extends PassportStrategy(Strategy) {
	constructor(private authService: AuthService) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			secretKey: process.env.JWT_SECRET,
		})
	}

	async validate(payload: JWTPayload) {
		const user = await this.authService
	}
}