import { config } from "src/configurations/config/envs";
const {type_db} = config
export const dbSet = type_db === 'mongodb' ? 'mongodb' : 'postgres'

