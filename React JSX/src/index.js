import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
//----------------import a external css ----------------
import './index.css';
//-------------------------end--------------------------------

//===============================================================================================================================
// ------------------ REACT JSX ----------------------//

//---------------------BASIC-----------------------------


 let Sms="Hello";
 let mess=
 <div>
   world
   <hr></hr>
</div>
 ReactDOM.render(
     <>
   {Sms}{mess}
   
    <App />
    </>,
 document.getElementById('root')
 );



//----------------------BASIC END-----------------------

//-------------------JSX INTERNAL CSS-----------------------


let internalCss={
  color:"blue",
  textAlign:"center",
  boxShadow: "green 0px 0px 10px 19px",
}

let myele=<div style ={internalCss}>
  <h1>Welcome</h1>
  <h2>to</h2>
  <h3>Internal CSS</h3>
  <hr></hr>
</div>

ReactDOM.render(
  myele,
  document.getElementById("root")
  );

//-------------------JSX INTERNAL CSS End--------------------------------------
//*********************************************************************** */
//-------------------JSX EXTERNAL CSS ----------------------------------------


let myelem=<div className="ExternalCss">
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

ReactDOM.render(
  myelem,
  document.getElementById("root")
  );


//----------------------------( end external css )--------------------------


//---------------------------( JSX useing function Timeing(){ };   )
/*
function showtime(){
 
 let myelem=
 <div>
   <h1>Now the time is : {new Date().toLocaleTimeString()}</h1>
   <h2>Simple Add {5+10}</h2>
 </div>

ReactDOM.render(
  myelem,
  document.getElementById("root")
  );
}
 setInterval(showtime,1000)

 */
//--------------------
let time=
<div>
   <h1>Now the time is : {new Date().toLocaleTimeString()}</h1>
   <h2>Simple Add useing Expersion{"{}"}{5+10}</h2>
   <hr></hr>
 </div>

ReactDOM.render(
  myelem,
  document.getElementById("root")
  );
 setInterval(time,1000)

//-------------------JSX using (if & else) with a new method of ( Ternary Operator ) -------------------------------------


let age=18;

let element=<h1>{(age)<18?"<div>Welcome to vote":"Sorry your not elegbile to vote"}<hr></hr></h1>


ReactDOM.render(
  element,
  document.getElementById("root")
  );

let myname1=<input type="tex" placeholder="first name" />;
let myname2=<input type="tex" placeholder="last name" />;
let fullname=(
  <>
  {myname1}{myname2}
  </>);


//================= All answer 

ReactDOM.render(
  <>
  {Sms}{mess}<br></br>
  {myele}<br></br>
  {myelem}<br></br>
  {element}<br></br>
  {time}<br></br>
  {fullname}
  </>,
  document.getElementById("root")
  );



  //----------------------------------- End JSX Ternary Operator ------------------------------------------------------------- 

//=================================( JSX end )============================================================================
/*
ReactDOM.render(
  <>
<App />
  </>,
document.getElementById('root')
);

*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// ReactDOM.render(myele,document.getElementById("root"));
