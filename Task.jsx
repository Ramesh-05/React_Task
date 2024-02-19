import React, { useEffect, useState } from "react";

const Task = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    setValue(value);
  }, [value]);
  const AddValue = () => {
    setValue(value + 1);
    console.log(`Value has been Changed from   ${value} to  ${value + 1}`);
  };
  return (
    <div>
      <center>
        {" "}
        <h1>{value}</h1>
        <button onClick={AddValue}>Add</button>
      </center>
    </div>
  );
};

export default Task;
