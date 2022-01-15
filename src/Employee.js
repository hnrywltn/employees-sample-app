import { useState, useEffect } from 'react';



function Employee({employee}) {

  const [expandedInfo, setExpandedInfo] = useState(employee.expanded);
  const [showform, setShowform] = useState(false);


  useEffect(() => {
    setExpandedInfo(employee.expanded)
  }, [employee.expanded])


  const showInfo = () => setExpandedInfo(!expandedInfo)
  const editClick = () => setShowform(true);


  const saveClick = () => {
    setShowform(false);
  };




  let dom = (
    <div>
        <img className='profilePic' src={employee.avatar} alt={`${employee.firstName}'s profile`} />
        <button
          onClick={showInfo}
          >Expand</button>
        <button
          onClick={editClick}
          >Edit</button>
        <h4>{employee.firstName} {employee.lastName}</h4>
    </div>
  );

  if(expandedInfo) {
      dom = (
          <div>
              <img className='profilePic' src={employee.avatar} alt={`${employee.firstName}'s profile`} />
              <button
                onClick={showInfo}
                >Minimize</button>
              <button
                onClick={editClick}
                >Edit</button>
              <h4>{employee.firstName} {employee.lastName}</h4>
          </div>
      );
    };



    if(showform) {
        dom = (
          <div>
              PUT A FORM HERE!
              <button
                onClick={saveClick}
                >Save</button>
          </div>
      );
  }



//   const deleteClick = async (e) => {
//     e.preventDefault();
//     await dispatch(deleteResourceById(resource.id));
//     await dispatch(getResources());
//   };






  return dom;
}

export default Employee;
