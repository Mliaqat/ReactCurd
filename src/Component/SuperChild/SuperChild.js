import React, { useContext, useState } from "react";
import { Formcontex } from "./Contexapi";

function SuperChild() {
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [error, seterror] = useState(false);

  const { formdata, adddata } = useContext(Formcontex);

  const onSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "") {
      seterror(true);
      return;
    }
    adddata({
        name: name,
        age: age,
      });

      console.log(formdata);
     

  };

  return (
    <form onSubmit={onSubmit}>
      <div className={`w-50 mx-auto mt-5 ${error ? "error" : ""}`}>
        <h4>Super Child</h4>
        <label>Enter Name</label>
              <div className="my-3">
          <input type="text" onChange={(e)=>setname(e.target.value)} />
          <br></br>
          <input type="number" onChange={(e)=>setage(e.target.value)} />
        </div>
        <button>Submit</button>
      </div>
    </form>
  );
}

export default SuperChild;
