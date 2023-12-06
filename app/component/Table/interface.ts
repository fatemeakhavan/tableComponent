import { EType } from "./enum";

export interface IRows {
  [key: string]: IRowsPayload;
}

 export interface ITableBaseInput {
  headers: {value:string , sortable:boolean}[];
  rows: any[];
}
 
export interface IRowsPayload {
  value: any;
  type: EType;
  visiable?: boolean;
}
