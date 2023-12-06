import { EType } from "./enum";

export interface IRows {
  [key: string]: IRowsPayload;
}

 export interface ITableBaseInput {
  headers: string[];
  rows: any[];
}
 
export interface IRowsPayload {
  value: number | string;
  type: EType;
  visiable?: boolean;
  avater?: string;
}
