/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { EditIcon, DeleteIcon } from "./icons/icons";

function App() {
  const [list, setList] = useState([]);
  const [checkedCounter, setCheckedCounter] = useState(0);
  const [addTodo, setAddTodo] = useState("");

  const Edit = (_id, text) => {
    const inputValue = window.prompt("Edit", text);
    if (!inputValue) return;

    console.log(inputValue);
    //axios.patch()
  };

  const Delete = (_id) => {
    console.log(_id);
    axios.delete("http://localhost:3000/todo/delete" , {id:_id})
    .then((response)=>{console.log(response)})
  };

  const Add = () => {
    console.log(addTodo);
    axios.post("http://localhost:3000/todo/add" , {list:setAddTodo() , isDone:false})
    .then((response)=>{console.log(response)})
  };

  const toggleDone = (_id, isDone) => {
    axios.patch("http://localhost:3000/todo/count" , {id:_id , isDone:isDone}) 
    .then((response)=>{console.log(response)})
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/todo/")
      .then((response) => {console.log(response)})
      .then((data) => {
        console.log(data);
        setList(data.data);
      });
      
  }, []);

  return (
    <div className="container">
      <div className="title">
        <div>My Todo list</div>
        <div className="count">
          {checkedCounter}/{list.length}
        </div>
      </div>
      <div className="list">
        {list.map(({ text, _id, isDone }, index) => (
          <div className="todo" key={index}>
            <div className="checkbox">
              <input
                type={"checkbox"}
                defaultChecked={isDone}
                onChange={() => toggleDone(_id, isDone)}
              />
              <div>{text}</div>
            </div>
            <div className="actions">
              <div onClick={() => Edit(_id, text)}>
                <EditIcon />
              </div>
              <div onClick={() => Delete(_id)}>
                <DeleteIcon />
              </div>
            </div>
          </div>
        ))}
        <input
          placeholder="what's next?"
          onChange={(e) => setAddTodo(e.target.value)}
        />
        <div className="button" onClick={() => Add()}>
          Add task
        </div>
      </div>
    </div>
  );
}

export default App;
