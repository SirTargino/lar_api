import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { UserService } from "../services/user.service";
import { CreateUserDto } from "../dto/create-user.dto";
import { AuthGuard } from "@nestjs/passport";

@Controller('user')
export class UserController{
    constructor(
        private readonly userService: UserService
    ){};

    @Post()
    create(@Body() createUserDto: CreateUserDto){
        return this.userService.createUser(createUserDto);
    };

    @Get()
    //@UseGuards(AuthGuard("jwt"))
    findAll(){
        return this.userService.getAllUsers();
    };
}