import React from 'react';
import Nav_func from './components/Navbar';
import Textarea_func from './components/Textarea';
function App() {
  console.log(typeof(title));
  return (

    <>
      <Nav_func/>
      <div className="container">
      <Textarea_func label="Enter your text here!"/>
      </div>
     
      
    </>
  );
}


export default App;
