import React, { useState } from "react";
import axios from "axios";

export default function EditFeed({ _id, startTime, endTime }) {
  const [isEditable, setIsEditable] = useState(false);

  function handleEdit() {
    setIsEditable(!isEditable);
  }
  function handleChange(e) {
    console.log(e.currentTarget.textContext);
  }

  return (
    <div key={_id}>
      <h3
        contentEditable={isEditable}
        onInput={(e) => {
          handleChange(e);
        }}
      ></h3>
      <h3 contentEditable={isEditable}>{startTime}</h3>
      <h3 contentEditable={isEditable}>{endTime}</h3>
      <div>
        <button onClick={handleEdit}>Edit Feed</button>
      </div>
    </div>
  );
}
