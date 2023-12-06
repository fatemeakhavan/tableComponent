"use client";
import { useState } from "react";
import Table from "./component/Table";
import Avatar from "./component/Avatar";
import Test from "./component/Test";
import { EType } from "./component/Table/enum";

export default function Home() {
  const [headers, setHeaders] = useState(["a", "b", "c"]);
  const [rows, setRows] = useState([
    {
      a: { value: "123", type: EType.TEXT },
      b: { value: "456", type: EType.TEXT },
      c: { value: "789", type: EType.TEXT },
    },
  ]);
  const [newRows, setNewRows] = useState([
    {
      firstName: { value: TestComponent, type: EType.COMPONENET },
      lastName: { value: "mamad", type: EType.TEXT },
    },
    {
      firstName: { value: "hsn1", type: EType.TEXT },
      lastName: { value: "mamad2", type: EType.TEXT },
    },
    {
      firstName: { value: "hsn2", type: EType.TEXT },
      lastName: { value: "mamad2", type: EType.TEXT },
    },
  ]);

  const dataModelForcol = ["FullName", "phoneNumber"];

  const dataModelForRow = [
    {
      fullName: {
        value: "ali",
        type: EType.TEXT,
        visible: true,
        avatar:
          "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
      },
      phoneNumber: { value: "09155004090", type:EType.TEXT, visible: true },
    },
    {
      fullName: {
        value: "sara",
        type: EType.TEXT,
        visible: true,
        avatar:
          "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
      },
      phoneNumber: { value: "09155004090", type:EType.TEXT, visible: true },
    },
    {
      fullName: {
        value: "saba",
        type: EType.TEXT,
        visible: true,
        avatar:
          "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
      },
      phoneNumber: { value: "09155004090", type:EType.TEXT, visible: true },
    },
    {
      fullName: {
        value: "fatemeh",
        type: EType.TEXT,
        visible: true,
        avatar:
          "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
      },
      phoneNumber: { value: "09155004090", type:EType.TEXT, visible: true },
    },
  ];

  return (
    <>
      <Table headers={headers} rows={rows} />
      <Table headers={["firstName", "lastName"]} rows={newRows} />
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
