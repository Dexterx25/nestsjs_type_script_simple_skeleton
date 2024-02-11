import { Injectable } from '@nestjs/common';
import axios from 'axios'
import { HandleErrorservice } from 'src/configurations/exceptions';
import { EnumErrorCodes } from 'src/configurations/exceptions/constants';

@Injectable()
export class AxiosDataAccess {
    constructor(
        private readonly handleErrorService: HandleErrorservice
        ){

    }
  async createRequest(options) {
    try {
      const response = await axios({
        method: options.method,
        url: options.url,
        headers: options.headers,
        params: options.params,
        data: options.data,
        auth: options.auth,
      });
      return response.data || response;
    } catch (err) {
        if (err.code === 'ETIMEDOUT') {
           this.handleErrorService.handleError({
              error: true,
              statusCode: EnumErrorCodes.REQUEST_TIMEOUT_ERROR,
              message: err.message
          })
        } else {
           this.handleErrorService.handleError({
              error: true,
              statusCode: EnumErrorCodes.BAD_REQUEST,
              message: err.message
          })
        }
    }
  }
}
