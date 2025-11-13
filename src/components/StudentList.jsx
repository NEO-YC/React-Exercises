import { useState } from "react";
import React from "react";
import Student from "./Student";

function StudentList() {
  const StudentsArray = [
    { firstName: "Nehorai", lastName: "Cohen", grade: 95 },
    { firstName: "Yael", lastName: "Levi", grade: 88 },
    { firstName: "Eli", lastName: "Mizrahi", grade: 55 },
    { firstName: "Maya", lastName: "Katz", grade: 82 },
    { firstName: "David", lastName: "Shapiro", grade: 91 },
  ];


  const [search, setSearch] = useState("");

  // פונקציה לסינון התלמידים לפי שם 
  const filteredStudents = StudentsArray.filter((student) =>
    student.firstName.toLowerCase().includes(search.toLowerCase())    
  );

// יצירת רשימת סטודנטים להצגה
    const studentList = filteredStudents.map((item, index) => (
    <Student
      key={index}
      name={item.firstName}
      lname={item.lastName}
      grade={item.grade}
    />
  ));



  return (
    <>
      <input
        type="text"
        placeholder="Search by first name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {studentList}
    </>
  );
}

export default StudentList;
