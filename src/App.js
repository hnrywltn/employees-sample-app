import { useState, useEffect } from 'react';
import Employee from './Employee';
import { makeServer } from "./server";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getEmployees } from './store/employee.js';

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" });
}







function App() {

  const dispatch = useDispatch();
  const employees = useSelector(state => state.employees);


  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    dispatch(getEmployees());
  }, [expanded, dispatch]);


  const showAllInfo = () =>setExpanded(true);
  const minimizeAllInfo = () =>setExpanded(false);



    return (

      <BrowserRouter>
      <Switch>
      <Route path='/'>
        <h1>Employees</h1>
        <button
          className='siteBttn'
          onClick={showAllInfo}
          >Expand All Employees</button>
        <button
          className='siteBttn'
          onClick={minimizeAllInfo}
          >Minimize All Employees</button>
        {Object.values(employees)?.map((person, i) => {
          person.expanded = expanded;
          return <Employee key={person.id} employee={person}/>
        })}
      </Route>
      </Switch>
      </BrowserRouter>
    );
}

export default App;
