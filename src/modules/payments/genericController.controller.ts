import { Body, Controller, Get, HttpCode, HttpStatus, Post, Query} from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiQuery, ApiResponse, ApiTags, getSchemaPath } from '@nestjs/swagger';
import { GenericService } from './generic.service';
import { config } from 'src/configurations/config/envs';
import { GenericResponseFromImplDTO } from './DTO/output/genericOutPut.dto';
import { GenericPostFromModuleDTO, GenericFromModuleDTO } from './DTO/input';
interface interfaceToken {
  token: string
}
const stastsExampleRes: interfaceToken = {
  token: 'eyasdasdeqweqwsdnknvk.asdqwe@asknaksndd_kknasdnkas'
}
@ApiTags("genericPath")
@Controller(`${config.url_selft_api}`)
export class GenericController {
  constructor(
    private readonly genericService: GenericService,
    ) {}

  @Get('genericPath')
  @ApiOkResponse({
    status: HttpStatus.OK,
    schema: {
      $ref: getSchemaPath(GenericResponseFromImplDTO),
      example: stastsExampleRes
  }
  })
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Principal Objective to get data',
    description: `Description more detail to get data`,
  })
 async generatePaymentTest(): Promise<string> {
      const data = await this.genericService.generatePaymentTest()
      return data
  };


  @Post('genericPath/genericPath2')
  @ApiOkResponse({
    status: HttpStatus.CREATED,
    schema: {
        $ref: getSchemaPath(GenericResponseFromImplDTO),
        example: {
            statusCode: 200,
            message: 'Generic message if it was 200!',
            error: false,
          },
    }
  })
  @ApiQuery({ name: 'typeOriginTransaction', required: true, type: String, description: 'Type transaction data to send' })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    schema: {
        $ref: getSchemaPath(GenericResponseFromImplDTO),
        example: {
            statusCode: 400,
            message: ['validation(s) error'],
            error: true,
          },
    }
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    schema: {
        $ref: getSchemaPath(GenericResponseFromImplDTO),
        example: {
            statusCode: 403,
            message: 'generic 404 message',
            error: true,
          },
    }
  })
  @ApiOperation({
    summary: 'Endpoint generic post',
    description: `Details generic post documentation`,
  })
 async generatePaymentData(@Body() data: GenericPostFromModuleDTO, @Query() dataQuery: GenericFromModuleDTO): Promise<GenericPostFromModuleDTO> {
    const dataResponse = await this.genericService.generatePaymentData(data, dataQuery.generic_query)
    return dataResponse;
  };
};
