import React, { useReducer, useState, useContext } from "react";
import GlobalContext from "../../context/GlobalContext";

const Form = () => {
  const Ctx = useContext(GlobalContext);
  const [name, setname] = useState({
    name: "",
    email: "",
    status: "",
  });

  const handleChange = (e) => {
    setname({ ...name, [e.target.id]: e.target.value });
  };

  const handleSubmit = () => {
    const formData = {
      id: Math.random().toFixed(2)* 100 ,
      name: name.name ? name.name : "",
      email: name.email ? name.email : "",
      status: name.status ? name.status : "off",
    };
    Ctx.addData(formData);
    Ctx.toggleForm();
  };

  return (
    <>
      <form action="" className="form-control">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" onChange={handleChange} />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" onChange={handleChange} />
        <label htmlFor="radio">Status</label>
        <input type="checkbox" id="status" onChange={handleChange} />
      </form>
      <button onClick={handleSubmit}> Submit </button>
    </>
  );
};

export default Form;
