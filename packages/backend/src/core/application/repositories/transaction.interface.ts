export type TransactionScope = any;

export interface ITransaction {
  create<U>(transaction: (tx: TransactionScope) => Promise<U>): Promise<U>;
}
