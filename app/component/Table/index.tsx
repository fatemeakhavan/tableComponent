import { INormalObject } from "@/app/types";
import Avatar from "../Avatar";
import Button from "../Button";

export const headers = [
  "FullName",
  "phoneNumber",
  "Email",
  "company",
  "status",
  "Action",
];

export const rows = [
  {
    id: { value: 1, type: "text", visible: false },
    FullName: {value: "ali", type: "user", visible: true, avatar:"https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"},
    phoneNumber: { value: "09155004090", type: "text", visible: true },
    Email: { value: "ali@gmail.com", type: "text", visible: true },
    conpamy: { value: "Fanap", type: "text", visible: true },
    status: { value: "Active", type: "buttonStatus", visible: true },
    action: {value: "Edit",type: "buttonAction",visible: true,access: true},
  },
  {
    id: { value: 2, type: "text", visible: false },
    FullName: {value: "sara",type: "user",visible: true,avatar:"https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"},
    phoneNumber: { value: "09155004090", type: "text", visible: true },
    Email: { value: "sara@gmail.com", type: "text", visible: true },
    company: { value: "Fanap", type: "text", visibel: true },
    status: { value: "Deactive", type: "buttonStatus", visible: true },
    action: {value: "Edit",type: "buttonAction", visible: true, access: false},
  },
  {
    id: { value: 3, type: "text", visible: false },
    FullName: {value: "saba",type: "user",visible: true,avatar:"https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"},
    phoneNumber: { value: "09155004090", type: "text", visible: true },
    Email: { value: "saba@gmail.com", type: "text", visible: true },
    company: { value: "Fanap", type: "text", visibel: true },
    status: { value: "Active", type: "buttonStatus", visibel: true },
    action: {value: "Edit",type: "buttonAction",visibel: true,access: true,},
  },
  {
    id: { value: 4, type: "text", visible: false },
    FullName: {value: "fatemeh",type:"user",visible: true,avatar:"https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"},
    phoneNumber: { value: "09155004090", type: "text", visible: true },
    Email: { value: "fatemeh@gmail.com", type: "text", visible: true },
    company: { value: "Dotin", type: "text", visibel: true },
    status: { value: "Deactive", type: "buttonStatus", visible: true },
    action: {value: "Edit",type: "buttonAction",visible: true,access: false},
  },
];
const renderRow = (row: INormalObject) => {
  const list = [];
  for (let key of Object.keys(row)) {
    const item = row[key];
    if (!item.visibel) continue;
    switch (item.type) {
      case "buttonStatus":
        list.push(
          <td className="border border-slate-300 ">
            <Button
              className={`${
                item.value === "Active" ? "bg-green-500" : "bg-red-500"
              }`}
              text={item.value}
            />
          </td>
        );
        break;

      case "buttonAction":
        list.push(
          <td className="border border-slate-300 ">
            <Button
              className={`${item.access ? "bg-gray-700" : "bg-slate-400"}`}
              text={item.value}
            />
          </td>
        );
        break;

      case "text":
        list.push(<td className="border border-slate-300 ">{item.value}</td>);
        break;

      case "user":
        list.push(
          <td className="border border-slate-300 ">
            <Avatar url={item.avatar} lable={item.value} />
          </td>
        );
        break;
    }
  }
  return list;
};
const Table = () => {
  return (
    <table className="border-collapse border border-slate-400 container mx-auto px-4 mt-5">
      <thead>
        <tr>
          {headers.map((i) => (
            <th className="border border-slate-300">{i}</th>
          ))}
        </tr>
      </thead>
      <tbody>
      {rows.map((item) => (
          <tr>{renderRow(item)}</tr>
        ))}
      </tbody>
    </table>
  );
};
export default Table;
