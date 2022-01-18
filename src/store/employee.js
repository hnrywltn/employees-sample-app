const LOAD = 'employee/';
const EDIT = 'employee/edit/';
const DELETE = 'employee/delete/';

const load = employees => ({
  type: LOAD,
  employees,
});

const edit = employee => ({
  type: EDIT,
  employee,
});

const deleteEmployee = employee => ({
  type: DELETE,
  employee,
});

export const getEmployees = () => async (dispatch) => {
    let json = await fetch('api/employees');
    let employees = await json.json();
    dispatch(load(employees));
    return employees;
  };

export const editEmployee = (payload) => async (dispatch) => {
  const res = await fetch(`/api/employees/${payload.id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  const employee = await res.json();
  dispatch(edit(employee));
  return employee;
};

export const deleteEmployeeById = (employeeId) => async (dispatch) => {
  const res = await fetch(`/api/employees/${employeeId}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });
  const data = res.json();
  dispatch(deleteEmployee(employeeId));
  return data.message;
};



const initialState = {}
const resourceReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      const newEmployees = {};
      action.employees.employees.forEach(employee => {
        newEmployees[employee.id] = employee;
      });
      return newEmployees;
    case DELETE: {
      const newState = { ...state }
      delete newState[action.employee]
      return newState
    }
    case EDIT: {
      return {
        ...state,
        [action.employee.id]: action.employee
      }
    }
    default:
      return state;
  }
};

export default resourceReducer;
