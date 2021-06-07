import { ContractModel } from "./contractModel";

describe('Class ContractModel', () => {
  const contractObj= {
    id: '#001',
    initDate: new Date(2019),
    expirationDate: new Date(2020),
    months: 12,
    monthlyCost: 500
  };
  it('Class Model should returns properly values', () => {

    const contract = new ContractModel(contractObj);

    expect(contract.Id).toBe(contractObj['id']);
    expect(contract.InitDate).toBe(contractObj['initDate']);
    expect(contract.ExpirationDate).toBe(contractObj['expirationDate']);
    expect(contract.Months).toBe(contractObj['months']);
    expect(contract.MonthlyCost).toBe(contractObj['monthlyCost']);
  });
});
