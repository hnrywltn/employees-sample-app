import { useState, useEffect } from 'react';



function Employee({employee}) {

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



  console.log(employee)


  useEffect(() => {
    setExpandedInfo(employee.expanded)
  }, [employee.expanded])


  const showInfo = () => setExpandedInfo(!expandedInfo)
  const editClick = () => setShowform(true);


  const updateFirstName = (e) => setFirstName(e.target.value);
  const updateLastName = (e) => setLastName(e.target.value);
  const updateBio = (e) => setBio(e.target.value);
  const updateEmail = (e) => setEmail(e.target.value);
  const updatePhone = (e) => setPhone(e.target.value);
  const updateStreetAddress = (e) => setStreetAddress(e.taget.value);
  const updateZipCode = (e) => setZipCode(e.taget.value);
  const updateCity = (e) => setCity(e.taget.value);
  const updateState = (e) => setState(e.taget.value);


  const saveClick = () => {
    setShowform(false);
  };




  let dom = (
    <div>
        <img className='profilePic' src={employee.avatar} alt={`${firstName}'s profile`} />
        <button
          onClick={showInfo}
          >Expand</button>
        <button
          onClick={editClick}
          >Edit</button>
        <h4>{firstName} {lastName}</h4>
    </div>
  );

  if(expandedInfo) {
      dom = (
          <div>
              <img className='profilePic' src={employee.avatar} alt={`${firstName}'s profile`} />
              <button
                onClick={showInfo}
                >Minimize</button>
              <button
                onClick={editClick}
                >Edit</button>
              <h4>{firstName} {lastName}</h4>
              <p>{email}</p>
              <p>{streetAddress} {city}, {state} {zipCode}</p>
              <p>{phone}</p>
              <p>{bio}</p>

          </div>
      );
    };



    if(showform) {
        dom = (
          <div>
              PUT A FORM HERE!
              <form
              onSubmit={saveClick}>
                  <label>First Name</label>
                  <input
                    type='text'
                    placeholder='First Name'
                    required
                    onChange={updateFirstName}
                    value={firstName}
                  />

                  <label>Last Name</label>
                  <input
                    type='text'
                    placeholder='Last Name'
                    required
                    onChange={updateLastName}
                    value={lastName}
                  />

                  <label>Email</label>
                  <input
                    type='email'
                    placeholder='Email'
                    required
                    onChange={updateEmail}
                    value={email}
                  />

                  <label>Phone</label>
                  <input
                    type='text'
                    placeholder='Phone Number with Extension'
                    required
                    onChange={updatePhone}
                  />

                  <label>Bio</label>
                  <textarea
                    placeholder='Biography'
                    required
                    value={bio}
                    onChange={updateBio}
                  />

                  <label>Address</label>
                  <div>
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
              <button
                onClick={saveClick}
                >Save</button>
          </div>
      );
  }










  return dom;
}

export default Employee;
