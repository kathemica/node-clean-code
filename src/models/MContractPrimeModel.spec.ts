import { ContractPrimeModel } from "./MContractPrimeModel";

describe('Class ContractPrimeModel', () => {
  const contractObj= {
    id: '#001',
    initDate: new Date(2019),
    expirationDate: new Date(2020),
    months: 12,
    monthlyCost: 500
  };
  it('Class ContractPrimeModel should returns properly values', () => {
    const contract = new ContractPrimeModel(contractObj);

    expect(contract.Id).toBe(contractObj['id']);
    expect(contract.InitDate).toBe(contractObj['initDate']);
    expect(contract.ExpirationDate).toBe(contractObj['expirationDate']);
    expect(contract.Months).toBe(contractObj['months']);
    expect(contract.MonthlyCost).toBe(contractObj['monthlyCost']);
  });

  it('monthly descount contract private, 24 months long ', () => {
    const primeContract = new ContractPrimeModel(contractObj);

    expect(primeContract.MonthlyDiscount).toBe(contractObj['monthlyCost']*0.1);
  });
});
