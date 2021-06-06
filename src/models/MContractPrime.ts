import { ContractModel } from "./contractModel";

export class ContractPrimeModel extends ContractModel {
  get MonthlyDiscount () : number {
    return this.contract.monthlyCost * 0.1;
  }
}
