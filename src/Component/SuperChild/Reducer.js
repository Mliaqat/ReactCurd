import React from "react";

function Reducer(state, action) {
  
  switch (action.type) {
    case "Add":
      //  return[action.payload,...state]
      return { name: action.payload.name,age:action.payload.age};

    default:
      return state;
  }
}

export default Reducer;
