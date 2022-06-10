import React , {useState ,useContext} from 'react'
import GlobalContext from '../../context/GlobalContext';

const EditForm = (props) => {
  const ctx = useContext(GlobalContext);
  const [editName, setEditName] = useState(props.data.name);
  const [editEmail, setEditEmail] = useState(props.data.email);

  const submitEditValues = () => {
    const editedFormData = {
      id: props.data.id,
      name: editName,
      email: editEmail,
      status: props.data.status,
    };
    console.log(props.index);
    ctx.editData(editedFormData, props.index);
  };
  return (
    <div>
      <form action="">
        <label htmlFor="name">name</label>
        <input
          type="text"
          name=""
          id="name"
          value={editName}
          onChange={(e) => setEditName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name=""
          id="email"
          value={editEmail}
          onChange={(e) => setEditEmail(e.target.value)}
        />
      </form>
      <button className="btn btn-sm btn-success" onClick={submitEditValues}>
        Submit Changes
      </button>
    </div>
  );
};

export default EditForm