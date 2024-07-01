import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from "@nestjs/common";
import { UserService } from "../services/user.service";
import { CreateUserDto } from "../dto/create-user.dto";
import { AuthGuard } from "@nestjs/passport";
import { UpdateUserDto } from "../dto/update-user.dto";

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

    @Get('search')
    findByName(@Query('name') name: string){
        return this.userService.getUserByName(name);
    }

    @Put(':id')
    edit(
        @Param('id') id: string,
        @Body() updateUserDto: UpdateUserDto
    ){
        return this.userService.editUser(id, updateUserDto);
    }

    @Delete(':id')
    deleteUser(@Param('id') id: string){
        return this.userService.deleteUser(id);
    }
}