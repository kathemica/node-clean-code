import { IContractor } from "../interfaces/IContract";

export class ContractModel{
  constructor(protected contract: IContractor){

  }

  get Id() : string {
    return this.contract.id;
  }

  get InitDate() : Date {
    return this.contract.initDate;
  }

  get ExpirationDate() : Date {
    return this.contract.expirationDate;
  }

  get Months() : number {
    return this.contract.months;
  }

  get MonthlyCost() : number {
    return this.contract.monthlyCost;
  }
}
