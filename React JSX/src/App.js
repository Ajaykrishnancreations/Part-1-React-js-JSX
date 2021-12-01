import { render } from '@testing-library/react';
import React from 'react';
import './App.css';
import './index.js';
import Footer from'./footer.js';

//================[ JSX + CSS ]=======================================



class App extends React.Component {
   render(){
     
   
  // here var i value is used for Ternary operator
     var i=1;
  
  //this is internal css useing a react method
     var internalCss={
       color:"red"
     }
  
     return (
    <div style={internalCss}>
    {/*</div>/<div className="externalCss">*/}
    <h1>React JSX </h1>
    <h1>Internal Css</h1>
     <h2>Add 5+5={5+5}</h2>
     <hr></hr>
     </div>
     );
    }
   }
  
//================external css==============

function External(){
 return(
    <div className="ExternalCss">
   <h1>Welcome</h1>
  <h2>to</h2>
  <h3>External CSS</h3>
  <hr></hr>
  <h1>This is Unorder list in React js</h1>
  <ul>
    <li>mobile-1</li>
    <li>mobile-2</li>
    <li>mobile-3</li>
  </ul>
  <hr></hr>
</div>
 );
}
//================================= end external css=====================


function ShowTime(){
return(
   <>
    <h1>Now the time is : {new Date().toLocaleTimeString()}</h1>
   <h2>Simple Add useing experession = {5+10}</h2>
   <hr></hr>
   </>
   
);
} 
//===========( ternary opertor )===================================


function Ternary(){
   return(
<>
<h1>Ternary opertor</h1>
{17>=18?'true':'false'}
<hr></hr>
</>
 );
}
//======================================[END JSX]============================================


function App1(){
   return(
      <>
      <br></br>
      <br></br>
      </>
   );
}

//===========================( o/p )===================================

function Answer(){
   return(
      <>
   <App />
   <External />
   <ShowTime />
   <Ternary />
   <App1 />
      </>
   )
}

  export default Answer;
