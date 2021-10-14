import React from "react";
import './App.css';
import Contacts from './components/Contact';

function App() {
  return (
   <div className="row" 
   style = {{ 
    backgroundImage: "url('https://picsum.photos/2000/3000')" ,
    backgroundRepeat: 'no-repeat',
    }}>
     <div className="col-md-8 offset-md-2">
       <Contacts/>
     </div>
   </div>
  );
}

export default App;
