import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../user.entity";
import { Repository } from "typeorm";
import { CreateUserDto } from "../dto/create-user.dto";
import * as bcrypt from "bcrypt";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>
    ) {}

    async createUser(createUserDto: CreateUserDto){
        const newUser: User = this.userRepository.create(createUserDto);

        newUser.password = await bcrypt.hash(createUserDto.password, 10);

        return await this.userRepository.save({...newUser})
    }

    async getAllUsers(){
        const allUsers = await this.userRepository.find()
        return allUsers;
    }
}