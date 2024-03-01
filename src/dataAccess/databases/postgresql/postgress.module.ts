import { databaseProvider } from "./postgress.service";
import { Module } from "@nestjs/common";

@Module({
  imports: [databaseProvider],
  exports: [databaseProvider],
})
export class PostgresDatabaseModule {}
