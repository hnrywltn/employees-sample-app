import { useState, useEffect } from 'react';
import Employee from './Employee';
import { makeServer } from "./server";

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" });
}







function App() {

const [employees, setEmployees] = useState([]);
const [expanded, setExpanded] = useState(false);
// const [expandAll, setExpandAll] = useState(false);



useEffect(() => {
  getEmployees();
}, [expanded]);


const getEmployees = async () => {
  let json = await fetch('api/employees');
  let res = await json.json()
  if(!employees.length) setEmployees(res.employees);
};

const showAllInfo = () =>setExpanded(true);
const minimizeAllInfo = () =>setExpanded(false);


  return (
    <div>
      <header>
        <h1>Employees</h1>
        <button
          onClick={showAllInfo}
          >Expand All Employees</button>
        <button
          onClick={minimizeAllInfo}
          >Minimize All Employees</button>
        {employees?.map((person, i) => {
          person.expanded = expanded;
          // person.expandAll = expandAll;
          return <Employee key={i} employee={person}/>
        })}
      </header>
    </div>
  );
}

export default App;
