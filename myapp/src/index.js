import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Hello from './MyComponents/MyclassComponent';
import Headline from './MyComponents/MyfunctionalComponent';
import Friends from './MyComponents/FriendsComponent';
import EmpTable from './MyComponents/EmpTable';
//import { Welcome, password, username } from './MyComponents/welcome';
import * as data from './MyComponents/welcome';
import ParentComp from './MyComponents/ParentCOmp';
import Parent from './ContextComp/Parent';
import MystateHook from './Hooks/MyStateHook';



var ele = (
  <ul>
    <li>Tea</li>
    <li>Coffee</li>
    <li>Beer</li>
  </ul>
)


var name = "Abhijeet"
var company = "Google"

const emp = [
  {name: "Rakesh",mobile: 8329798623 },
  {name: "Mukesh",mobile: 8224798623 },
  {name: "Suresh",mobile: 8329798623 },
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
<h1 className='text-primary'>This is using bootstrap</h1>
<h1 className='text-success'>Yeehaw!! Bootstrap in React</h1>

<div className='container'>
    <MystateHook/>
</div>
</>


);


