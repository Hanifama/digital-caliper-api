export type DashboardMetaItem = {
  prodtype_id: string;
  name: string;
  qcDone: number;
  passed: number;
  notPassed: number;
  percentPassed: number;
  percentNotPassed: number;
};

export type DashboardMeta = DashboardMetaItem[];
