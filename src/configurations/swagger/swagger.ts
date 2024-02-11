import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import {config as configEnv} from '../../configurations/config/envs'
export class SwaggerConfig {
  static ConfigSwaggerModule(app: INestApplication): void {
    const config = new DocumentBuilder()
      .addBearerAuth()
      .setTitle(`${configEnv.name_app}`)
      .setVersion('v0.0.1')
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup(`${configEnv.url_selft_api}/docs`, app, document, {
      swaggerOptions: {
        filter: true,
        showRequestDuration: true,
      },
    });
  }
}
