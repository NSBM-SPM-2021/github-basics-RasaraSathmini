import React, { useState, useEffect} from "react";
import ContactForm from "./ContactForm";
import firebaseDb from "../firebasedb";

const Contacts = () => {

  var[contactObjects,setContactObjects] = useState({})
  var[currentId,setCurrentId] = useState("")
    
  useEffect(()=>{
    firebaseDb.child("contacts").on('value',snapshot=>{
        if (snapshot.val() != null)
          setContactObjects({
            ...snapshot.val()
          })
        else
        setContactObjects({})
    })
  },[]) //similar to componentDidMount

  const addorEdit = (obj) => {
    if(currentId=== '' )
      firebaseDb.child("contacts").push(
        obj, 
        (err) => {
            if (err) 
                console.log(err)
            else
                setCurrentId('')
        }
    )
    else
      firebaseDb.child(`contacts/${currentId}`).set(
        obj, 
        (err) => {
            if (err) 
                console.log(err)
            else
                setCurrentId('')
      })
  };

const onDelete = key =>{
  if(window.confirm('Are you sure to delete this student?')) {
    firebaseDb.child(`contacts/${key}`).remove(
      (err) => {
          if (err) 
              console.log(err)
          else
              setCurrentId('')
    })
  }
}

  return (
    <>
      <div class="jumbotron jumbotron-fluid">
        <div class="container" style={{backgroundColor: "darkorange"}}>
          <h1 class="display-4 text-center"> Student Register </h1>
        </div>
      </div>
      <div className="row justify-content-center" >
        <div className="col-md-5" style={{backgroundColor: "orange"}} >
          <ContactForm {...({addorEdit, currentId, contactObjects}) }/>
        </div>
        
        <text>
          <br />
          <br />
          <br />
        </text>

        <div className="col-md-12" style={{backgroundColor: "white"}} >

          <table className = "table table-stripped">
        
            <thead className = "thead-light">
              <tr>
                <th style={{backgroundColor: "yellow"}}> Full Name </th>
                <th style={{backgroundColor: "yellow"}}> NIC </th>
                <th style={{backgroundColor: "yellow"}}> Mobile </th>
                <th style={{backgroundColor: "yellow"}}> Email </th>
                <th style={{backgroundColor: "yellow"}}> Address </th>
                <th style={{backgroundColor: "yellow"}}> DOB </th>
                <th style={{backgroundColor: "yellow"}}> Gender </th>
                <th style={{backgroundColor: "yellow"}}> Parent Name </th>
                <th style={{backgroundColor: "yellow"}}> Parent mobile </th>
                <th style={{backgroundColor: "yellow"}}> Action </th>
              </tr>
            </thead>
            <tbody>
              {
                Object.keys(contactObjects).map(id=>{
                  return <tr key={id}>
                      <td>{contactObjects[id].fullName}</td>
                      <td>{contactObjects[id].nic}</td>
                      <td>{contactObjects[id].mobile}</td>
                      <td>{contactObjects[id].email}</td>
                      <td>{contactObjects[id].address}</td>
                      <td>{contactObjects[id].dob}</td>
                      <td>{contactObjects[id].gender}</td>
                      <td>{contactObjects[id].parentName}</td>
                      <td>{contactObjects[id].parentMob}</td>
                      
                      <td>
                        <a href="!#" className="btn text-primary" onClick={() => {setCurrentId(id)} }>
                          <i className="fas fa-pencil-alt"></i>
                        </a>
                        <a href="!#" className="btn text-danger" onClick={() => {onDelete(id)} } >
                          <i className="fas fa-trash"></i>
                        </a>
                      </td>

                  </tr>
                })
              }
            </tbody>
           
          </table>

        </div>
      </div>
    </>
  );
};

export default Contacts;
