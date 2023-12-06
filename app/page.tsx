"use client";
import { useState } from "react";
import Table from "./component/Table";
import Avatar from "./component/Avatar";
import { EType } from "./component/Table/enum";

export default function Home() {

  const dataModelForcol = [{value:"fullName",sortable:false}, {value:"phoneNumber",sortable:true},{value:"age",sortable:true},{value:"lastName",sortable:true},{value:"company",sortable:true}];

  const dataModelForRow = [
    {
      fullName: {
        value: TestComponent,
        type: EType.COMPONENET,
        
      },
      phoneNumber: { value: "09155004090", type:EType.TEXT },
      age:{value:32,type:EType.TEXT},
      lastName:{value:32,type:EType.TEXT},
      company:{value:32,type:EType.TEXT}
    },
    {
      fullName: {
        value: "sara",
        type: EType.TEXT,
       
      },
      phoneNumber: { value: "19155004090", type:EType.TEXT},
      age:{value:32,type:EType.TEXT},
      lastName:{value:32,type:EType.TEXT},
      company:{value:32,type:EType.TEXT}
    },
    {
      fullName: {
        value: "saba",
        type: EType.TEXT,
       
      },
      phoneNumber: { value: "29155004090", type:EType.TEXT },
      age:{value:32,type:EType.TEXT},
      lastName:{value:32,type:EType.TEXT},
      company:{value:32,type:EType.TEXT}
    },
    {
      fullName: {
        value: "fatemeh",
        type: EType.TEXT,
       
      },
      phoneNumber: { value: "59155004090", type:EType.TEXT},
      age:{value:32,type:EType.TEXT},
      lastName:{value:32,type:EType.TEXT},
      company:{value:32,type:EType.TEXT}
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
