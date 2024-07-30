import { DataSource, DataSourceOptions} from 'typeorm';
import * as dotenv from 'dotenv';
import { dbSet } from './utils/types';
dotenv.config(); // Load environment variables from .env file
const config: DataSourceOptions = {
    type: dbSet,
    host: process.env.HOSTDB,
    port: parseInt(process.env.PORTDB),
    username: process.env.USERNAMEDB,
    password: process.env.PASSWORDDB,
    database: process.env.NAMEDB,
    entities: ['dist/dataAccess/databases/postgresql/entities/**/*.entity{.js,.ts}'],
    synchronize: false,
    migrationsRun: false,
    logging: true,
    migrations: ['./migrations/**/*{.js,.ts}'],
}
const dataSource = new DataSource(config);
export default dataSource;