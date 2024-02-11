import { Injectable } from "@nestjs/common";
import { GenericPostFromModuleDTO } from "./DTO/input";
import { GenericServiceImplementation } from "src/dataAccess/implementations/generic_implementation";

@Injectable()
export class GenericService {
  constructor(
    private readonly genericServiceImpl: GenericServiceImplementation
    // add more services dataAccess or Repositories
  ) {}

  public async generatePaymentTest(): Promise<string>{
    return Promise.resolve('ok')
  }

  public async generatePaymentData(data: GenericPostFromModuleDTO, id: string): Promise<any>{
    const dataReturn = await this.genericServiceImpl.processPayment(data, id) 
    return dataReturn;
  }
    
};

