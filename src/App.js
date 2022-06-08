
import './App.css';
import Child from './Component/Child/Child';
import SuperChild from './Component/SuperChild/SuperChild';
import { Formcontex } from './Component/SuperChild/Contexapi';
import { useContext } from 'react';

function App() {
  const { formdata} = useContext(Formcontex);

  return (
    <div className="App">
      
     <h4>This is Parent</h4> 
      <label>Name:{formdata.name}    Age:{formdata.age}</label>
     <Child></Child>
     <SuperChild></SuperChild>
    
    </div>
  );
}

export default App;
