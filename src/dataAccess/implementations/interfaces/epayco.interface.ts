export interface dataCreateRequestToken {
    token: string
}
interface IErrorItem {
       codError: number,
       errorMessage: string,
}
export interface IResponseProcessTransaction {
   success: boolean,
   titleResponse: string,
   textResponse: string,
   lastAction: string,
   data: {
     totalErrors: number,
     errors: IErrorItem[]
   },
 }

export interface IResponseProcessPayment {
   success: true,
   titleResponse: string,
   textResponse: string,
   lastAction: string,
   data: {
     ref_payco: number,
     factura: string,
     descripcion: string,
     valor: number,
     iva: number,
     baseiva: number,
     moneda: string,
     estado: string,
     respuesta: string,
     autorizacion: string,
     recibo: string,
     fecha: string,
     urlbanco: string,
     transactionID: string,
     ticketId: string
   }
 }