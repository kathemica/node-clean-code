// aplicando el patrón Package by Feature
// para aplicar principio de open close

export interface IContractor {
  id: string;
  initDate: Date;
  expirationDate: Date;
  months: number;
  monthlyCost: number;
}
