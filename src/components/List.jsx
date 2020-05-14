import React from "react";

function List(props) {
  const list = [
    <p className="listItem">{props.item4}</p>,
    <p className="listItem">{props.item5}</p>,
    <p className="listItem">{props.item6}</p>
  ];

  return (
    <div className="list">
      <p className="listTitle">{props.title}</p>
      <div>
        <p className="listItem">{props.item1}</p>
        <p className="listItem">{props.item2}</p>
        <p className="listItem">{props.item3}</p>
        {props.complete === true ? list : ""}
      </div>
    </div>
  );
}

export default List;
