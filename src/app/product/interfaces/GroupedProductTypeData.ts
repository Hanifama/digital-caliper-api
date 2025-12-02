export interface ProductField {
  code: string;
  name: string;
  alias: string;
  type: string;
  isTable: boolean;
  productType?: string;
  enable?: boolean;
  isReadonly?: boolean;
}

export interface GroupedData {
  table: {
    name: string;
    alias?: string;
    fields: ProductField[];
  }[];
  FormRight?: {
    name: string;
    alias?: string;
    fields: ProductField[];
  }[];
  [key: string]:
    | ProductField[]
    | { name: string; alias?: string; fields: ProductField[] }[]
    | undefined;
}
