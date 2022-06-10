import { useState, useEffect } from "react";
import GlobalContext from "./GlobalContext";

const ContextState = (props) => {
  
let initialData;
if( localStorage.getItem("Table data") ===null )
{ initialData = [] }
else{
  initialData = JSON.parse( localStorage.getItem('Table data') )
}

  const [data, setdata] = useState(initialData);
  const [toggle, setToggle] = useState(false);  

  useEffect(() => {
    localStorage.setItem("Table data", JSON.stringify(data));

  }, [data]);


  const addData = (formData) => {
    setdata([...data, formData]);
  };
  const toggleForm = () => {
    setToggle(!toggle);
  };

  const deleteData = (eyeDee) => {
    setdata(data.filter((item) => item.id !== eyeDee));
    console.log(eyeDee);
  };

  const editData = (edit, i) => {
    const newTodos = [...data];
    newTodos[i] = edit;

    setdata(newTodos);
  };

  return (
    <GlobalContext.Provider
      value={{ data, addData, toggleForm, toggle, deleteData, editData }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default ContextState;
