import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import data from './data';
import Card from './components/Card';
import Navbar from './components/Navbar';

function App(){

    const dataclr = data.map( item=>{
        return <Card 
        key={item.id}
        item={item}
        />
    }
    )

    return(
        <div>
        <Navbar/>
        <div className="cards">
        {dataclr}
        </div>
        </div>
    )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
