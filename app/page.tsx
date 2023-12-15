"use client";
import { useState } from "react";
import Table from "./component/Table";
import Avatar from "./component/Avatar";
import { EType } from "./component/Table/enum";

export default function Home() {

  const dataModelForcol = [{value:"fullName",sortable:true}, {value:"phoneNumber",sortable:true},{value:"age",sortable:true},{value:"lastName",sortable:true},{value:"company",sortable:true}];

  const dataModelForRow = [
    {
      fullName: {
        // value: TestComponent,
        // type: EType.COMPONENET,
        value:"hasan",
        type:EType.TEXT
        
      },
      phoneNumber: { value: "09155004090", type:EType.TEXT },
      age:{value:32,type:EType.TEXT},
      lastName:{value:"talischi",type:EType.TEXT},
      company:{value:345,type:EType.TEXT}
    },
    {
      fullName: {
        value: "ali",
        type: EType.TEXT,
       
      },
      phoneNumber: { value: "19155004090", type:EType.TEXT},
      age:{value:16,type:EType.TEXT},
      lastName:{value:"bahrami",type:EType.TEXT},
      company:{value:678,type:EType.TEXT}
    },
    {
      fullName: {
        value: "bahram",
        type: EType.TEXT,
       
      },
      phoneNumber: { value: "29155004090", type:EType.TEXT },
      age:{value:12,type:EType.TEXT},
      lastName:{value:"sarmadi",type:EType.TEXT},
      company:{value:56,type:EType.TEXT}
    },
    {
      fullName: {
        value: "sara",
        type: EType.TEXT,
       
      },
      phoneNumber: { value: "59155004090", type:EType.TEXT},
      age:{value:104,type:EType.TEXT},
      lastName:{value:"akhavan",type:EType.TEXT},
      company:{value:8,type:EType.TEXT}
    },
  ];

  return (
    <>
      <Table headers={dataModelForcol} rows={dataModelForRow }></Table>
    </>
  );
}

const TestComponent = () => {
  return (
    <button
      className="bg-blue-500 rounded-lg text-white px-5 text-lg inline-block"
      onClick={() => {
        alert("hello");
      }}
    >
      click me
    </button>
  );
};
