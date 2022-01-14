import { useState, useEffect } from 'react';
import Employee from './Employee';
import { makeServer } from "./server";

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" });
}







function App() {

const [employees, setEmployees] = useState([]);
const [expanded, setExpanded] = useState(false);



useEffect(() => {
  getEmployees();
}, []);


const getEmployees = async () => {
  let json = await fetch('api/employees');
  let res = await json.json()
  if(!employees.length) setEmployees(res.employees);
};



  return (
    <div>
      <header>
        <h1>Employees</h1>
        {employees?.map((person, i) => {
          person.expanded = expanded;
          return <Employee key={i} employee={person}/>
        })}
      </header>
    </div>
  );
}

export default App;
