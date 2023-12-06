"use client"
import React, { useState } from 'react';

interface Row {
  id: number;
  name: string;
  age: number;
  city: string;
  
}

const Table: React.FC = () => {
  const [sortedColumn, setSortedColumn] = useState<number | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const data: Row[] = [
    { id: 1, name: 'John', age: 25, city: 'New York' },
    { id: 2, name: 'Alice', age: 30, city: 'San Francisco' },
    { id: 3, name: 'Bob', age: 22, city: 'Los Angeles' },
   
  ];

  const handleSort = (columnIdx: number) => {
    setSortedColumn(columnIdx);
    setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
  };



  const sortTable = (rows: React.ReactNode[]) => {
    if (sortedColumn === null) return rows;
    console.log(rows)

    return rows.slice().sort((a: any, b: any) => {
      const aValue = a.props.children[sortedColumn].toString().trim();
      const bValue = b.props.children[sortedColumn].toString().trim();
  

      if (sortOrder === 'asc') {
        return aValue.localeCompare(bValue, undefined, { sensitivity: 'base' });
      } else {
        return bValue.localeCompare(aValue, undefined, { sensitivity: 'base' });
      }
    });
  };
  
  
  

  return (
    <table  className="border-collapse border border-slate-400 container mx-auto px-4 mt-5">
      <thead>
        <tr>
          <th  className="border border-slate-300">
            <button onClick={() => handleSort(0)} >نام</button>
          </th>
          <th className="border border-slate-300">
             <button  onClick={() => handleSort(1)} >سن</button>
          </th>
          <th  className="border border-slate-300">
            <button onClick={() => handleSort(2)} >شهر</button>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortTable(data.map((row) => (
          <tr key={row.id}>
            <td  className="border border-slate-300">{row.name}</td>
            <td  className="border border-slate-300">{row.age}</td>
            <td  className="border border-slate-300">{row.city}</td>
           
          </tr>
        )))}
      </tbody>
    </table>
  );
};

export default Table;
