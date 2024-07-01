import { Test, TestingModule } from "@nestjs/testing";
import { UserController } from "./user.controller";
import { UserService } from "../services/user.service";
import { User } from "../user.entity";
import { Repository } from "typeorm";
import { getRepositoryToken } from "@nestjs/typeorm";

describe("UserController", () => {
    describe('UserController', () => {
        let controller: UserController;
      
        beforeEach(async () => {
          const module: TestingModule = await Test.createTestingModule({
            controllers: [UserController],
            providers: [UserService, {
                provide: getRepositoryToken(User),
                useClass: Repository
            }], 
            
          }).compile();
      
          controller = module.get<UserController>(UserController);
        });
      
        it('should be defined', () => {
          expect(controller).toBeDefined();
        });
      });
})