import React, { useContext, useState } from "react";
import GlobalContext from "../../context/GlobalContext";
import Form from "../form/Form";
import EditForm from "../popup/EditForm";

const Table = () => {
  const ctx = useContext(GlobalContext);
  const tableData = useContext(GlobalContext);
  const [rowId, setrowId] = useState("");
  const [toggle, setToggle] = useState(false);
  const editPopup = (item) => {
    setToggle(!toggle);
    setrowId(item.id);
  };

  return (
    <div className="container">
      <table className="table text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th colSpan={2}> Actions </th>
          </tr>
        </thead>
        <tbody>
          {tableData.data.map((data, index) => (
            <tr key={data.id} className="position-relative">
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.status}</td>
              <td>
                <button
                  className="btn btn-sm btn-info"
                  onClick={() => editPopup(data)}
                >
                  Edit
                </button>
                {rowId === data.id && toggle ? (
                  <div className="shadow position-absolute bg-secondary">
                    <EditForm data={data} index={index} />
                  </div>
                ) : (
                  ""
                )}
              </td>
              <td>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => ctx.deleteData(data.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-primary btn-sm" onClick={ctx.toggleForm}>
        Add new Data
      </button>
      {ctx.toggle && <Form />}
    </div>
  );
};

export default Table;
