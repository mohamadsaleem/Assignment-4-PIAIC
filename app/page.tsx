"use client";

import { useState } from "react";
import Button from "./components/button/button";
var index = 0;

export default function Home() {
  const studenJson = [
    {
      name: "arun",
      gender: "Male",
      physics: 88,
      maths: 87,
      english: 78,
    },
    {
      name: "rajesh",
      gender: "Male",
      physics: 96,
      maths: 100,
      english: 95,
    },
    {
      name: "moorthy",
      gender: "Male",
      physics: 89,
      maths: 90,
      english: 70,
    },
    {
      name: "raja",
      gender: "Male",
      physics: 30,
      maths: 25,
      english: 40,
    },
    {
      name: "usha",
      gender: "Female",
      physics: 67,
      maths: 45,
      english: 78,
    },
    {
      name: "priya",
      gender: "Female",
      physics: 56,
      maths: 46,
      english: 78,
    },
    {
      name: "Sundar",
      gender: "Male",
      physics: 12,
      maths: 67,
      english: 67,
    },
    {
      name: "Kavitha",
      gender: "Female",
      physics: 78,
      maths: 71,
      english: 67,
    },
    {
      name: "Dinesh",
      gender: "Male",
      physics: 56,
      maths: 45,
      english: 67,
    },
    {
      name: "Hema",
      gender: "Female",
      physics: 71,
      maths: 90,
      english: 23,
    },
    {
      name: "Gowri",
      gender: "Female",
      physics: 100,
      maths: 100,
      english: 100,
    },
    {
      name: "Ram",
      gender: "Male",
      physics: 78,
      maths: 55,
      english: 47,
    },
    {
      name: "Murugan",
      gender: "Male",
      physics: 34,
      maths: 89,
      english: 78,
    },
    {
      name: "Jenifer",
      gender: "Female",
      physics: 67,
      maths: 88,
      english: 90,
    },
  ];
  const [studentState, setStudentState] = useState("arun");

  function nextStudent() {
    index++; //index > studenJson.length - 1 ? 0 : index + 1;
    if (index > studenJson.length - 1) {
      index = 0;
    }
    setStudentState(studenJson[index].name);
  }
  function previouseStudent() {
    index--; //index < 0 ? studenJson.length - 1 : index - 1;
    if (index < 0) {
      index = studenJson.length - 1;
    }
    setStudentState(studenJson[index].name);
  }

  return (
    <div>
      {/* <Button title="Main Page Click Me" description="DESCRIPTION" onClickHandler={()=>{alert("click from main page")}}/> */}
      <Button
        title="Previouse Student"
        description="DESCRIPTION"
        onClickHandler={previouseStudent}
        style="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      />
      <span>{studentState}</span>

      <Button
        title="Next Student"
        description="DESCRIPTION"
        onClickHandler={nextStudent}
        style="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"

      />
    </div>
  );
}
