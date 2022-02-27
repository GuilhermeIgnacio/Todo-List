import React from "react";

function DoneImg(props) {
  if (props.done) {
    return <img alt="undone" sizes="large" src="./assets/x.svg"></img>;
  } else {
    return <img alt="done" src="./assets/check.svg"></img>;
  }
}

function ListItem(props) {
  return (
    <li className={props.item.done ? "done item" : "item"} key={props.item.id}>
      <button
        id="delete"
        className="btn"
        onClick={() => {
          props.onItemDeleted(props.item);
        }}
      >
        <img alt="delete" src="./assets/trash-2.svg"></img>
      </button>
      <button
        id="check"
        className="btn"
        onClick={() => {
          props.onDone(props.item);
        }}
      >
        <DoneImg done={props.item.done}></DoneImg>
      </button>
      {props.item.text}
    </li>
  );
}

export default ListItem;
