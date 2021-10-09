import React, { useState, useEffect } from "react";

const ContactForm = (props) => {
  const initialFieldValues = {
    fullName: "",
    nic: "",
    email: "",
    mobile: "",
    address: "",
    dob: "",
    gender: "",
    parentName: "",
    parentMob: "",
  };

  var [values, setValues] = useState(initialFieldValues);

  useEffect(() => {
    if(props.currentId == "")
      setValues({
        ...initialFieldValues
      })
      else
      setValues({
        ...props.contactObjects[props.currentId]
      })
  }, [props.currentId, props.contactObjects])

  const handleInputChange = (e) => {
    var { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const validate = ()=> {
    if(values.nic.length != 10 && values.nic.length != 12) {    
      alert("NIC is invalid");
      return false;
    }
    if(values.mobile.length != 10){    
      alert("Mobile number is invalid");
      return false;
    }
    var re = /\S+@\S+\.\S+/;
    if (!re.test(values.email)) {
      alert("Invalid email");
      return false;
    }
    if (values.gender == "unknown") {
      alert("Select your gender");
      return false; 
    }
    return true;
  }
     
  const handleFormSubmit = (e) => {
    e.preventDefault();
    let isvalid = validate();
    if (isvalid){
      props.addorEdit(values);
    } 
  };

  return (
      
    <form autoComplete="off" onSubmit={handleFormSubmit}>
      <div>
        <div className="form-group input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-user"></i>
            </div>
          </div>
          <input className="form-control" placeholder="Full Name" name="fullName" value={values.fullName}
            onChange={handleInputChange}
          />
        </div>
        </div>

        <div>
        <div className="form-group input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-id-card"></i>
            </div>
          </div>
          <input className="form-control" placeholder="NIC" name="nic" value={values.nic}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-row">
          <div className="form-group input-group col-md-6">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <i className="fas fa-mobile-alt"></i>
              </div>
            </div>
            <input
              className="form-control" placeholder="Mobile" name="mobile" value={values.mobile}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group input-group col-md-6">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <i className="fas fa-envelope"></i>
              </div>
            </div>
            <input
              className="form-control" placeholder="Email" name="email" value={values.email}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>

      <div className="form-group">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="fas fa-home"></i>
          </div>
        </div>
        <textarea
          className="form-control" placeholder="Address" name="address" value={values.address}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <div className="form-group input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-calendar"></i>
            </div>
          </div>
          <input
            className="form-control" placeholder="Date of Birth" name="dob" value={values.dob}
            onChange={handleInputChange}
          />
        </div>
      </div>
      
      <div>
        <div className="form-group input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-mercury"></i>
            </div>
          </div>

          <select className="form-control" placeholder="Gender" name="gender" value={values.gender}
            onChange={handleInputChange}>    
            <option value="unknown">Gender</option> 
            <option value="male">Male</option>            
            <option value="female">Female</option>            
          </select>

        </div>
      </div>

      <div>
        <div className="form-group input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-user"></i>
            </div>
          </div>
          <input
            className="form-control" placeholder="Parent's Name" name="parentName" value={values.parentName}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="form-group input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <i className="fas fa-mobile-alt"></i>
              </div>
            </div>
            <input
              className="form-control" placeholder="Parent's Mobile" name="parentMob" value={values.parentMob}
              onChange={handleInputChange}
            />
          </div>

      <div className="form-group">
        <input
          type="submit"
          value={props.currentId=='' ? "Save": "Update"} 
          className="btn btn-primary btn-block"
        />
      </div>
      
    </form>
    
  );
  
};

export default ContactForm;
