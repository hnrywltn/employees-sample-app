import { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
import { editEmployee, getEmployees, deleteEmployeeById } from './store/employee';
import { useDispatch } from 'react-redux'




function Employee({employee}) {

  const dispatch = useDispatch();


  const [expandedInfo, setExpandedInfo] = useState(employee.expanded);
  const [showform, setShowform] = useState(false);

  const [firstName, setFirstName] = useState(employee.firstName)
  const [lastName, setLastName] = useState(employee.lastName)
  const [email, setEmail] = useState(employee.email)
  const [bio, setBio] = useState(employee.bio)
  const [phone, setPhone] = useState(employee.phone)


  const [zipCode, setZipCode] = useState(employee.address.zipCode)
  const [city, setCity] = useState(employee.address.city)
  const [state, setState] = useState(employee.address.state)
  const [streetAddress, setStreetAddress] = useState(employee.address.streetAddress)


  useEffect(() => {
    setExpandedInfo(employee.expanded)
  }, [employee.expanded])




  const updateFirstName = (e) => setFirstName(e.target.value);
  const updateLastName = (e) => setLastName(e.target.value);
  const updateBio = (e) => setBio(e.target.value);
  const updateEmail = (e) => setEmail(e.target.value);
  const updatePhone = (e) => setPhone(e.target.value);


  const updateStreetAddress = (e) => setStreetAddress(e.target.value);
  const updateZipCode = (e) => setZipCode(e.target.value);
  const updateCity = (e) => setCity(e.target.value);
  const updateState = (e) => setState(e.target.value);





  const showInfo = () => setExpandedInfo(!expandedInfo)
  const editClick = () => setShowform(true);
  const deleteClick = (e) => dispatch(deleteEmployeeById(employee.id));


  const saveClick = async () => {
    employee.firstName = firstName;
    employee.lastName = lastName;
    employee.address = {
        streetAddress,
        city,
        state,
        zipCode
    };
    employee.bio = bio;
    employee.email = email;
    employee.phone = phone;
    dispatch(editEmployee(employee));
    setShowform(false);
  };





  let dom = (
    <div className='employeeContainer'>
        <h4 className='name'>{firstName} {lastName}</h4>
        <img className='profilePic' src={employee.avatar} alt={`${firstName}'s profile`} />
        <button
          onClick={showInfo}
          className='expandBttn bttn'
          >Expand</button>
        <button
          className='editBttn bttn'
          onClick={editClick}
          >Edit</button>
          <button className='deleteBttn' onClick={deleteClick} />
    </div>
  );

  if(expandedInfo) {
      dom = (
          <div className='expandedEmployeeContainer'>
              <img className='expandedProfilePic' src={employee.avatar} alt={`${firstName}'s profile`} />
              <button className='expandedDeleteBttn' onClick={deleteClick} />
              <button
                className='minimize bttn'
                onClick={showInfo}
                >Minimize</button>
              <button
                className='expandedEdit bttn'
                onClick={editClick}
                >Edit</button>
              <h4 className='expandedName'>{firstName} {lastName}</h4>
              <p className='eEmail'><strong>Email: </strong>{email}</p>
              <p className='eAddress'><strong>Address: </strong>{streetAddress} {city}, {state} {zipCode}</p>
              <p className='ePhone'><strong>Phone: </strong>{phone}</p>
              <p className='eBio'><strong>Bio: </strong>{bio}</p>

          </div>
      );
    };



    if(showform) {
      dom = (
        <div className='employeeFormContainer'>

              <h4 className='expandedName'>{firstName} {lastName}</h4>
              <button className='fDeleteBttn' onClick={deleteClick} />
              <button
                onClick={saveClick}
                className='bttn fSave'
                >Save</button>
              <form
              onSubmit={saveClick}>
                  <label className='lFirstName'>First Name</label>
                  <input
                    className='fFirstName'
                    type='text'
                    placeholder='First Name'
                    required
                    onChange={updateFirstName}
                    value={firstName}
                  />

                  <label className='lLastName'>Last Name</label>
                  <input
                    className='fLastName'
                    type='text'
                    placeholder='Last Name'
                    required
                    onChange={updateLastName}
                    value={lastName}
                  />

                  <label className='lEmail'>Email</label>
                  <input
                    type='email'
                    className='fEmail'
                    placeholder='Email'
                    required
                    onChange={updateEmail}
                    value={email}
                  />

                  <label className='lPhone'>Phone</label>
                  <input
                    type='text'
                    className='fPhone'
                    placeholder='Phone Number with Extension'
                    required
                    onChange={updatePhone}
                  />

                  <label className='lBio'>Bio</label>
                  <textarea
                    placeholder='Biography'
                    className='fBio'
                    required
                    value={bio}
                    onChange={updateBio}
                  />

                  <label className='lAddress'>Address</label>
                  <div className='fAddress'>
                      <input
                        type='text'
                        placeholder='Street Address'
                        required
                        value={streetAddress}
                        onChange={updateStreetAddress}
                      />
                      <input
                        type='text'
                        placeholder='City'
                        required
                        value={city}
                        onChange={updateCity}
                      />
                      <input
                        type='text'
                        placeholder='State'
                        required
                        value={state}
                        onChange={updateState}
                      />
                      <input
                        type='text'
                        placeholder='Zip'
                        required
                        value={zipCode}
                        onChange={updateZipCode}
                      />
                  </div>



              </form>

          </div>
      );
  }










  return dom;
}

export default Employee;
