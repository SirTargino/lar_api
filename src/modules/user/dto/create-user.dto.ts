import { IsEmail, IsMobilePhone, IsNotEmpty, IsPostalCode, IsString, MinLength } from "class-validator";

export class CreateUserDto{
    @IsString()
    @IsNotEmpty({message: "O nome não pode ser vazio!"})
    name: string;

    @IsEmail(undefined, {message: "O email deve ser válido!"})
    email: string;

    @IsMobilePhone("pt-BR")
    @IsNotEmpty({message: "O telefone não pode ser vazio!"})
    phone: string;

    @IsString()
    @IsNotEmpty({message: "A senha não pode ser vazia!"})
    @MinLength(6, {message: "A senha deve conter, no mínimo, 6 caracteres!"})
    password: string;

    @IsPostalCode("BR")
    @IsNotEmpty({message: "O CEP não pode ser vazio!"})
    cep: string;
    
    @IsString()
    @IsNotEmpty({message: "A rua não pode ser vazia!"})
    street: string;

    @IsString()
    @IsNotEmpty({message: "O complemento não pode ser vazio!"})
    complement: string;
}