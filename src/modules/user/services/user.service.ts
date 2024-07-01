import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../user.entity";
import { Like, Repository } from "typeorm";
import { CreateUserDto } from "../dto/create-user.dto";
import * as bcrypt from "bcrypt";
import { UpdateUserDto } from "../dto/update-user.dto";

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

    async getUserByName(name: string){
        const users = await this.userRepository.find({
            where: {name: Like(`%${name}%`)}
        });

        return users;
    }

    async editUser(id: string, updateUserDto: UpdateUserDto){
        const user: User = await this.userRepository.findOne({
            where: {id}
        })

        if(!user){
            throw new Error('User not found');
        }

        Object.keys(updateUserDto).forEach(key => {
            if (updateUserDto[key] !== undefined) {
                user[key] = updateUserDto[key];
            }
        });

        if (updateUserDto.password) {
            user.password = await bcrypt.hash(updateUserDto.password, 10);
        }

        return await this.userRepository.save(user);
    }

    async deleteUser(id: string){
        const user: User = await this.userRepository.findOne({
            where: {id}
        })

        if(!user){
            throw new Error('User not found');
        }

        return await this.userRepository.delete(id)
    }
}