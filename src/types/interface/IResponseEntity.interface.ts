import { ImetaPagination } from './IResPageWrapper.interface';

export interface IResponseEntity<T> {
  code: number;
  status: boolean;
  message: string;
  meta?: ImetaPagination;
  data?: T;
}
