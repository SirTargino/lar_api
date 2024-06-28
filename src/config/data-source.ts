import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { User } from 'src/modules/user/user.entity';

dotenv.config();

const AppDataSource = new DataSource({
  type: 'postgres',
  url: String(process.env.DB_URL),
  migrations: ['./migrations/*.js'],
  entities: [User],
  synchronize: true
});

export default AppDataSource;