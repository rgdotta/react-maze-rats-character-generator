import React from "react";

function Attributes(props) {
  return (
    <div className="flexRow">
      <div className="flexRow attributeBox">
        <p className="attributeName">{props.key1}</p>
        <p className="attributeValue">{props.value1}</p>
      </div>
      <div className="flexRow attributeBox">
        <p className="attributeName">{props.key2}</p>
        <p className="attributeValue">{props.value2}</p>
      </div>
      <div className="flexRow attributeBox">
        <p className="attributeName">{props.key3}</p>
        <p className="attributeValue">{props.value3}</p>
      </div>
    </div>
  );
}

export default Attributes;
