

import { tableProps } from "@/app/types/componentTypes";

export default function Table(props: tableProps[]) {
  return (
    <table className="min-w-full bg-white border border-gray-300">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b">Role No</th>
          <th className="py-2 px-4 border-b">Name</th>
          <th className="py-2 px-4 border-b">Gender</th>
          <th className="py-2 px-4 border-b">Physics</th>
          <th className="py-2 px-4 border-b">Math</th>
          <th className="py-2 px-4 border-b">English</th>
        </tr>
      </thead>
      <tbody>
        {props.map((item, index) => {
          return (
            <tr>
              <td className="py-2 px-4 border-b">{index + 1}</td>
              <td className="py-2 px-4 border-b">{item.name}</td>
              <td className="py-2 px-4 border-b">{item.gender}</td>
              <td className="py-2 px-4 border-b">{item.physics}</td>
              <td className="py-2 px-4 border-b">{item.maths}</td>
              <td className="py-2 px-4 border-b">{item.english}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
