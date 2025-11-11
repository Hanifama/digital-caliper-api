export interface QcField {
  code: string;
  name: string;
  isTable: boolean;
  productType: string;
  enabled: boolean;
  selected: boolean;
  minTolerance: number | null;
  t_lt_50_Tolerance: number | null;
  nominalTolerance: number | null;
  t_gt_50_Tolerance: number | null;
  maxTolerance: number | null;
  sound: any;
  input_value: number;
  inputType: string | null;
  isReadonly: boolean;
  isFormula?: boolean;
  isTolerance?: boolean;
  formula?: string | null;
  orderNumb: number;
}

export interface QcTable {
  name: string;
  fields: QcField[];
  enabled: boolean;
}

export interface QcRecordGroupedResult {
  qc_id: string;
  qc_template_id: string;
  template_prodtype_id: string;
  template_name: string;
  template_profile: string; // renamed from product_name
  template_size_id: string;
  template_size_name: string;
  template_std_dimention: string; // renamed from template_std_grade
  template_brand_merek: string; // new field
  template_specification: string; // new field
  status: string | null;
  status_overall: string | null;
  created_dt: Date;
  table: QcTable[];
  FormRight: any[];
  basic: { label: string; value: any; code: string }[];
  default: { label: string; value: any; code: string }[];
}
