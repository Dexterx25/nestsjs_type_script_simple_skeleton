import { Injectable } from '@nestjs/common';
import {config} from '../../configurations/config/envs'
import { AxiosDataAccess } from '../recurses/axios';
import { GenericPostFromModuleDTO } from 'src/modules/payments/DTO/input';
import { HandleErrorservice } from 'src/configurations/exceptions';
import { EnumErrorCodes } from 'src/configurations/exceptions/constants';
import { IResponseProcessPayment, IResponseProcessTransaction, dataCreateRequestToken } from './interfaces';

const genericEnv = config.integrations.generic_implementation;
@Injectable()
export class GenericServiceImplementation {
    protected token
    constructor(
        private readonly axiosDataAccess: AxiosDataAccess,
        private readonly errorHandle: HandleErrorservice
        ){
    }
    async loginToGenericImpl() {
          const data: dataCreateRequestToken  = await this.axiosDataAccess.createRequest({
            method: 'POST',
            url: `${genericEnv.url}/generic_path_1`,
            headers: { 
                'Content-Type': 'application/json',
              },
            auth: {
                username: genericEnv.envs.publicKey,
                password: genericEnv.envs.privateKey,
            },
            data: ''
        })
        if(!data?.token) throw new Error('Not found Token')
        config.integrations.generic_implementation['token'] = data.token
        return this.token = data.token
    }

    async processPayment(data: GenericPostFromModuleDTO, generic_id: string): Promise<IResponseProcessPayment> {
        const res: IResponseProcessTransaction | any = await this.axiosDataAccess.createRequest({
          method: 'POST',
          url: `${genericEnv.url}/generic_path_1/generic_path_2/${generic_id}`,
          headers: { 
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${this.token || config.integrations.generic_implementation['token'] }`
            },
          data: JSON.stringify(data)
      })
      if(!res) throw new Error('Not found data')
      if(res.success === false) throw this.errorHandle.handleError({
        error: true,
        message: res.textResponse,
        statusCode: EnumErrorCodes.DATA_VALIDATION_ERROR,
        details: [...res.data.errors.map((i) => i.errorMessage)]
      })
      return res
  }

}