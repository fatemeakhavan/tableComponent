"use client";
import { INormalObject } from "@/app/types";
import { useState } from "react";
import { EType } from "./enum";
import {ITableBaseInput} from "./interface"

const mapRowToTable = (row: INormalObject) => {
  const list = [];
  for (let key of Object.keys(row)) {
    const item = row[key];
    switch (item.type) {
      case EType.TEXT:
        const tag = (
          <td className="border border-slate-300 pl-2 py-3">{item.value}</td>
        );
        list.push(tag);
        break;
      case EType.COMPONENET:
        if (typeof item.value === "function") {
          list.push(<td className="border border-slate-300 pl-2 py-3" >{item.value()}</td>);
        }
        break;
    }
  }
  return list;
};

const Table = (props: ITableBaseInput) => {
  const [rows, setRows] =useState(props.rows);
  const [headers, setHeaders] =useState(props.headers);
  const [sortedColumn, setSortedColumn] = useState<number | null>(null);
  const [sortOrder, setSortOrder] = useState<'ascending' | 'descending'>('ascending');

  
  const handleSort = (columnIdx: number) => {
    setSortedColumn(columnIdx);
    setSortOrder((prevOrder) => (prevOrder === 'ascending' ? 'descending' : 'ascending'));
    console.log(sortOrder)
  };
  
   const sortTable=()=>{}

  return (
    <table className="border-collapse border border-slate-400 container mx-auto px-4 mt-5 mb-24">
      <thead>
        <tr>
          {headers.map((i, index) => (
            <th
              key={index}
              className="border border-slate-300"
            >
                <button  onClick={()=>handleSort(index)}>{i}</button>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((item, index) => (
          <tr key={index}>{mapRowToTable(item)}</tr>
        ))}
      </tbody>
    </table>
  );
};
export default Table;
