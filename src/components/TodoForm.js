import React, { useState } from "react";

function TodoForm(props) {
  const [text, setText] = useState("");

  function handleChange(event) {
    let t = event.target.value;
    setText(t);
  }

  function addItem(event) {
    event.preventDefault();
    if (text) {
      //   setItems([...items, text]);
      props.onAddItem(text);
      setText("");
    }
  }
  return (
    <form className="asdd">
      <input
        className="asd"
        onChange={handleChange}
        type="text"
        placeholder="Tarefa"
        value={text}
      ></input>
      <button className="btn1" onClick={addItem}>
        Enviar
      </button>
    </form>
  );
}

export default TodoForm;
