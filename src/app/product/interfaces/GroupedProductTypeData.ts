export interface ProductField {
  code: string;
  name: string;
  type: string;
  isTable: boolean;
  productType?: string;
  enable?: boolean;
  isReadonly?: boolean;
}

export interface GroupedData {
  table: { name: string; fields: ProductField[] }[];
  FormRight?: { name: string; fields: ProductField[] }[];
  [key: string]:
    | ProductField[]
    | { name: string; fields: ProductField[] }[]
    | undefined;
}
