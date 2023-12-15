"use client";
import { INormalObject } from "@/app/types";
import { ReactNode, useEffect, useState } from "react";
import { EType } from "./enum";
import { ITableBaseInput } from "./interface";

const mapRowToTable = (row: INormalObject) => {
  const list = [];
  for (let key of Object.keys(row)) {
    const item = row[key];
    list.push(
      <td className="p-[20px]">
        {(types as INormalObject)[item.type](item.value)}
      </td>
    );
  }
  return list;
};
const types = {
  [EType.TEXT]: (value: ReactNode) => value,
  [EType.COMPONENET]: (value: Function) => value(),
};

const Table = (props: ITableBaseInput) => {
  const [rows, setRows] = useState(props.rows);
  const [headers, setHeaders] = useState(props.headers);
  const [sortedColumn, setSortedColumn] = useState<number>(0);
  const [sortOrder, setSortOrder] = useState<"ascending" | "descending">(
    "ascending"
  );
  console.log("sortOrder", sortOrder);

  const handleSort = (columnIdx: number) => {
    if (!headers[columnIdx].sortable) return;
    setSortedColumn(columnIdx);
    if (sortedColumn === columnIdx)
      setSortOrder((prevOrder) =>
        prevOrder === "ascending" ? "descending" : "ascending"
      );
  };

  const sortTable = () => {
    let sortList = [...rows];
    sortList.sort((a, b) => {
      if (sortOrder === "ascending") {
        if (
          a[headers[sortedColumn!].value].value >
          b[headers[sortedColumn!].value].value
        )
          return 1;
        else return -1;
      } else {
        if (
          a[headers[sortedColumn!].value].value <
          b[headers[sortedColumn!].value].value
        )
          return 1;
        else return -1;
      }
    });
    console.log(sortList);
    setRows(sortList);
  };

  useEffect(() => {
    sortTable();
  }, [sortedColumn, sortOrder]);

  return (
      <div className="overflow-auto">
        <table className="min-h-[460px]">
          <thead className="min-h-[40px] border-t ">
            <tr>
              {headers.map((header, index) => (
                <th
                  className="px-[20px] py-[10px] text-start border border-border-light rounded-lg"
                  key={index}
                >
                  <button
                    className="min-h-[20px] text-center"
                    onClick={() => handleSort(index)}
                  >
                    {header.value}
                  </button>
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
      </div>

  );
};
export default Table;
