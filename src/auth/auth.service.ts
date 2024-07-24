import {
	HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  Logger,
 } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JWTPayload } from '../middlewares/jwt/jwt_payload.interface';
import { DataSource } from 'typeorm';
import { UserEntity } from '../entities/users.entity';

export interface CreateUser {
	firstname: string
	lastname: string
	email: string
	username: string
	password: string
}

@Injectable()
export class AuthService {
	private userRepository
	private logger = new Logger()

	constructor(private datasource: DataSource) {
		this.userRepository = this.datasource.getRepository(UserEntity)
	}

	async createUser(createUser: CreateUser): Promise<UserEntity> {
		try {
			const user = await this.userRepository.create(createUser)
			return await this.userRepository.save(user)
		} catch (err) {
			if (err.code == 23505) {
				this.logger.error(err.message, err.stack);
        throw new HttpException('Username already exists', HttpStatus.CONFLICT);
			}
			this.logger.error(err.message, err.stack);
      throw new InternalServerErrorException(
        'Something went wrong, Try again!',
      );
		}
	}
}
