import React from "react";
import { Student, Teacher } from "./components/PersonClasses";

const App = () => {
  // Create 5 entities (3 Students + 2 Teachers)
  const entities = [
    new Student("Tarun", 20, "AIM & ML", "A"),
    new Student("Vijay", 21, "Mechanical Engineering", "A+"),
    new Student("Arun", 19, "Mathematics", "A-"),
    new Teacher("Mr.Amar", 45, "Physics", "Science"),
    new Teacher("Ms. Smithi", 38, "English", "Humanities"),
  ];

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h2>Person Class Hierarchy Example</h2>

      <table
        border="1"
        cellPadding="10"
        style={{ borderCollapse: "collapse", marginTop: "20px" }}
      >
        <thead>
          <tr>
            <th>Type</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {entities.map((entity, index) => (
            <tr key={index}>
              <td>{entity instanceof Student ? "Student" : "Teacher"}</td>
              <td>{entity.getInfo()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;