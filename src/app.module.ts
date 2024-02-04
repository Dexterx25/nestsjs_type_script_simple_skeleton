import { ConfigModule } from "@nestjs/config";
import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/dataAccess/databases";
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
  ],
})
export class AppModule {}
 