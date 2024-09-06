export type TransactionScope = unknown;

export interface ITransaction {
  create<U>(transaction: (tx: TransactionScope) => Promise<U>): Promise<U>;
}
