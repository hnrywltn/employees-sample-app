import { useState } from 'react';
// import EditResourceForm from './EditResourceForm.js';
// import { useDispatch } from 'react-redux';
// import {deleteResourceById, getResources} from '../../store/resource.js';
// import '../Home/Home.css';


function Employee({employee}) {
//   const [showform, setShowform] = useState(false);


//   const dispatch = useDispatch();
  let dom = <p>{employee.firstName}</p>


//   const editClick = () => {
//     setShowform(true);
//   };


//   const deleteClick = async (e) => {
//     e.preventDefault();
//     await dispatch(deleteResourceById(resource.id));
//     await dispatch(getResources());
//   };


console.log(employee)

//   if(resource.user_id) {
//     dom = (
//       <div className="resource" key={resource.id}>
//         <a href={resource.ref_link} target="blank">{resource.name}</a>
//         <p>{resource.description}</p>
//         <button
//           onClick={editClick}
//         >
//           edit
//         </button>
//         <button
//           onClick={deleteClick}
//         >
//           delete
//         </button>
//       </div>
//     );
//   };

//   if(!resource.user_id) {
//     dom = (
//       <div className="resource" key={resource.id}>
//         <a href={resource.ref_link} target="blank">{resource.name}</a>
//         <p>{resource.description}</p>
//       </div>
//     );
//   };

//   if(resource.user_id && showform) {
//     dom = (
//       <EditResourceForm resource={resource} setShowform={setShowform}/>
//     );
//   };




  // console.log(resource.id);
  return dom;
}

export default Employee;
