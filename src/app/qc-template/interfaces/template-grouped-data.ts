export interface ProductField {
  code: string;
  name: string;
  alias: string;
  type: string;
  isTable: boolean;
  productType?: string;
  enabled?: boolean;
  orderNumb?: number;
  selected?: boolean;
  minTolerance?: number | null;
  t_lt_50_Tolerance?: number | null;
  nominalTolerance?: number | null;
  t_gt_50_Tolerance?: number | null;
  maxTolerance?: number | null;
  sound?: string | null;
  isReadonly?: boolean;
  isFormula?: boolean;
  formula?: string | null;
  isTolerance?: boolean;
  inputType?: string | null;
}

export interface TableGroup {
  name: string;
  alias: string;
  fields: ProductField[];
  enabled?: boolean;
}

export interface FormRightGroup {
  code?: string;
  name: string;
  alias: string;
  enabled: boolean;
  tolerance: {
    min: number | null;
    t_lt_50: number | null;
    nominal: number | null;
    t_gt_50: number | null;
    max: number | null;
    actual: number | null;
  };
  relatedTablePositions: string[];
}

export interface GroupedTemplateData {
  table: TableGroup[];
  size_id?: string;
  size_name?: string;
  FormRight?: FormRightGroup[];
  [key: string]:
    | ProductField[]
    | TableGroup[]
    | FormRightGroup[]
    | string
    | undefined;
}
