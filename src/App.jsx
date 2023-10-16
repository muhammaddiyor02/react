import { useState } from 'react';
import './App.css';
import Header from  './components/Header/Header';
import Hero from './components/Hero/Hero';

function App() {
  const [count, setCount] = useState(0)
 console.log(count);




  return (
    <div className="App">
     
     
   
<Header data ={setCount}/>
<Hero data ={count}/>

    </div>
  );
}

export default App;
